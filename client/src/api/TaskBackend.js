import axios from 'axios'

export const createTask = async task => await axios.post('http://localhost:5000/api/v1/tasks', task)

export const deleteTask = async task => await axios.delete(`http://localhost:5000/api/v1/tasks/${task.id}`)

export const getTask = async id => await axios.get(`http://localhost:5000/api/v1/tasks/${id}`)

export const getTasks = async () => await axios.get(`http://localhost:5000/api/v1/tasks`)

export const updateTask = async (id, newTask) => await axios.put(`http://localhost:5000/api/v1/tasks/${id}`, newTask)

export const toggleTaskDone = async task => {
  await axios.put(`http://localhost:5000/api/v1/tasks/${task.id}`, {
    done: !task.done,
  })
}
