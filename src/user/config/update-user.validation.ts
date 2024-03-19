import { body, checkExact } from 'express-validator';

export const validateUpdateUserRequest = [
  body('nombre')
    .isString()
    .withMessage('nombre must be a string')
    .notEmpty()
    .withMessage('nombre must not be empty')
    .optional(),
  body('username')
    .isString()
    .withMessage('username must be a string')
    .notEmpty()
    .withMessage('username must not be empty')
    .isLength({ min: 4 })
    .withMessage('username must be longer than 4 characters')
    .optional(),
  body('vendedor')
    .isString()
    .withMessage('vendedor must be a string')
    .notEmpty()
    .withMessage('vendedor must not be empty')
    .optional(),
  body('almacen')
    .isNumeric()
    .withMessage('almacen must be a string')
    .notEmpty()
    .withMessage('almacen must not be empty')
    .optional(),
  body('desactivo')
    .isNumeric()
    .withMessage('desactivo must be a number')
    .notEmpty()
    .withMessage('desactivo must not be empty')
    .optional(),
  body('ualterprec')
    .isNumeric()
    .withMessage('ualterprec must be a number')
    .notEmpty()
    .withMessage('ualterprec must not be empty')
    .optional(),
  body('version')
    .isString()
    .withMessage('version must be a string')
    .notEmpty()
    .withMessage('version must not be empty')
    .optional(),
  body('sesion')
    .isNumeric()
    .withMessage('sesion must be a number')
    .notEmpty()
    .withMessage('sesion must not be empty')
    .optional(),
  checkExact(),
];
