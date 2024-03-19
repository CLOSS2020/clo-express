import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../config/base.entity';

@Entity({ name: 'articulo' })
export class ProductEntity extends BaseEntity {
  @Column({ length: 30, default: '' })
  codigo: string;

  @Column({ length: 6, default: '' })
  grupo: string;

  @Column({ length: 6, default: '' })
  subgrupo: string;

  @Column({ length: 150, default: '' })
  nombre: string;

  @Column({ length: 20, default: '' })
  referencia: string;

  @Column({ length: 20, default: '' })
  marca: string;

  @Column({ length: 15, default: '' })
  unidad: string;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  existencia: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio1: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio2: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio3: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio4: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio5: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio6: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  precio7: number;

  @Column({ type: 'decimal', precision: 4, scale: 0, default: 0 })
  discont: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  vta_max: number;

  @Column({ type: 'decimal', precision: 20, scale: 7, default: 0 })
  vta_min: number;

  @Column({ type: 'decimal', precision: 4, scale: 2, default: 0 })
  dctotope: number;

  @Column({ type: 'char', length: 1, default: '' })
  enpreventa: string;

  @Column({ type: 'decimal', precision: 24, scale: 7, default: 0 })
  comprometido: number;

  @Column({ type: 'decimal', precision: 15, scale: 3, default: 0 })
  vta_minenx: number;

  @Column({ default: 0 })
  vta_solofac: number;

  @Column({ default: 0 })
  vta_solone: number;

  // @ManyToOne(() => CategoryEntity, (category) => category.products)
  // @JoinColumn({ name: 'category_id' })
  // category: CategoryEntity;

  // @OneToMany(
  //   () => PurchaseProductEntity,
  //   (purchaseProduct) => purchaseProduct.product,
  // )
  // purchaseProduct: PurchaseProductEntity[];
}
