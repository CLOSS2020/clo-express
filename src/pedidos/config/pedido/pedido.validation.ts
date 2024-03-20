import { body, checkExact } from 'express-validator';

export const validatePedidoRequest = [
  body('kti_ndoc')
    .isString()
    .withMessage('kti_ndoc must be a string')
    .notEmpty()
    .withMessage('kti_ndoc must not be empty'),
  body('kti_tdoc')
    .isString()
    .withMessage('kti_tdoc must be a string')
    .notEmpty()
    .withMessage('kti_tdoc must not be empty'),
  body('kti_codcli')
    .isString()
    .withMessage('kti_codcli must be a string')
    .notEmpty()
    .withMessage('kti_codcli must not be empty'),
  body('kti_nombrecli')
    .isString()
    .withMessage('kti_nombrecli must be a string')
    .notEmpty()
    .withMessage('kti_nombrecli must not be empty'),
  body('kti_codven')
    .isString()
    .withMessage('kti_codven must be a string')
    .notEmpty()
    .withMessage('kti_codven must not be empty'),
  body('kti_docsol')
    .isString()
    .withMessage('kti_docsol must be a string')
    .notEmpty()
    .withMessage('kti_docsol must not be empty'),
  body('kti_condicion')
    .isString()
    .withMessage('kti_condicion must be a string')
    .notEmpty()
    .withMessage('kti_condicion must not be empty'),
  body('kti_tipprec')
    .isNumeric()
    .withMessage('kti_tipprec must be a number')
    .notEmpty()
    .withMessage('kti_tipprec must not be empty'),
  body('kti_totneto')
    .isNumeric()
    .withMessage('kti_totneto must be a number')
    .notEmpty()
    .withMessage('kti_totneto must not be empty'),
  body('kti_status')
    .isString()
    .withMessage('kti_status must be a string')
    .notEmpty()
    .withMessage('kti_status must not be empty'),
  body('kti_nroped')
    .isString()
    .withMessage('kti_nroped must be a string')
    .notEmpty()
    .withMessage('kti_nroped must not be empty'),
  body('kti_negesp')
    .isString()
    .withMessage('kti_negesp must be a string')
    .notEmpty()
    .withMessage('kti_negesp must not be empty'),
  body('ke_pedstatus')
    .isString()
    .withMessage('ke_pedstatus must be a string')
    .notEmpty()
    .withMessage('ke_pedstatus must not be empty'),
  body('dolarflete')
    .isNumeric()
    .withMessage('dolarflete must be a number')
    .notEmpty()
    .withMessage('dolarflete must not be empty'),
  checkExact(),
];
