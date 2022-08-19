import express, { Request, Response } from 'express';
import cors from 'cors';
import {BookStore} from '../models/bookModel'


const app = express();
const PORT = 3000;
const books = new BookStore();
const corsOptions = {
    origin: 'https://localhost:3000/',
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get('/books', (req: Request, res: Response) => {
    res.send(books.index());
});
app.post('/books', (req: Request, res: Response) => {
    res.send(books.post('The art of thinking clearly', 'Rolf Dobelli', 328, 'Phsychology', 'The book talks about 99 cognitive biases and thinking fallacies in conceise way.'));
});
app.delete('/books/:id', (req: Request, res: Response) => {
    res.send(books.delete(req.params.id));
});
app.put('/books/:id', (req: Request, res: Response) => {
    res.send(books.update('Robert Dobelli',req.params.id as string));
});

app.listen(PORT, () => {console.log(`server started and listening on ${PORT}`);});