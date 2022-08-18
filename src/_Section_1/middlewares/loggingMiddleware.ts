import { NextFunction, Request, Response } from "express";

const logger = (req:Request, res:Response, next:NextFunction) => {
    res.send(`[${req.baseUrl}] has beed visited!`);
    console.log(`[${req.baseUrl}] has beed visited!`);
    next();
}

export default logger;