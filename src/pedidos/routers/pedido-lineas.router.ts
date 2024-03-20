import { NextFunction, Request, Response } from 'express';
import { BaseRouter } from '../../shared/router/router';
import { PedidoLineasController } from '../controllers/pedido-lineas.controller';
import { PedidoMiddleware } from '../middlewares/pedido.middleware';
import { SharedMiddleware } from '../../shared/middlewares/shared.middleware';
import { validatePedidoLineasRequest } from '../config/lineas/pedido-lineas.validation';
import { validateUpdatePedidoLineasRequest } from '../config/lineas/update-pedido-lineas.validation';

export class PedidoLineasRouter extends BaseRouter<
  PedidoLineasController,
  SharedMiddleware
> {
  constructor() {
    super(PedidoLineasController, SharedMiddleware);
  }

  routes(): void {
    this.router.get('/pedidoLineas', (req, res) =>
      this.controller.getPedidoLineas(req, res),
    );

    this.router.get('/pedidoLineas/:id', (req, res) =>
      this.controller.getPedidoLineasById(req, res),
    );

    this.router.get('/pedidoLineas/rel/:id', (req, res) =>
      this.controller.getPedidoLineasWithRelation(req, res),
    );

    this.router.post(
      '/pedidoLineas/create',
      validatePedidoLineasRequest,
      (req: Request, res: Response, next: NextFunction) => [
        this.middleware.handleValidationErrors(req, res, next),
      ],
      (req: Request, res: Response) =>
        this.controller.createPedidoLineas(req, res),
    );

    this.router.patch(
      '/pedidoLineas/update/:id',
      validateUpdatePedidoLineasRequest,
      (req: Request, res: Response, next: NextFunction) => [
        this.middleware.handleValidationErrors(req, res, next),
      ],
      (req: Request, res: Response) =>
        this.controller.updatePedidoLineas(req, res),
    );

    this.router.delete('/pedidoLineas/delete/:id', (req, res) =>
      this.controller.deletePedidoLineas(req, res),
    );
  }
}
