import { NextFunction, Request, Response } from 'express';
import { SharedMiddleware } from '../../shared/middlewares/shared.middleware';

export class PedidoLineasMiddleware extends SharedMiddleware {
  constructor() {
    super();
  }

  createPedidoLineasValidator(req: Request, res: Response, next: NextFunction) {
    this.handleValidationErrors(req, res, next);
  }

  updatePedidoLineasValidator(req: Request, res: Response, next: NextFunction) {
    this.handleValidationErrors(req, res, next);
  }
}
