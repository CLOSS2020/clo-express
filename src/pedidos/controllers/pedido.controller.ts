import { Request, Response } from 'express';
import { DeleteResult, UpdateResult } from 'typeorm';
import { HttpResponse } from '../../shared/response/http.response';
import { PedidoService } from '../services/pedido.service';

export class PedidoController {
  constructor(
    private readonly pedidoService: PedidoService = new PedidoService(),
    private readonly httpResponse: HttpResponse = new HttpResponse(),
  ) {}

  async getPedidos(_req: Request, res: Response) {
    try {
      const data = await this.pedidoService.findAllPedido();

      if (data.length === 0) {
        return this.httpResponse.NotFound(res, 'Pedidos not found');
      }

      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async getPedidoById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.pedidoService.findPedidoById(id);

      if (!data) {
        return this.httpResponse.NotFound(res, 'Pedido not found');
      }

      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async getPedidoWithRelation(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.pedidoService.findPedidoWithRelation(id);

      if (!data) {
        return this.httpResponse.NotFound(res, 'Pedido not found');
      }

      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async createPedidoApp(req: Request, res: Response) {
    try {
      const data = await this.pedidoService.createPedidoApp(req.body);
      return this.httpResponse.estado(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async createPedido(req: Request, res: Response) {
    try {
      const validate = await this.pedidoService.findExistingPedido(
        req.body.kti_ndoc,
      );

      if (validate) {
        return this.httpResponse.BadRequest(res, 'This order already exists');
      }

      const data = await this.pedidoService.createPedido(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async updatePedido(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const validate = await this.pedidoService.findExistingPedido(
        req.body.kti_ndoc,
      );

      if (!validate) {
        return this.httpResponse.BadRequest(res, "This order doesn't exists");
      }

      const data: UpdateResult = await this.pedidoService.updatePedido(
        id,
        req.body,
      );

      if (!data.affected) {
        return this.httpResponse.NotFound(res, 'Failed to update pedido');
      }

      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async deletePedido(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data: DeleteResult = await this.pedidoService.deletePedido(id);

      if (!data.affected) {
        return this.httpResponse.NotFound(res, 'Failed to delete pedido');
      }

      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
}
