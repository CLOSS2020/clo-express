import { NextFunction, Request, Response } from 'express';
import { BaseRouter } from '../../shared/router/router';
import { validatePedidoAppRequest } from '../config/pedido/pedido-app.validation';
import { PedidoController } from '../controllers/pedido.controller';
import { PedidoMiddleware } from '../middlewares/pedido.middleware';
import { validatePedidoRequest } from '../config/pedido/pedido.validation';
import { validateUpdatePedidoRequest } from '../config/pedido/update-pedido.validation';

export class PedidoRouter extends BaseRouter<
  PedidoController,
  PedidoMiddleware
> {
  constructor() {
    super(PedidoController, PedidoMiddleware);
  }

  routes(): void {
    this.router.get('/pedidos', (req, res) =>
      this.controller.getPedidos(req, res),
    );

    this.router.get('/pedidos/:id', (req, res) =>
      this.controller.getPedidoById(req, res),
    );

    this.router.get('/pedidos/rel/:id', (req, res) =>
      this.controller.getPedidoWithRelation(req, res),
    );

    this.router.post(
      '/pedidos/app/create',
      validatePedidoAppRequest,
      (req: Request, res: Response, next: NextFunction) => [
        this.middleware.createPedidoAppValidator(req, res, next),
      ],
      (req: Request, res: Response) =>
        this.controller.createPedidoApp(req, res),
    );

    this.router.post(
      '/pedidos/create',
      validatePedidoRequest,
      (req: Request, res: Response, next: NextFunction) => [
        this.middleware.createPedidoValidator(req, res, next),
      ],
      (req: Request, res: Response) => this.controller.createPedido(req, res),
    );

    this.router.patch(
      '/pedidos/update/:id',
      validateUpdatePedidoRequest,
      (req: Request, res: Response, next: NextFunction) => [
        this.middleware.updatePedidoValidator(req, res, next),
      ],
      (req: Request, res: Response) => this.controller.updatePedido(req, res),
    );

    this.router.delete('/pedidos/delete/:id', (req, res) =>
      this.controller.deletePedido(req, res),
    );
  }
}
