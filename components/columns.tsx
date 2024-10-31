import Column from './column'
import CreateTodoDialog from './createTodo'

export default function Columns() {
  return (
    <div className='p-5'>
      <CreateTodoDialog />
      <section className='mt-20 grid lg:grid-cols-3 gap-32 lg:gap-12'>
        <Column title='Todo' status='TODO' />
        <Column title='In Progress' status='IN_PROGRESS' />
        <Column title='Done' status='DONE' />
      </section>
    </div>
  )
}
