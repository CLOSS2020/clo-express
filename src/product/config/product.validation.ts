import { body, checkExact } from 'express-validator';

export const validateProductRequest = [
  body('codigo')
    .isString()
    .withMessage('codigo must be a string')
    .notEmpty()
    .withMessage('codigo must not be empty'),
  body('grupo')
    .isString()
    .withMessage('grupo must be a string')
    .notEmpty()
    .withMessage('grupo must not be empty'),
  body('subgrupo')
    .isString()
    .withMessage('subgrupo must be a string')
    .notEmpty()
    .withMessage('subgrupo must not be empty'),
  body('nombre')
    .isString()
    .withMessage('nombre must be a string')
    .notEmpty()
    .withMessage('nombre must not be empty'),
  body('referencia')
    .isString()
    .withMessage('referencia must be a string')
    .notEmpty()
    .withMessage('referencia must not be empty'),
  body('marca')
    .isString()
    .withMessage('marca must be a string')
    .notEmpty()
    .withMessage('marca must not be empty'),
  body('unidad')
    .isString()
    .withMessage('unidad must be a string')
    .notEmpty()
    .withMessage('unidad must not be empty'),
  body('existencia')
    .isNumeric()
    .withMessage('existencia must be a number')
    .notEmpty()
    .withMessage('existencia must not be empty'),
  body('precio1')
    .isNumeric()
    .withMessage('precio1 must be a number')
    .notEmpty()
    .withMessage('precio1 must not be empty'),
  body('precio2')
    .isNumeric()
    .withMessage('precio2 must be a number')
    .notEmpty()
    .withMessage('precio2 must not be empty'),
  body('precio3')
    .isNumeric()
    .withMessage('precio3 must be a number')
    .notEmpty()
    .withMessage('precio3 must not be empty'),
  body('precio4')
    .isNumeric()
    .withMessage('precio4 must be a number')
    .notEmpty()
    .withMessage('precio4 must not be empty'),
  body('precio5')
    .isNumeric()
    .withMessage('precio5 must be a number')
    .notEmpty()
    .withMessage('precio5 must not be empty'),
  body('precio6')
    .isNumeric()
    .withMessage('precio6 must be a number')
    .notEmpty()
    .withMessage('precio6 must not be empty'),
  body('precio7')
    .isNumeric()
    .withMessage('precio7 must be a number')
    .notEmpty()
    .withMessage('precio7 must not be empty'),
  body('discont')
    .isNumeric()
    .withMessage('discont must be a number')
    .notEmpty()
    .withMessage('discont must not be empty'),
  body('vta_max')
    .isNumeric()
    .withMessage('vta_max must be a number')
    .notEmpty()
    .withMessage('vta_max must not be empty'),
  body('vta_min')
    .isNumeric()
    .withMessage('vta_min must be a number')
    .notEmpty()
    .withMessage('vta_min must not be empty'),
  body('dctotope')
    .isNumeric()
    .withMessage('dctotope must be a number')
    .notEmpty()
    .withMessage('dctotope must not be empty'),
  body('enpreventa')
    .isString()
    .withMessage('enpreventa must be a string')
    .notEmpty()
    .withMessage('enpreventa must not be empty'),
  body('comprometido')
    .isNumeric()
    .withMessage('comprometido must be a number')
    .notEmpty()
    .withMessage('comprometido must not be empty'),
  body('vta_minenx')
    .isNumeric()
    .withMessage('vta_minenx must be a number')
    .notEmpty()
    .withMessage('vta_minenx must not be empty'),
  body('vta_solofac')
    .isNumeric()
    .withMessage('vta_solofac must be a number')
    .notEmpty()
    .withMessage('vta_solofac must not be empty'),
  body('vta_solone')
    .isNumeric()
    .withMessage('vta_solone must be a number')
    .notEmpty()
    .withMessage('vta_solone must not be empty'),
  checkExact(),
];
