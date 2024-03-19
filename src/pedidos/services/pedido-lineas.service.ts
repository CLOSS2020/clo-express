import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { ProductService } from '../../product/services/product.service';
import { PedidoLineasEntity } from '../models/entities/pedido-lineas.entity';
import { PedidoLineas } from '../models/interfaces/pedido-lineas.interface';
import { UpdatePedidoLineas } from '../models/interfaces/update-pedido-lineas.interface';

export class PedidoLineasService extends BaseService<PedidoLineasEntity> {
  constructor(
    private readonly productService: ProductService = new ProductService(),
  ) {
    super(PedidoLineasEntity);
  }

  async findAllPedidoLineas(): Promise<PedidoLineasEntity[]> {
    return (await this.execRepository).find();
  }

  async findPedidoLineasById(id: string): Promise<PedidoLineasEntity | null> {
    return (await this.execRepository).findOne({ where: [{ id }] });
  }

  async findPedidoLineasWithRelation(
    id: string,
  ): Promise<PedidoLineasEntity | null> {
    return (await this.execRepository)
      .createQueryBuilder('purchases_products')
      .leftJoinAndSelect('purchases_products.product', 'product')
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('purchases_products.purchase', 'purchase')
      .leftJoinAndSelect('purchase.customer', 'customer')
      .leftJoinAndSelect('customer.user', 'user')
      .where({ id })
      .getOne();
  }

  async createPedidoLineas(body: PedidoLineas): Promise<PedidoLineasEntity> {
    const newPP = (await this.execRepository).create(body);

    const prod = await this.productService.findProductById('newPP.product.id');

    //newPP.totalPrice = prod!.price * newPP.quantityProduct;

    return (await this.execRepository).save(newPP);
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
