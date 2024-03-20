import { PedidoLineas } from '../pedido-lineas.interface';

export interface PedidoApp {
  Cabecera: Cabecera;
}

interface Cabecera {
  kti_ndoc: string;
  kti_tdoc: string;
  kti_codcli: string;
  kti_nombrecli: string;
  kti_codven: string;
  kti_docsol: string;
  kti_condicion: string;
  kti_tipprec: number;
  kti_totneto: number;
  kti_status: string;
  kti_nroped: string;
  kti_fchdoc: Date;
  kti_negesp: string;
  ke_pedstatus: string;
  dolarflete: number;
  Lineas: PedidoLineas[];
}
