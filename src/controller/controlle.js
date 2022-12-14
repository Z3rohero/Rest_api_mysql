import { conne } from '../db/connect.js'

export const Getemployes = async (req, res) => { 
  try{
    const [rows] = await pool.query('select * from employee');
  res.json(rows);
    
  }catch(error){
    return res.status(500).json({
      message:"sucedio algo"
    })
  }
  
}

export const Getemploye = async (req, res) => {
 try{
   const [rows] =  await pool.query('select * from employee WHERE id =?', [req.params.id])
  if(rows.length <= 0){
    return  res.status(404).json({
    message: 'emplee'
  })
  res.json(rows[0])
    
  }
  
   
 }catch(error){
   return res.status(500).json({
      message:"sucedio algo"
    })
   
 }
  
}

export const createEmployee = async (req, res) => {
  try{
     const { name, salary } = req.body
  //[rows] significa trae las filas que son indicadas de el json 
  const [rows] = await conne.query('insert into employee (name,salary) values (name,salary)');
  res.send({
    id: rows.insertId,
    name,
    salary

  })
    
  }catch(error){
    return res.status(500).json({
      message: "Sucedio algo"
      
    })
  }
}

export const updateEmployee = async (req, res) => {
  try{
     const {id} =req.params
   const { name, salary } = req.body
   const [result] = await pool.query('update employee set name = IFNULL(?,name),salary = IFNULL(?,salary) where id = ?', 
  [name,salary,id]);
  if(result.affectedRows === 0){
    return  res.status (404).json({
      message: 'empleado no encontrado'
    })
  } 
  const [rows] = await pool.query ('select * from  employee where id = ?',[id])
   res.json(rows)
    
  }catch(error){
    return res.status(500).json({
      message:"Sucedio algo "
    })
    
  }
};

export const deleteEmployee = async (req, res) =>{
 try{
    const [result] =  await pool.query('delete from employee WHERE id =?', [req.params.id])
  if(result.affectedRows <= 0){
    return  res.status(404).json({
    message: 'empleado no encontrado'
  })
  res.json(rows[0])
    
  }
  res.sendStatus(204)
 }catch(error){
   return res.status(500).json({
     message: "Sucedio algo"
   })
   
   
   
 }
  
  
}


