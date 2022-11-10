import { createPool } from 'mysql2/promise'

const db = process.env['database']
const host = process.env['host']
const pass = process.env['pass']
const usuario = process.env['usuario']

export const conne = createPool({
  database: db,
  user: usuario,
  host: host,
  password: pass,
  ssl:{
    rejectUnauthorized:false
  }
});





