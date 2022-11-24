import { pool } from '../db.js'


export const getProjects =  async (req,res) =>{
    const [rows] = await pool.query('SELECT * FROM projects')
    res.json(rows)
}

export const getProjectsid =  async (req,res) =>{
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM projects WHERE idprojects = ?',[req.params.id])
    console.log(rows)
    res.json(rows[0])
}

export const postProject = async (req,res) =>{
    const { name, numberoflists} = req.body
    const[rows] = await pool.query('INSERT INTO projects(name,numberoflists) VALUES (?, ?)',[name,numberoflists])
    res.send({rows})
}

export const deleteProject = async (req,res) => {
    const result = await pool.query('DELETE FROM projects WHERE idprojects = ?', [req.params.id])
    console.log(result)
    res.send('employee deleted')
}

export const putProject = (req,res) =>{
    res.send('actualizar tareas');
}
