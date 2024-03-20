import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { PedidoLineasEntity } from '../models/entities/pedido-lineas.entity';
import { PedidoLineas } from '../models/interfaces/pedido-lineas.interface';
import { UpdatePedidoLineas } from '../models/interfaces/update-pedido-lineas.interface';

export class PedidoLineasService extends BaseService<PedidoLineasEntity> {
  constructor() {
    super(PedidoLineasEntity);
  }

  async findAllPedidoLineas(): Promise<PedidoLineasEntity[]> {
    return (await this.execRepository).find();
  }

  async findPedidoLineasById(id: string): Promise<PedidoLineasEntity | null> {
    return (await this.execRepository).findOne({ where: [{ id }] });
  }

  async findExistingPedidoLineas(kti_ndoc: string, kmv_codart: string) {
    return (await this.execRepository).findOne({
      where: [{ kti_ndoc, kmv_codart }],
    });
  }

  async findPedidoLineasWithRelation(
    id: string,
  ): Promise<PedidoLineasEntity | null> {
    return (
      (await this.execRepository)
        .createQueryBuilder('purchases_products')
        //   .leftJoinAndSelect('purchases_products.product', 'product')
        //   .leftJoinAndSelect('product.category', 'category')
        //   .leftJoinAndSelect('purchases_products.purchase', 'purchase')
        //   .leftJoinAndSelect('purchase.customer', 'customer')
        //   .leftJoinAndSelect('customer.user', 'user')
        .where({ id })
        .getOne()
    );
  }

  async createPedidoLineas(body: PedidoLineas): Promise<PedidoLineasEntity> {
    return (await this.execRepository).save(body);
  }

  async updatePedidoLineas(
    id: string,
    body: UpdatePedidoLineas,
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, body);
  }

  async deletePedidoLineas(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete(id);
  }
}
