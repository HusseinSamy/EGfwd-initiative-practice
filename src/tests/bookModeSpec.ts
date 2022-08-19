import { IBook, BookStore } from "../models/bookModel";

const books = new BookStore;

describe('Parent Suite', () => {
    it('expects the functions to be declared', () => {
        expect(books.index).toBeDefined();
    });
    it('expects the functions to be return array', async() => {
        const res = await books.index(); 
        expect(res).toEqual([]);
    });
})