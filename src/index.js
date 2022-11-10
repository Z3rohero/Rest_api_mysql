import express from "express";
import { conne } from './db/connect.js';
import {router}from './routes/employes.js'
import{index} from  './routes/index.routes.js'

const app = express();


app.use (employes);
app.use (index);
app.listen(process.env.PORT||3000);








//app.routes ("/", (rest, ))
