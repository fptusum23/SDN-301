import { BaseMiddleware } from './base'
import * as express from 'express'
import { Request, Response } from '../routers/base'

export class LoggerMiddleware extends BaseMiddleware {
    async use(req: Request, res: Response, next: express.NextFunction, options?: string[]) {
        console.debug('____________________________')
        console.debug(' ')
        console.debug(`[TIME] ==> ${new Date()}`)
        console.debug(' ')
        if (options?.length) {
            for (const element of options) {
                console.debug(`[${element.toLocaleUpperCase()}]  ==> `, req[element])
                console.debug(' ')
            }
        }
        next();
        req.method
    }
}
