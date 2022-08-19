import express from 'express'
import logger from '../_Section_1/middlewares/loggingMiddleware';
import admin from '../routes/api/admin'
import user from '../routes/api/user';

const routes = express.Router();

routes.use('/admin', admin);
routes.use('/user', user);

export default routes;
