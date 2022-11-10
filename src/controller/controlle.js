import {conne} from '../db/connect'

export const Getemployes =async (req, res) =>{
  const [rows] = await pool.query('select * from employee');
  res.json(rows);
  
}

export const createEmployee =async(req, res) => {
  const {name, salary}= req.body
  //[rows] significa trae las filas que son indicadas de el json 
  const [rows] = await conne.query('insert into employee (name,salary) values (name,salary)');
  res.send({
    id:rows.insertId,
    name,
    salary
    
  })
}

export const updateEmployee =(req, res) => res.send("actualizar");

export const deleteEmployee =(req, res) => res.send("eliminado");


