import { NextFunction, Request, Response } from 'express';
import { SharedMiddleware } from '../../shared/middlewares/shared.middleware';

export class CustomerMiddleware extends SharedMiddleware {
  constructor() {
    super();
  }

  createCustomerValidator(req: Request, res: Response, next: NextFunction) {
    this.handleValidationErrors(req, res, next);
  }

  updateCustomerValidator(req: Request, res: Response, next: NextFunction) {
    this.handleValidationErrors(req, res, next);
  }
}
