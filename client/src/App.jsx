import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import TaskForm from './pages/TaskForm'
import TaskPage from './pages/TaskPage'

export default function App() {
  return (
    <div className='h-screen bg-zync-300'>
      <Navbar />
      <div className='container mx-auto p-10'>
        <Routes>
          <Route path='/' element={<TaskPage />} />
          <Route path='/new/task' element={<TaskForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
