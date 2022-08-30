import express, { Application, Request, Response } from 'express';
import {IBook, BookStore} from '../models/book';

const books = new BookStore();

const index = async (_req: Request, res: Response) => {
    const result = await books.index();
    res.json(result);
};

const update = async (req: Request, res: Response) => {
    const result = await books.edit('Mike Tyson',req.params.id);
    res.json(result);
};

const del = async (req: Request, res: Response) => {
    const result = await books.delete(req.params.id);
    res.json(result);
};

const post = async (_req: Request, res: Response) => {
    const result = await books.create('The art of thinking clearly', 'Rolf Dobelli', 328, 'Phsychology', 'The book talks about 99 cognitive biases and thinking fallacies in conceise way.');
    res.json(result);
};


const bookRouter = (app: Application) => {
    app.get('/books', index);
    app.post('/books', post);
    app.delete('/books/:id', del);
    app.put('/books/:id', update);
}

export default bookRouter;