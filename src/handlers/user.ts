import { Application, Request, Response } from 'express';
import { User, UserClass } from '../models/user';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { BodyParser } from 'body-parser';
dotenv.config()

const users = new UserClass();
const create = async (req: Request, res: Response) => {
    const user: User = {

        username: req.body.username,
        password: req.body.password,
    }
    try{
        const newUser = await users.create(user);
        const token = jwt.sign({user: newUser}, process.env.TOKEN_SECRET!);
        res.send(token)
    }catch(err){
        console.log(err)
    }
}

const userRouter = (app: Application) => {
    app.post('/users', create)
}

export default userRouter;