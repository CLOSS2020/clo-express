import { NextFunction, Request, Response } from 'express';
import { BaseRouter } from '../../shared/router/router';
import { validateUpdateCategoryRequest } from '../config/update-category.validation';
import { CategoryController } from '../controllers/category.controller';
import { CategoryMiddleware } from '../middlewares/category.middleware';
import { validateCategoryRequest } from './../config/category.validation';

export class CategoryRouter extends BaseRouter<
  CategoryController,
  CategoryMiddleware
> {
  constructor() {
    super(CategoryController, CategoryMiddleware);
  }

  routes(): void {
    this.router.get('/categories', (req, res) =>
      this.controller.getCategories(req, res),
    );

    this.router.get('/categories/:id', (req, res) =>
      this.controller.getCategoryById(req, res),
    );

    this.router.get('/categories/rel/:id', (req, res) =>
      this.controller.getCategoryWithRelation(req, res),
    );

    this.router.post(
      '/categories/create',
      validateCategoryRequest,
      (req: Request, res: Response, next: NextFunction) => [
        this.middleware.createCategoryValidator(req, res, next),
      ],
      (req: Request, res: Response) => this.controller.createCategory(req, res),
    );

    this.router.patch(
      '/categories/update/:id',
      validateUpdateCategoryRequest,
      (req: Request, res: Response, next: NextFunction) => [
        this.middleware.updateCategoryValidator(req, res, next),
      ],
      (req: Request, res: Response) => this.controller.updateCategory(req, res),
    );

    this.router.delete('/categories/delete/:id', (req, res) =>
      this.controller.deleteCategory(req, res),
    );
  }
}
