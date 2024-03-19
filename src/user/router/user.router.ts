import { NextFunction, Request, Response } from 'express';
import { BaseRouter } from '../../shared/router/router';
import { UserController } from '../controllers/user.controller';
import { UserMiddleware } from '../middlewares/user.middleware';
import { validateUserRequest } from '../config/user.validation';
import { validateUpdateUserRequest } from '../config/update-user.validation';

export class UserRouter extends BaseRouter<UserController, UserMiddleware> {
  constructor() {
    super(UserController, UserMiddleware);
  }

  routes(): void {
    this.router.get('/users', (req, res) => this.controller.getUsers(req, res));

    this.router.get('/users/:id', (req, res) =>
      this.controller.getUserById(req, res),
    );

    this.router.get('/users/customer/:id', (req, res) =>
      this.controller.getUserWithRelation(req, res),
    );

    this.router.post(
      '/users/create',
      validateUserRequest,
      (req: Request, res: Response, next: NextFunction) => [
        this.middleware.validateUserRequest(req, res, next),
      ],
      (req: Request, res: Response) => this.controller.createUser(req, res),
    );

    this.router.patch(
      '/users/update/:id',
      validateUpdateUserRequest,
      (req: Request, res: Response, next: NextFunction) => [
        this.middleware.updateUserValidator(req, res, next),
      ],
      (req: Request, res: Response) => this.controller.updateUser(req, res),
    );

    this.router.delete(
      '/users/delete/:id',
      this.middleware.passAuth('jwt'),
      (req, res, next) => [this.middleware.checkAdminRole(req, res, next)],
      (req, res) => this.controller.deleteUser(req, res),
    );
  }
}
