import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { Category } from '../models/dto/category.interface';
import { UpdateCategory } from '../models/dto/update-category.dto';
import { CategoryEntity } from '../models/entities/category.entity';

export class CategoryService extends BaseService<CategoryEntity> {
  constructor() {
    super(CategoryEntity);
  }

  async findAllCategory(): Promise<CategoryEntity[]> {
    return (await this.execRepository).find();
  }

  async findCategoryById(id: string): Promise<CategoryEntity | null> {
    return (await this.execRepository).findOne({ where: [{ id }] });
  }

  async findCategoryWithRelation(id: string): Promise<CategoryEntity | null> {
    return (await this.execRepository)
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.products', 'product')
      .where({ id })
      .getOne();
  }

  async createCategory(body: Category): Promise<CategoryEntity> {
    return (await this.execRepository).save(body);
  }

  async updateCategory(
    id: string,
    body: UpdateCategory,
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, body);
  }

  async deleteCategory(id: string): Promise<DeleteResult> {
    return (await this.execRepository).softDelete(id);
  }
}
