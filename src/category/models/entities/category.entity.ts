import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../config/base.entity';

@Entity({ name: 'categorias' })
export class CategoryEntity extends BaseEntity {
  @Column({ length: 30, default: '' })
  nombre: string;

  // @OneToMany(() => ProductEntity, (product) => product.category)
  // products: ProductEntity[];
}
