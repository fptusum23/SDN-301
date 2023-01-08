import * as express from 'express'
import { config } from '../config'
import { IHLErrorResponse } from '../interfaces'
import { errorService, ICrudOption } from '../services'
import * as _ from 'lodash'


export interface Request extends express.Request {
    queryInfo?: ICrudOption
    tokenInfo?: {
        payload: {
            user_id?: string,
            account_type?: string,
            [x: string]: any
        },
        account_type: string,
        exp: any,
        [x: string]: any
    }
    [x: string]: any
}
export interface Response extends express.Response {
    [x: string]: any
}
export interface IValidateSchema {
    type?: string | string[],
    properties?: IValidateSchemaProperties
    additionalProperties?: boolean
    required?: string[]
    uniqueItems?: boolean
    minItems?: number
    items?: IValidateSchema
    [x: string]: any
}
export interface IValidateSchemaProperties {
    [x: string]: IValidateSchema
}
export class BaseRouter {
    onError(res: Response, error: any) {
        // Raven.captureException(error);
        if (!error.options) {
            console.log("UNKNOW ERROR", error)
            const err = errorService.router.somethingWentWrong()
            res.status(err.options.code).json(err.options)
        } else {
            res.status(error.options.code).json(error.options)
        }
    }

    onSuccess(res: Response, object: any = {}, extras: any = {}) {
        object = object || {}
        if (Object.keys(object).length === 0) {
            res.json({
                code: 200
            })
        } else {
            res.json({
                code: 200,
                results: Object.assign({
                    object
                }, extras)
            })
        }
    }
    onSuccessAsList(res: Response, objects: any = [], extras: any = {}, option: ICrudOption = {
        offset: 0, limit: config.database.defaultPageSize
    }) {
        if (objects.toJSON) {
            objects = objects.toJSON()
        }
        const page = _.floor(option.offset / option.limit) + 1
        res.json({
            code: 200,
            results: Object.assign({
                objects
            }, extras),
            pagination: {
                'current_page': page,
                'next_page': page + 1,
                'prev_page': page - 1,
                'limit': option.limit
            }
        })
    }
    async validateJSON(body: any, schema: IValidateSchema) {
        // const validate = utilService.validateJSON(schema, body)
        // if (!validate.isValid) {
        //     throw errorService.router.requestDataInvalid(validate.message);
        // }
    }
    route(func: (req: Request, rep: Response) => Promise<any>) {
        return (req: Request, res: Response) => func
            .bind(this)(req, res)
            .catch((error: any) => {
                console.log('error ===> ', error.options)
                if (!error.options) {
                    console.log("UNKNOW ERROR", error)
                    error.options = errorService.router.somethingWentWrong().options
                }
                try {
                    const hl = req.query.hl
                    const message: IHLErrorResponse = error.options.message
                    const translateMessage = message[`${hl}`] || message.ko
                    if (typeof translateMessage === 'string') {

                        error.options.message = translateMessage

                        if (translateMessage == "") {
                            error.options.message = message.en
                        }

                    }
                } catch (e) {
                    this.onError(res, error)
                }
                this.onError(res, error)



            })
    }
}

const erorr = {

}
