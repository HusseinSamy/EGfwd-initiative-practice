import express from 'express'
import logger from '../middlewares/loggingMiddleware';
import admin from './api/admin'
import user from './api/user';

const routes = express.Router();

routes.use('/admin', admin);
routes.use('/user', user);

export default routes;
