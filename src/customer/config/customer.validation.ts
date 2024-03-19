import { body, checkExact } from 'express-validator';

export const validateCustomerRequest = [
  body('codigo')
    .isString()
    .withMessage('codigo must be a string')
    .notEmpty()
    .withMessage('codigo must not be empty'),
  body('nombre')
    .isString()
    .withMessage('nombre must be a string')
    .notEmpty()
    .withMessage('nombre must not be empty'),
  body('direccion')
    .isString()
    .withMessage('direccion must be a string')
    .notEmpty()
    .withMessage('direccion must not be empty'),
  body('telefonos')
    .isString()
    .withMessage('telefonos must be a string')
    .notEmpty()
    .withMessage('telefonos must not be empty'),
  body('perscont')
    .isString()
    .withMessage('perscont must be a string')
    .notEmpty()
    .withMessage('perscont must not be empty'),
  body('vendedor')
    .isString()
    .withMessage('vendedor must be a string')
    .notEmpty()
    .withMessage('vendedor must not be empty'),
  body('contribespecial')
    .isNumeric()
    .withMessage('contribespecial must be a number')
    .notEmpty()
    .withMessage('contribespecial must not be empty'),
  body('status')
    .isNumeric()
    .withMessage('status must be a number')
    .notEmpty()
    .withMessage('status must not be empty'),
  body('sector')
    .isString()
    .withMessage('sector must be a string')
    .notEmpty()
    .withMessage('sector must not be empty'),
  body('subcodigo')
    .isString()
    .withMessage('subcodigo must be a string')
    .notEmpty()
    .withMessage('subcodigo must not be empty'),
  body('precio')
    .isNumeric()
    .withMessage('precio must be a number')
    .notEmpty()
    .withMessage('precio must not be empty'),
  body('email')
    .isString()
    .withMessage('email must be a string')
    .notEmpty()
    .withMessage('email must not be empty'),
  body('kne_activa')
    .isString()
    .withMessage('kne_activa must be a string')
    .notEmpty()
    .withMessage('kne_activa must not be empty'),
  body('kne_mtomin')
    .isNumeric()
    .withMessage('kne_mtomin must be a number')
    .notEmpty()
    .withMessage('kne_mtomin must not be empty'),
  body('noemifac')
    .isNumeric()
    .withMessage('noemifac must be a number')
    .notEmpty()
    .withMessage('noemifac must not be empty'),
  body('noeminota')
    .isNumeric()
    .withMessage('noeminota must be a number')
    .notEmpty()
    .withMessage('noeminota must not be empty'),
  body('fchultvta')
    .isDate()
    .withMessage('fchultvta must be a date')
    .notEmpty()
    .withMessage('fchultvta must not be empty'),
  body('mtoultvta')
    .isNumeric()
    .withMessage('mtoultvta must be a number')
    .notEmpty()
    .withMessage('mtoultvta must not be empty'),
  body('prcdpagdia')
    .isNumeric()
    .withMessage('prcdpagdia must be a number')
    .notEmpty()
    .withMessage('prcdpagdia must not be empty'),
  body('promdiasp')
    .isNumeric()
    .withMessage('promdiasp must be a number')
    .notEmpty()
    .withMessage('promdiasp must not be empty'),
  body('riesgocrd')
    .isNumeric()
    .withMessage('riesgocrd must be a number')
    .notEmpty()
    .withMessage('riesgocrd must not be empty'),
  body('cantdocs')
    .isNumeric()
    .withMessage('cantdocs must be a number')
    .notEmpty()
    .withMessage('cantdocs must not be empty'),
  body('totmtodocs')
    .isNumeric()
    .withMessage('totmtodocs must be a number')
    .notEmpty()
    .withMessage('totmtodocs must not be empty'),
  body('prommtodoc')
    .isNumeric()
    .withMessage('prommtodoc must be a number')
    .notEmpty()
    .withMessage('prommtodoc must not be empty'),
  body('diasultvta')
    .isNumeric()
    .withMessage('diasultvta must be a number')
    .notEmpty()
    .withMessage('diasultvta must not be empty'),
  body('promdiasvta')
    .isNumeric()
    .withMessage('promdiasvta must be a number')
    .notEmpty()
    .withMessage('promdiasvta must not be empty'),
  body('limcred')
    .isNumeric()
    .withMessage('limcred must be a number')
    .notEmpty()
    .withMessage('limcred must not be empty'),
  body('dolarflete')
    .isNumeric()
    .withMessage('dolarflete must be a number')
    .notEmpty()
    .withMessage('dolarflete must not be empty'),
  checkExact(),
];
