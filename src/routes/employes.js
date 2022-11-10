import {Router} from 'express'
import {Getemployes} from '../controller/controlle.js'
const router = Router()

router.get('/', Getemployes)

router.post('/', (req, res) =>
  res.send("hello word serve")
);

router.put('/', (req, res) =>
  res.send("hello word serve")
);

router.delete('/', (req, res) =>
  res.send("hello word serve")
);

export default router