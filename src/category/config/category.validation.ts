import { body, checkExact } from 'express-validator';

export const validateCategoryRequest = [
  body('nombre')
    .isString()
    .withMessage('nombre must be a string')
    .notEmpty()
    .withMessage('nombre must not be empty'),
  checkExact(),
];
