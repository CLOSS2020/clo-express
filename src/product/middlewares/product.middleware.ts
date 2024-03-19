import { NextFunction, Request, Response } from 'express';
import { SharedMiddleware } from '../../shared/middlewares/shared.middleware';

export class ProductMiddleware extends SharedMiddleware {
  constructor() {
    super();
  }

  createProductValidator(req: Request, res: Response, next: NextFunction) {
    this.handleValidationErrors(req, res, next);
  }

  updateProductValidator(req: Request, res: Response, next: NextFunction) {
    this.handleValidationErrors(req, res, next);
  }
}
