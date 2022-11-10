import { Router } from 'express'
import { ping } from '../controller/indexcontroller.js'

const indexRoute = Router()
indexRoute.get('/ping', ping);

export default indexRoute;