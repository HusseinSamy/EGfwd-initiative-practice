import database from "../_Section_2/database";


export interface IBook {
    id: number;
    title: string,
    author: string,
    total_pages: number,
    type: string,
    summary: string
};

export class BookStore {

    async post(title: string, author: string, total_pages: number, type: string, summary: string): Promise<IBook[]> {
        try{
            const connection = await database.connect();
            const query = `INSERT INTO books (title, author, total_pages, type, summary) VALUES (${title}, ${author}, ${total_pages}, ${type}, ${summary})`;
            const result = await connection.query(query);
            connection.release();
            return result.rows;
        }
        catch(err) {
            throw new Error(`Cannot post to the database: ${err}`);
        }
    }

    async index(): Promise<IBook[]> {
        try{
            const connection = await database.connect();
            const query = 'SELECT * FROM books';
            const result = await connection.query(query);
            connection.release();
            return result.rows;
        }
        catch(err) {
            throw new Error(`Something went wrong, Error: ${err}`);
        }
    }

    async update(id: number, col_name: string, new_value: (string | number)): Promise<IBook[]> {
        try{
            const connection = await database.connect();
            const query = `UPDATE TABLE books SET ${col_name} = ${new_value} WHERE id = ${id}`;
            const result = await connection.query(query);
            connection.release();
            return result.rows;
        }
        catch(err) {
            throw new Error(`Cannot post to the data base: ${err}`);
        }
    }
    
    async delete(id: number): Promise<IBook[]> {
        try{
            const connection = await database.connect();
            const query = `DELETE FROM books WHERE id = ${id}`;
            const result = await connection.query(query);
            connection.release();
            return result.rows;
        }
        catch(err) {
            throw new Error(`Cannot delete from the database: ${err}`);
        }

    }
}