import { deleteTask, toggleTaskDone } from '../api/TaskBackend'

export default function TaskCard({ task }) {
  return (
    <div className='bg-zinc-700 text-white rounded-md p-4'>
      <header className='flex justify-between'>
        <h2 className='text-sm font-bold'>{task.title}</h2>
        <span>{task.done === 0 ? '❌' : '✔️'}</span>
      </header>
      <p>{task.description}</p>
      <span>{task.createdAt}</span>
      <button onClick={async () => await deleteTask(task)}>Delete</button>
      <button onClick={async () => await toggleTaskDone(task)}>Done</button>
    </div>
  )
}
