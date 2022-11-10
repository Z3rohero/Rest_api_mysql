import express from 'express';
import { router } from './routes/employes.js'
import { indexRoute } from './routes/indexroutes.js'

const app = express();
//Todas las rutas se va procesa con la funcion de express.json antes de llegar 
app.use(express.json())
app.use('/api', router);
app.use(indexRoute);
app.listen(process.env.PORT || 3000);








