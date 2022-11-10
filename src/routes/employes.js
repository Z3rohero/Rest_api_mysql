import { Router } from 'express'
import { Getemployes, Getemploye, createEmployee, updateEmployee, deleteEmployee } from '../controller/controlle.js'
const router = Router()

router.get('/employees', Getemployes)

router.get('/employees/:id', Getemploye)

router.post('/employees', createEmployee)
//con mas actualizar algunso datos 
router.patch('/employees/:id', updateEmployee)

router.delete('/employees/:id', deleteEmployee)

export default router