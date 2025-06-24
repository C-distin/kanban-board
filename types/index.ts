export interface BoardsWithColumns {
  id: string
  title: string
  description?: string
  color: string
  userId: string
  isPublic: boolean
  createdAt: Date
  updatedAt: Date
  columns: ColumnWithCards[]
}

export interface ColumnWithCards {
  id: string
  title: string
  boardId: string
  position: number
  createdAt: Date
  updatedAt: Date
  cards: Card[]
}

export interface Card {
  id: string
  title: string
  description?: string
  columnId: string
  position: number
  priority: "low" | "medium" | "high"
  dueDate?: Date
  createdAt: Date
  updatedAt: Date
}

export type Priority = "low" | "medium" | "high"
