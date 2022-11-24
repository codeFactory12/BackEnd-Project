import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-neutral-600 flex justify-between px-20 py-5'>
      <Link to='/' className='text-white font-bold text-2xl'>
        Scrum Manager
      </Link>
      <Link to='/new/task' className='text-white font-bold text-2xl'>
        CreateTask
      </Link>
    </div>
  )
}
