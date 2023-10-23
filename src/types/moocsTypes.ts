export type Deadline = {
  year: number
  month: number
  day: number
  hour: number
}

export type Assignment = {
  description: string
  deadline: Deadline
}

export type Course = {
  [key: string]: Assignment
}

export type Data = {
  cs2: Assignment
  RW2: Course
  情報連携学概論: Assignment
}
