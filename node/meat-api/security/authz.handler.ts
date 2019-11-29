import * as restify from 'restify'
import { ForbiddenError } from 'restify-errors'

export const authorize: (...profiles: string[]) => restify.RequestHandler = (...profiles) => {
    return (req, resp, next) => {
        const authenticated = (<any>req).authenticated
        if (authenticated !== undefined && authenticated.hasAny(...profiles)) {
            next()
        } else {
            next(new ForbiddenError('Permission denied'))
        }
    }
}
