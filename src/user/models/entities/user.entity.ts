import { Column, Entity, Index, OneToOne, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from '../../../config/base.entity';
import { RoleType } from '../enums/role-type.enum';

@Entity({ name: 'usuarios' })
export class UserEntity extends BaseEntity {
  @Column({ length: 30, default: '' })
  nombre: string;

  @Column({ length: 30, default: '' })
  username: string;

  @Column({ default: '' })
  password: string;

  @Column({ length: 30, default: '' })
  @Index('vendedor')
  vendedor: string;

  @Column({ length: 2, default: '' })
  almacen: string;

  @Column({ type: 'decimal', precision: 2, scale: 0, default: 0 })
  desactivo: number;

  @Column({ type: 'decimal', precision: 4, scale: 0 })
  ualterprec: number;

  @UpdateDateColumn()
  sesionactiva: Date;

  @Column({ length: 30, default: '1.0.0' })
  version: string;

  @Column({ default: 0 })
  sesion: number;

  @Column({
    type: 'enum',
    enum: RoleType,
    nullable: false,
    default: RoleType.USER,
  })
  role: RoleType;

  // @OneToOne(() => CustomerEntity, (customer) => customer.user)
  // customer: CustomerEntity;
}
