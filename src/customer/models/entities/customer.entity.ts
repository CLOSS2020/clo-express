import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../config/base.entity';

@Entity({ name: 'cliempre' })
export class CustomerEntity extends BaseEntity {
  @Column({ length: 20, default: '' })
  codigo: string;

  @Column({ type: 'char', length: 100, default: '' })
  nombre: string;

  @Column({ length: 200, default: '' })
  direccion: string;

  @Column({ length: 150, default: '' })
  telefonos: string;

  @Column({ length: 50, default: '' })
  perscont: string;

  @Column({ length: 8, default: '' })
  vendedor: string;

  @Column({ type: 'decimal', precision: 4, scale: 0, default: 0 })
  contribespecial: number;

  @Column({ type: 'decimal', precision: 2, scale: 0, default: 0 })
  status: number;

  @Column({ length: 6, default: '' })
  sector: string;

  @Column({ length: 6, default: '' })
  subcodigo: string;

  @Column({ type: 'decimal', precision: 2, scale: 0, default: 0 })
  precio: number;

  @Column({ length: 1024, default: '' })
  email: string;

  @Column({ type: 'char', length: 1, default: '' })
  kne_activa: string;

  @Column({ type: 'decimal', precision: 24, scale: 7, default: 0.0 })
  kne_mtomin: number;

  @Column({ default: 0 })
  noemifac: number;

  @Column({ default: 0 })
  noeminota: number;

  @Column({ type: 'date', default: '0001-01-01' })
  fchultvta: Date;

  @Column({ type: 'decimal', precision: 20, scale: 6, default: 0.0 })
  mtoultvta: number;

  @Column({ type: 'decimal', precision: 20, scale: 6, default: 0.0 })
  prcdpagdia: number;

  @Column({ type: 'decimal', precision: 20, scale: 6, default: 0.0 })
  promdiasp: number;

  @Column({ type: 'decimal', precision: 20, scale: 6, default: 0.0 })
  riesgocrd: number;

  @Column({ type: 'decimal', precision: 20, scale: 6, default: 0.0 })
  cantdocs: number;

  @Column({ type: 'decimal', precision: 20, scale: 6, default: 0.0 })
  totmtodocs: number;

  @Column({ type: 'decimal', precision: 20, scale: 6, default: 0.0 })
  prommtodoc: number;

  @Column({ type: 'decimal', precision: 20, scale: 6, default: 0.0 })
  diasultvta: number;

  @Column({ type: 'decimal', precision: 20, scale: 6, default: 0.0 })
  promdiasvta: number;

  @Column({ type: 'decimal', precision: 20, scale: 6, default: 0.0 })
  limcred: number;

  @Column({ default: 0 })
  dolarflete: number;

  // @OneToOne(() => UserEntity, (user) => user.customer)
  // @JoinColumn({ name: 'user_id' })
  // user: UserEntity;

  // @OneToMany(() => PurchaseEntity, (purchase) => purchase.customer)
  // purchases: PurchaseEntity[];
}
