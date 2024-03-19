import { NextFunction, Request, Response } from 'express';
import { SharedMiddleware } from '../../shared/middlewares/shared.middleware';

export class CategoryMiddleware extends SharedMiddleware {
  constructor() {
    super();
  }

  createCategoryValidator(req: Request, res: Response, next: NextFunction) {
    this.handleValidationErrors(req, res, next);
  }

  updateCategoryValidator(req: Request, res: Response, next: NextFunction) {
    this.handleValidationErrors(req, res, next);
  }
}
