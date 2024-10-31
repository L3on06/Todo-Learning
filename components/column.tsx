'use client'

import { StatusProps, useTaskStore } from '@/store/task'
import Task from './task'
import { useMemo } from 'react'

const tasks = [
  {
    id: '1234',
    title: 'Our first task',
    description: 'Some description',
    status: 'TODO'
  }
]

export default function Column({
  title,
  status
}: {
  title: string
  status: StatusProps
}) {
  const tasks = useTaskStore((state) => state.tasks)
  const filteredTasks = useMemo(() => tasks.filter(task => task.status === status), [tasks, status])

  const updateTask = useTaskStore((state) => state.updateTask)
  const draggedTask = useTaskStore((state) => state.draggedTask)
  const setDraggedTask = useTaskStore((state) => state.setDraggedTask)

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    if (!draggedTask) return
    updateTask(draggedTask, status)
    setDraggedTask(null)
  }

  return (
    <section className='h-[600px] flex-1'>
      <h2 className='ml-1 font-serif text-center text-3xl font-semibold'>{title}</h2>

      <div
        className='mt-3.5 h-full w-full flex-1 rounded-xl bg-gray-300 p-4 overflow-y-scroll shadow-black/30 shadow-2xl'
        onDrop={handleDrop}
        onDragOver={e => e?.preventDefault()}
      >
        <div className='flex flex-col gap-4'>
          {filteredTasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
    </section>
  )
}
