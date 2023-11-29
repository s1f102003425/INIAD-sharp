export type Subject = "cs2" | "RW2" | "情報連携学概論"

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

export type Classes = {
  [className: string]: Assignment[]
}

export type Data = {
  [key in Subject]: Assignment[] | Classes
}
