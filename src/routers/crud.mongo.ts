import * as express from 'express';
import * as _ from 'lodash';
import { CrudController } from '../controllers';
import { queryMiddleware } from '../middlewares';
import { BaseRouter, Request, Response } from './base';

export class CrudRouter<T extends CrudController<any>> extends BaseRouter {
  constructor(controller: T) {
    super();
    this.controller = controller;
    this.router = express.Router();
    this.customRouting();
    this.defaultRouting();
  }
  controller: T;
  router: express.Router;
  defaultRouting() {
    this.router.get('/', this.getListMiddlewares(), this.route(this.getList));
    this.router.get(
      '/:_id',
      this.getItemMiddlewares(),
      this.route(this.getItem)
    );
    this.router.post('/', this.createMiddlewares(), this.route(this.create));
    this.router.put('/:_id', this.updateMiddlewares(), this.route(this.update));
    this.router.delete(
      '/:_id',
      this.deleteMiddlewares(),
      this.route(this.delete)
    );
    this.router.delete(
      '/',
      this.deleteAllMiddlewares(),
      this.route(this.deleteAll)
    );
  }
  customRouting() {}
  getListMiddlewares(): any[] {
    return [
      queryMiddleware.run(),
    ];
  }
  async getList(req: any, res: Response) {
    const result = await this.controller.getList(req.queryInfo);
    this.onSuccessAsList(res, result, undefined, req.queryInfo);
  }
  getItemMiddlewares(): any[] {
    return [
      queryMiddleware.run(),
    ];
  }
  async getItem(req: any, res: Response) {
    const { _id } = req.params;
    req.queryInfo.filter._id = _id;
    const result = await this.controller.getItem(req.queryInfo);
    this.onSuccess(res, result);
  }
  createMiddlewares(): any[] {
    return [];
  }
  async create(req: any, res: Response) {
    const result = await this.controller.create(req.body);
    this.onSuccess(res, result);
  }
  updateMiddlewares(): any[] {
    return [];
  }
  async update(req: any, res: Response) {
    const { _id } = req.params;
    const result = await this.controller.update(req.body, {
      filter: { _id },
    });
    this.onSuccess(res, result);
  }
  deleteMiddlewares(): any[] {
    return [];
  }
  async delete(req: any, res: Response) {
    const { _id } = req.params;
    const result = await this.controller.delete({
      filter: { _id },
    });
    this.onSuccess(res, result);
  }
  deleteAllMiddlewares(): any[] {
    return [];
  }
  async deleteAll(req: any, res: Response) {
    if (_.has(req.query, 'items')) {
      req.query.items = JSON.parse(req.query.items) || {};
    }
    await this.validateJSON(req.query, {
      type: 'object',
      properties: {
        items: {
          type: 'array',
          uniqueItems: true,
          minItems: 1,
          items: { type: 'string' },
        },
      },
      required: ['items'],
      additionalProperties: false,
    });
    const { items } = req.query;
    const result = await this.controller.deleteAll({
      filter: { _id: { $in: items } },
    });
    this.onSuccess(res, result);
  }
}
