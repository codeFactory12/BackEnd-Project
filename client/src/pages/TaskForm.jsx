import { Form, Formik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createTask } from '../api/TaskBackend'

export default function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const navigate = useNavigate()

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          await createTask(values)

          setTask({
            title: '',
            description: '',
          })

          navigate('/')
        }}
      >
        {({ handleSubmit, handleChange, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className='bg-slate-300 max-w-sm rounded-sm p-4 mx-auto mt-10'>
            <h1 className='text-2xl font-bold text-center'>Create Task</h1>
            <label className='block text-xl'>Title</label>
            <input
              className='px-2 py-2 rounden-sm w-full'
              type='text'
              name='title'
              placeholder='Insert the title'
              onChange={handleChange}
              value={values.title}
            />

            <label className='block text-xl'>Description</label>
            <input
              className='px-2 py-2 rounded-sm w-full'
              name='description'
              rows='2'
              placeholder='Insert a Description'
              onChange={handleChange}
              value={values.description}
            />

            <button className='block bg-black text-white w-gull rounded-md' type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
