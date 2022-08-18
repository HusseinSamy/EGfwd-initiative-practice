import {Pool} from 'pg';
import dotenv from 'dotenv'

console.log(dotenv.config());
dotenv.config();
const {
POSTGRES_DB,
POSTGRES_USER,
POSTGRES_PASSWORD,
POSTGRES_HOST
} = process.env;

const database = new Pool({
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    host: POSTGRES_HOST
});

export default database;