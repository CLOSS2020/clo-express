import { body, checkExact } from 'express-validator';

export const validatePedidoLineasRequest = [
  body('kmv_codart')
    .isString()
    .withMessage('kmv_codart must be string')
    .notEmpty()
    .withMessage('kmv_codart must not be empty'),
  body('kmv_nombre')
    .isString()
    .withMessage('kmv_nombre must be string')
    .notEmpty()
    .withMessage('kmv_nombre must not be empty'),
  body('kti_tipprec')
    .isNumeric()
    .withMessage('kti_tipprec must be a number')
    .notEmpty()
    .withMessage('kti_tipprec must not be empty'),
  body('kmv_cant')
    .isNumeric()
    .withMessage('kmv_cant must be a number')
    .notEmpty()
    .withMessage('kmv_cant must not be empty'),
  body('kti_ndoc')
    .isString()
    .withMessage('kti_ndoc must be string')
    .notEmpty()
    .withMessage('kti_ndoc must not be empty'),
  body('kmv_stot')
    .isNumeric()
    .withMessage('kmv_stot must be a number')
    .notEmpty()
    .withMessage('kmv_stot must not be empty'),
  body('kmv_artprec')
    .isNumeric()
    .withMessage('kmv_artprec must be a number')
    .notEmpty()
    .withMessage('kmv_artprec must not be empty'),
  body('kmv_dctolin')
    .isNumeric()
    .withMessage('kmv_dctolin must be a number')
    .notEmpty()
    .withMessage('kmv_dctolin must not be empty'),
  checkExact(),
];
