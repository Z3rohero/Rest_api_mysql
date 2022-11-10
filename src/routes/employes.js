import {Router} from 'express'
import {Getemployes, createEmployee,updateEmployee,deleteEmployee} from '../controller/controlle.js'
const router = Router()

router.get('/employees', Getemployes)

router.post('/employees', createEmployee  )

router.put('/employees',  updateEmployee)

router.delete('/employees',deleteEmployee  )

export default employeRoute