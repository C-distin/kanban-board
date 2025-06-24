"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function KanbanPage() {
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (!user) {
      router.push("/login")
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Your Kanban Board</h1>
        <p className="text-lg text-gray-600 mb-8">
          Organize your tasks efficiently with our simple and intuitive kanban board system.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Create new tasks by clicking the "Add Task" button</li>
            <li>• Drag and drop tasks between columns</li>
            <li>• Edit tasks by clicking on them</li>
            <li>• Track your progress in real-time</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
