import express from 'express'
import logger from '../../middlewares/loggingMiddleware'


const admin = express.Router();

admin.get('/', logger, () => {
    return '/api/admin'
})

export default admin;