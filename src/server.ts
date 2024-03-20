import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { UserRouter } from './user/router/user.router';
import { ConfigServer } from './config/config';
import { DataSource } from 'typeorm';
import { ProductRouter } from './product/router/product.router';
import { CustomerRouter } from './customer/router/customer.router';
import { CategoryRouter } from './category/router/category.router';
import { LoginStrategy } from './auth/strategies/login.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { AuthRouter } from './auth/router/auth.router';
import { PedidoRouter } from './pedidos/routers/pedido.router';

class ServerBootstrap extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnv('PORT');

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.passportUse();
    this.dbConnect();
    this.app.use(morgan('dev'));
    this.app.use(cors());

    this.app.use('/api', this.routers());
    this.listen();
  }

  routers(): Array<express.Router> {
    return [
      new UserRouter().router,
      new PedidoRouter().router,
      new ProductRouter().router,
      new CustomerRouter().router,
      new CategoryRouter().router,
      new AuthRouter().router,
    ];
  }

  passportUse() {
    return [new LoginStrategy().use, new JwtStrategy().use];
  }

  async dbConnect(): Promise<DataSource | void> {
    return this.initConnect
      .then(() => {
        console.log('Data Source has been initialized!');
      })
      .catch((err: any) => {
        console.error('Error during Data Source initialization', err);
      });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`
      [server]: Server is running at ${this.port}
      `);
    });
  }
}

new ServerBootstrap();
