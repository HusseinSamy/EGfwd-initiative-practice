import bcrypt from 'bcrypt';
import database,{BCRYPT_PASSWORD, SALT_ROUNDS} from '../_Section_2/database';

const pepper = BCRYPT_PASSWORD;
const saltRounds = SALT_ROUNDS;

export interface User {
    id?: number,
    username: string, 
    password: string; 
}

export class UserClass {
    async create(u: User): Promise<User> {
        try{
            const db = await database.connect();
            const sql = 'INSERT INTO users (username, password) VALUES ($1,$2) RETURNING *';
            const hash = bcrypt.hashSync(u.password + pepper, +saltRounds!);
        const res = await db.query(sql,[u.username, hash]);
            db.release();
            return res.rows[0];
        }
        catch(err){
            throw new Error(`unable to create your account: ${err}`);
        }
    }
}