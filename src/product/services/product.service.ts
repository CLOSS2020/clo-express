import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { Product } from '../models/interfaces/product.interface';
import { UpdateProduct } from '../models/interfaces/update-product.dto';
import { ProductEntity } from '../models/entities/product.entity';

export class ProductService extends BaseService<ProductEntity> {
  constructor() {
    super(ProductEntity);
  }

  async findAllProduct(): Promise<ProductEntity[]> {
    return (await this.execRepository).find();
  }

  async findProductById(id: string): Promise<ProductEntity | null> {
    return (await this.execRepository).findOne({ where: [{ id }] });
  }

  async findProductWithRelation(id: string): Promise<ProductEntity | null> {
    return (
      (await this.execRepository)
        .createQueryBuilder('product')
        // .leftJoinAndSelect('product.category', 'category')
        .getOne()
    );
  }

  async createProduct(body: Product): Promise<ProductEntity> {
    return (await this.execRepository).save(body);
  }

  async updateProduct(id: string, body: UpdateProduct): Promise<UpdateResult> {
    return (await this.execRepository).update(id, body);
  }

  async deleteProduct(id: string): Promise<DeleteResult> {
    return (await this.execRepository).softDelete(id);
  }
}
