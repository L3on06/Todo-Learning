import { create } from "zustand"

export type StatusProps = "TODO" | "IN_PROGRESS" | "DONE"

export type TaskProps = {
    id: string
    title: string
    description?: string
    status: StatusProps
}

export type State = {
    tasks: TaskProps[]
    draggedTask?: string | null
}

export type Action = {
    createTask: (title: string, description?: string) => void
    removeTask: (id: string) => void
    updateTask: (id: string, status: StatusProps) => void
    setDraggedTask: (id: string | null) => void
}


export const useTaskStore = create<State & Action>()((set) => ({
    tasks: [],
    draggedTask: null,
    createTask: (title: string, description?: string) => set((state) => ({ tasks: [...state.tasks, { id: Date.now().toString(), title, description, status: "TODO" }] })),
    removeTask: (id: string) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
    updateTask: (id: string, status: StatusProps) => set((state) => ({
        tasks: state.tasks.map((task) => {
            if (task.id === id) {
                return { ...task, status }
            }
            return task
        })
    })),
    setDraggedTask: (id: string | null) => set({ draggedTask: id })
}))