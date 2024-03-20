import { checkExact, checkSchema } from 'express-validator';

const pedidoAppSchema = checkSchema(
  {
    Pedido: {
      exists: { errorMessage: 'Pedido is required' },
      isArray: {
        errorMessage: 'Pedido must be an array',
      },
    },
    'Pedido.*.Cabecera': {
      exists: { errorMessage: 'Cabecera is required' },
      isObject: { errorMessage: 'Cabecera must be an object' },
    },
    'Pedido.*.Cabecera.kti_ndoc': {
      exists: { errorMessage: 'Pedido is required' },
      isString: {
        errorMessage: 'kti_ndoc must be a string',
      },
    },
    'Pedido.*.Cabecera.kti_tdoc': {
      exists: { errorMessage: 'kti_tdoc is required' },
      isString: {
        errorMessage: 'kti_tdoc must be a string',
      },
    },
    'Pedido.*.Cabecera.kti_codcli': {
      exists: { errorMessage: 'kti_codcli is required' },
      isString: {
        errorMessage: 'kti_codcli must be a string',
      },
    },
    'Pedido.*.Cabecera.kti_nombrecli': {
      exists: {
        errorMessage: 'kti_nombrecli is required',
      },
      isString: {
        errorMessage: 'kti_nombrecli must be a string',
      },
    },
    'Pedido.*.Cabecera.kti_codven': {
      exists: { errorMessage: 'kti_codven is required' },
      isString: {
        errorMessage: 'kti_codven must be a string',
      },
    },
    'Pedido.*.Cabecera.kti_docsol': {
      exists: { errorMessage: 'kti_docsol is required' },
      isString: {
        errorMessage: 'kti_docsol must be a string',
      },
    },
    'Pedido.*.Cabecera.kti_condicion': {
      exists: {
        errorMessage: 'kti_condicion is required',
      },
      isString: {
        errorMessage: 'kti_condicion must be a string',
      },
    },
    'Pedido.*.Cabecera.kti_tipprec': {
      exists: { errorMessage: 'kti_tipprec is required' },
      isNumeric: {
        errorMessage: 'kti_tipprec must be a number',
      },
    },
    'Pedido.*.Cabecera.kti_totneto': {
      exists: { errorMessage: 'kti_totneto is required' },
      isNumeric: {
        errorMessage: 'kti_totneto must be a number',
      },
    },
    'Pedido.*.Cabecera.kti_status': {
      exists: { errorMessage: 'kti_status is required' },
      isString: {
        errorMessage: 'kti_status must be a string',
      },
    },
    'Pedido.*.Cabecera.kti_fchdoc': {
      exists: { errorMessage: 'kti_fchdoc is required' },
      isString: {
        errorMessage: 'kti_fchdoc must be a string',
      },
    },
    'Pedido.*.Cabecera.kti_negesp': {
      exists: { errorMessage: 'kti_negesp is required' },
      isString: {
        errorMessage: 'kti_negesp must be a string',
      },
    },
    'Pedido.*.Cabecera.dolarflete': {
      exists: { errorMessage: 'dolarflete is required' },
      isNumeric: {
        errorMessage: 'dolarflete must be a number',
      },
    },
    'Pedido.*.Cabecera.Lineas': {
      exists: {
        errorMessage: 'Lineas is required',
      },
      isArray: {
        errorMessage: 'Lineas must be an array',
      },
    },
    'Pedido.*.Cabecera.Lineas.*.kmv_codart': {
      exists: {
        errorMessage: 'kmv_codart is required',
      },
      isString: {
        errorMessage: 'kmv_codart must be a string',
      },
    },
    'Pedido.*.Cabecera.Lineas.*.kmv_nombre': {
      exists: {
        errorMessage: 'kmv_nombre is required',
      },
      isString: {
        errorMessage: 'kmv_nombre must be a string',
      },
    },
    'Pedido.*.Cabecera.Lineas.*.kti_tipprec': {
      exists: {
        errorMessage: 'kti_tipprec is required',
      },
      isNumeric: {
        errorMessage: 'kti_tipprec must be a number',
      },
    },
    'Pedido.*.Cabecera.Lineas.*.kmv_cant': {
      exists: {
        errorMessage: 'kmv_cant is required',
      },
      isNumeric: {
        errorMessage: 'kmv_cant must be a number',
      },
    },
    'Pedido.*.Cabecera.Lineas.*.kti_ndoc': {
      exists: {
        errorMessage: 'kti_ndoc is required',
      },
      isString: {
        errorMessage: 'kti_ndoc must be a string',
      },
    },
    'Pedido.*.Cabecera.Lineas.*.kmv_stot': {
      exists: {
        errorMessage: 'kmv_stot is required',
      },
      isNumeric: {
        errorMessage: 'kmv_stot must be a number',
      },
    },
    'Pedido.*.Cabecera.Lineas.*.kmv_artprec': {
      exists: {
        errorMessage: 'kmv_artprec is required',
      },
      isNumeric: {
        errorMessage: 'kmv_artprec must be a number',
      },
    },
    'Pedido.*.Cabecera.Lineas.*.kmv_dctolin': {
      exists: {
        errorMessage: 'kmv_dctolin is required',
      },
      isNumeric: {
        errorMessage: 'kmv_dctolin must be a number',
      },
    },
  },
  ['body'],
);

export const validatePedidoAppRequest = checkExact(pedidoAppSchema);
