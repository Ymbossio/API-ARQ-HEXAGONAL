
import * as dotenv from 'dotenv';
import { Usuarios } from '../entities/users.model.js'

dotenv.config();


const dialectOptions = process.env.NODE_ENV !== 'production'
  ? {
    postgres: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
  : {}


export const config = {
  dialect: process.env.NODE_DIALECT,  
  host: process.env.NODE_HOST,
  username: process.env.NODE_USER,
  password: process.env.NODE_PASSWORD,
  port: process.env.NODE_PORT,
  database: process.env.NODE_DATABASE,
  dialectOptions: dialectOptions['postgres'] || {},
  models: [Usuarios],
  logging: false,
};