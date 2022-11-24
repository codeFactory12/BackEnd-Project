import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'al123.al12.',
    port: '3306',
    database: 'projectds'
})
