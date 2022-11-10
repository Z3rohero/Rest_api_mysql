import express from "express";
import { employeRoute } from './routes/employes'
import { indexRoutes } from './routes/index.routes.js'

const app = express();
//Todas las rutas se va procesa con la funcion de express.json antes de llegar 
app.use(express.json())
app.use('/api',indexRoutes);
app.use(employeRoute);
app.listen(process.env.PORT || 3000);








