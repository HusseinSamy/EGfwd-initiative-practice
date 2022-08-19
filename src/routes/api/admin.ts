import express from 'express'
import logger from '../../_Section_1/middlewares/loggingMiddleware'


const admin = express.Router();

admin.get('/', logger, () => {
    return '/api/admin'
})

export default admin;