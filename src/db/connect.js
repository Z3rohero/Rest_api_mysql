import { createPool } from 'mysql2/promise'

import {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD
} from '../config.js'

export const conne = createPool({
  database:DB_DATABASE ,
  user:DB_USER ,
  host: DB_HOST,
  password: DB_PASSWORD,
  ssl:{
    rejectUnauthorized:false
  }
});





