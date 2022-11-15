import express from 'express';
import { router } from './routes/employes.js'
import { indexRoute } from './routes/indexroutes.js'
import './config.js'

const app = express();
//Todas las rutas se va procesa con la funcion de express.json antes de llegar 
app.use(express.json())
app.use('/api', router);
app.use(indexRoute);
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint no encontrado"
  })
})
app.listen(process.env.PORT || 3000);








