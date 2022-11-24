import { useEffect, useState } from 'react'
import { getTasks } from '../api/TaskBackend'
import TaskCard from '../components/TaskCard'

export default function TaskPage() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function loadTasks() {
      const response = await getTasks()
      setTasks(response.data)
    }
    loadTasks()
  }, [])

  const renderTasks = () => tasks.map(task => <TaskCard key={task.id} task={task} />)

  return (
    <div>
      <h1 className='text-4xl text-slate-700 font-bold text-center'>Tasks</h1>
      <div className='grid grid-cols-2 gap-2'>{renderTasks()}</div>
    </div>
  )
}
