import { Request, Response } from 'express';
import { DeleteResult, UpdateResult } from 'typeorm';
import { HttpResponse } from '../../shared/response/http.response';
import { PedidoLineasService } from '../services/pedido-lineas.service';

export class PedidoLineasController {
  constructor(
    private readonly pedidoLineasService: PedidoLineasService = new PedidoLineasService(),
    private readonly httpResponse: HttpResponse = new HttpResponse(),
  ) {}

  async getPedidoLineas(_req: Request, res: Response) {
    try {
      const data = await this.pedidoLineasService.findAllPedidoLineas();

      if (data.length === 0) {
        return this.httpResponse.NotFound(res, 'Lineas del pedido not found');
      }

      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async getPedidoLineasById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.pedidoLineasService.findPedidoLineasById(id);

      if (!data) {
        return this.httpResponse.NotFound(res, 'Lineas del pedido not found');
      }

      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async getPedidoLineasWithRelation(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data =
        await this.pedidoLineasService.findPedidoLineasWithRelation(id);

      if (!data) {
        return this.httpResponse.NotFound(res, 'Lineas del pedido not found');
      }

      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async createPedidoLineas(req: Request, res: Response) {
    try {
      const data = await this.pedidoLineasService.createPedidoLineas(req.body);

      

      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async updatePedidoLineas(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data: UpdateResult =
        await this.pedidoLineasService.updatePedidoLineas(id, req.body);

      if (!data.affected) {
        return this.httpResponse.NotFound(
          res,
          'Failed to update Lineas del pedido',
        );
      }

      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async deletePedidoLineas(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data: DeleteResult =
        await this.pedidoLineasService.deletePedidoLineas(id);

      if (!data.affected) {
        return this.httpResponse.NotFound(
          res,
          'Failed to delete Lineas del pedido',
        );
      }

      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
}
