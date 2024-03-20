import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { PedidoEntity } from '../models/entities/pedido.entity';
import { PedidoApp } from '../models/interfaces/app/pedido-app.interface';
import { UpdatePedido } from '../models/interfaces/update-pedido.interface';
import { PedidoLineasService } from './pedido-lineas.service';
import { Pedido } from '../models/interfaces/pedido.interface';

export class PedidoService extends BaseService<PedidoEntity> {
  constructor(
    private readonly pedidoLineasService: PedidoLineasService = new PedidoLineasService(),
  ) {
    super(PedidoEntity);
  }

  async findAllPedido(): Promise<PedidoEntity[]> {
    return (await this.execRepository).find();
  }

  async findPedidoById(id: string): Promise<PedidoEntity | null> {
    return (await this.execRepository).findOne({ where: [{ id }] });
  }

  async findExistingPedido(kti_ndoc: string): Promise<PedidoEntity | null> {
    return (await this.execRepository).findOne({
      where: [{ kti_ndoc: kti_ndoc }],
    });
  }

  async findPedidoWithRelation(id: string): Promise<PedidoEntity | null> {
    return (
      (await this.execRepository)
        .createQueryBuilder('purchase')
        // .leftJoinAndSelect('purchase.customer', 'customer')
        // .leftJoinAndSelect('customer.user', 'user')
        // .leftJoinAndSelect('purchase.purchaseProduct', 'purchaseProduct')
        .where({ id })
        .getOne()
    );
  }

  async createPedidoApp({ Pedido: pedidos }: { Pedido: PedidoApp[] }) {
    const estado: {
      correlativo: string;
      status: number;
    }[] = [];

    for (const pedido of pedidos) {
      const {
        Cabecera: { Lineas: lineas, ...cabecera },
      } = pedido;

      const existePedido = await this.findExistingPedido(cabecera.kti_ndoc);

      if (existePedido) {
        estado.push({
          correlativo: cabecera.kti_ndoc,
          status: 111,
        });
      }

      for (const linea of lineas) {
        if (linea.kti_ndoc !== cabecera.kti_ndoc) {
          estado.push({
            correlativo: cabecera.kti_ndoc,
            status: 403,
          });
        } else {
          const existeLineas =
            await this.pedidoLineasService.findExistingPedidoLineas(
              linea.kti_ndoc,
              linea.kmv_codart,
            );

          if (existeLineas) {
            estado.push({
              correlativo: linea.kti_ndoc,
              status: 112,
            });
          } else {
            (await this.execRepository).save(cabecera);
            estado.push({
              correlativo: cabecera.kti_ndoc,
              status: 200,
            });
            await this.pedidoLineasService.createPedidoLineas(linea);
          }
        }
      }
    }

    return { estado: estado };
  }

  async createPedido(body: Pedido): Promise<PedidoEntity> {
    return (await this.execRepository).save(body);
  }

  async updatePedido(
    id: string,
    updateDto: UpdatePedido,
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, updateDto);
  }

  async deletePedido(id: string): Promise<DeleteResult> {
    return (await this.execRepository).softDelete(id);
  }
}
