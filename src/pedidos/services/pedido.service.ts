import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { PedidoEntity } from '../models/entities/pedido.entity';
import { Pedido } from '../models/interfaces/pedido.interface';
import { UpdatePedido } from '../models/interfaces/update-pedido.interface';

export class PedidoService extends BaseService<PedidoEntity> {
  constructor() {
    super(PedidoEntity);
  }

  async findAllPedido(): Promise<PedidoEntity[]> {
    return (await this.execRepository).find();
  }

  async findPedidoById(id: string): Promise<PedidoEntity | null> {
    return (await this.execRepository).findOne({ where: [{ id }] });
  }

  async findPedidoWithRelation(id: string): Promise<PedidoEntity | null> {
    return (await this.execRepository)
      .createQueryBuilder('purchase')
      .leftJoinAndSelect('purchase.customer', 'customer')
      .leftJoinAndSelect('customer.user', 'user')
      .leftJoinAndSelect('purchase.purchaseProduct', 'purchaseProduct')
      .where({ id })
      .getOne();
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
