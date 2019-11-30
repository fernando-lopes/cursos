import * as restify from 'restify'
import { ForbiddenError } from 'restify-errors'

export const authorize: (...profiles: string[]) => restify.RequestHandler = (...profiles) => {
    return (req, resp, next) => {
        const authenticated = (<any>req).authenticated
        if (authenticated !== undefined && authenticated.hasAny(...profiles)) {
            req.log.debug(
                'User %s is authorized with profiles %j on route %s. Required profiles %j',
                authenticated._id, authenticated.profiles, req.path(), profiles)

            next()
        } else {
            if (authenticated) {
                req.log.debug(
                    'Permission denied for %s, Required profiles: %j. User profiles: %j',
                    authenticated._id, profiles, authenticated.profiles)
            }
            next(new ForbiddenError('Permission denied'))
        }
    }
}
