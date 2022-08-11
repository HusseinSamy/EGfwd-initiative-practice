import express from 'express'
import logger from '../../middlewares/loggingMiddleware';

const user = express.Router();

user.get ('/', logger);

export default user;