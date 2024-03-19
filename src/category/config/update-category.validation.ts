import { body, checkExact } from 'express-validator';

export const validateUpdateCategoryRequest = [
  body('nombre')
    .isString()
    .withMessage('nombre must be a string')
    .notEmpty()
    .withMessage('nombre must not be empty')
    .optional(),
  checkExact(),
];
