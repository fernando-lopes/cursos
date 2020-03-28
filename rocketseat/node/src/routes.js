import express from 'express';
import ProductController from './controllers/ProductController';

const routes = express.Router();
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);
routes.post('/products', ProductController.store);

module.exports = routes;