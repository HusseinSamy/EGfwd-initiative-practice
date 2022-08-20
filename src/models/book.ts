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

    async post(title: string, author: string, total_pages: number, type: string, summary: string): Promise<IBook> {
        try{
            const connection = await database.connect();
            const query = `INSERT INTO books (title, author, total_pages, type, summary) VALUES ($1,$2,$3,$4,$5)`;
            const result = await connection.query(query, [title,author,total_pages,type,summary]);
            connection.release();
            return result.rows[0];
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

    async update(new_value: string , id: string): Promise<IBook> {
        try{
            const connection = await database.connect();
            const query = `UPDATE books SET author = $1 WHERE id = $2`;
            const result = await connection.query(query,[new_value,id]);
            connection.release();
            return result.rows[0];
        }
        catch(err) {
            throw new Error(`Cannot post to the data base: ${err}`);
        }
    }
    
    async delete(id: string): Promise<IBook> {
        try{
            const connection = await database.connect();
            const query = `DELETE FROM books WHERE id = ($1)`;
            const result = await connection.query(query,[id]);
            connection.release();
            return result.rows[0];
        }
        catch(err) {
            throw new Error(`Cannot delete from the database: ${err}`);
        }

    }
}