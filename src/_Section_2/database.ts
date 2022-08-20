import {Pool} from 'pg';
import dotenv from 'dotenv'

dotenv.config();


export const {
POSTGRES_DB,
POSTGRES_USER,
POSTGRES_PASSWORD,
POSTGRES_HOST,
POSTGRES_TEST,
ENV,
BCRYPT_PASSWORD,
SALT_ROUNDS
} = process.env;

let database: Pool = new Pool({
    database: POSTGRES_TEST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    host: POSTGRES_HOST
});

if (ENV === 'dev') {
    
    database = new Pool({
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        host: POSTGRES_HOST
    });
}

if(ENV === 'test') {
    database = new Pool({
        database: POSTGRES_TEST,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        host: POSTGRES_HOST
    }); 
}


export default database;