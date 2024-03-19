import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { Customer } from '../models/interfaces/customer.interface';
import { UpdateCustomer } from '../models/interfaces/update-customer.interface';
import { CustomerEntity } from '../models/entities/customer.entity';

export class CustomerService extends BaseService<CustomerEntity> {
  constructor() {
    super(CustomerEntity);
  }

  async findAllCustomer(): Promise<CustomerEntity[]> {
    return (await this.execRepository).find();
  }

  async findCustomerById(id: string): Promise<CustomerEntity | null> {
    return (await this.execRepository).findOne({ where: [{ id }] });
  }

  async findCustomerWithRelation(id: string): Promise<CustomerEntity | null> {
    return (await this.execRepository)
      .createQueryBuilder('customer')
      .leftJoinAndSelect('customer.user', 'user')
      .leftJoinAndSelect('customer.purchases', 'purchase')
      .leftJoinAndSelect('purchase.purchaseProduct', 'purchases_products')
      .leftJoinAndSelect('purchases_products.product', 'product')
      .leftJoinAndSelect('product.category', 'category')
      .where({ id })
      .getOne();
  }

  async createCustomer(body: Customer): Promise<CustomerEntity> {
    return (await this.execRepository).save(body);
  }

  async updateCustomer(
    id: string,
    body: UpdateCustomer,
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, body);
  }

  async deleteCustomer(id: string): Promise<DeleteResult> {
    return (await this.execRepository).softDelete(id);
  }
}
