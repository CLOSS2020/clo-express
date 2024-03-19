import { NextFunction, Request, Response } from 'express';
import { SharedMiddleware } from '../../shared/middlewares/shared.middleware';
import 'reflect-metadata';

export class UserMiddleware extends SharedMiddleware {
  constructor() {
    super();
  }

  validateUserRequest(req: Request, res: Response, next: NextFunction) {
    this.handleValidationErrors(req, res, next);
  }

  updateUserValidator(req: Request, res: Response, next: NextFunction) {
    this.handleValidationErrors(req, res, next);
  }
}
