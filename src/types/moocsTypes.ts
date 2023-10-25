export type Deadline = {
  year: number
  month: number
  day: number
  hour: number
}

export type ClassInfo = {
  name: string
  description: string
  deadline: Deadline
}

export type Curses = {
  [key: string]: ClassInfo
}

export type Classes = {
  [key: string]: {
    curses: Curses | { [key: string]: ClassInfo }
  }
}

type YearData = {
  [year: number]: {
    classes: Classes
  }
}

export type Data = {
  year: YearData
}
