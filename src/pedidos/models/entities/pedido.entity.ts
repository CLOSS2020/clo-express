import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from '../../../config/base.entity';
import { DocTypes } from '../enums/doctypes.enum';

@Entity({ name: 'ke_opti' })
export class PedidoEntity extends BaseEntity {
  @Column({ length: 30, default: '' })
  kti_ndoc: string;

  @Column({ length: 30, default: DocTypes.PED })
  kti_tdoc: string;

  @Column({ length: 30, default: '' })
  kti_codcli: string;

  @Column({ length: 30, default: '' })
  kti_nombrecli: string;

  @Column({ length: 30, default: '' })
  @Index('kti_codven')
  kti_codven: string;

  @Column({ length: 30, default: '' })
  kti_docsol: string;

  @Column({ length: 30, default: '' })
  kti_condicion: string;

  @Column({ type: 'decimal', precision: 2, scale: 0, default: 0 })
  kti_tipprec: number;

  @Column({ type: 'decimal', precision: 2, scale: 0, default: 0 })
  kti_totneto: number;

  @Column({ length: 2, default: '0' })
  kti_status: string;

  @Column({ length: 8, default: '' })
  kti_nroped: string;

  @Column({ type: 'char', length: 2, default: '0' })
  kti_negesp: string;

  @Column({ type: 'char', length: 2, default: '' })
  ke_pedstatus: string;

  @Column({ default: 0 })
  dolarflete: number;
}
