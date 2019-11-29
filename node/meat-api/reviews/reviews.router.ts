import * as restify from 'restify'
import * as mongoose from 'mongoose'
import { ModelRouter } from '../common/model-router'
import { Review } from './reviews.model'
import { authorize } from '../security/authz.handler'

class ReviewsRouter extends ModelRouter<Review> {

    constructor() {
        super(Review)
    }

    envelope(document: any): any {
        let resource = super.envelope(document)
        const restaurantId = resource.restaurant._id || resource.restaurant
        resource._links.restaurant = `/restaurants/${restaurantId}`
        return resource
    }

    protected prepareOne(query: mongoose.DocumentQuery<Review, Review>): mongoose.DocumentQuery<Review, Review> {
        return query.populate('user', 'name')
            .populate('restaurant', 'name')
    }

    applyRoutes(application: restify.Server) {
        application.get(this.basePath, this.findAll)
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById])
        application.post(this.basePath, [authorize('user'), this.save])
    }
}

export const reviewsRouter = new ReviewsRouter()