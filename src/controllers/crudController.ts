import { CrudService, ICrudOption } from '../services'
import { BaseController } from './baseController'

export class CrudController<T extends CrudService<any>> extends BaseController {
  constructor(service: T) {
    super()
    this.service = service
  }
  service: T
  async getList(option?: ICrudOption) {
    return await this.service.getList(option)
  }
  async getItem(option?: ICrudOption) {
    return await this.service.getItem(option)
  }
  async create(params: any, option?: ICrudOption) {
    return await this.service.create(params, option)
  }
  async update(params: any, option?: ICrudOption) {
    return await this.service.update(params, option)
  }
  async delete(option?: ICrudOption) {
    return await this.service.delete(option)
  }
  async deleteAll(option?: ICrudOption) {
    return await this.service.deleteAll(option)
  }



}
