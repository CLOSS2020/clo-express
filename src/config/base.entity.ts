import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'fechamodifi',
    type: 'timestamp',
  })
  fechamodifi: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    select: false,
  })
  deletedAt: Date;
}
