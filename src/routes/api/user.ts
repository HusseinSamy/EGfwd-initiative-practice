import express from 'express'
import logger from '../../_Section_1/middlewares/loggingMiddleware';

const user = express.Router();

user.get ('/', logger, () => {
    return '/api/user'
});

export default user;