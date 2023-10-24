import { type } from "os"

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

export type Classes = {
  [key: string]: ClassInfo | Curses
}

export type Curses = {
  [key: string]: ClassInfo
}

type YearData = {
  [year: number]: {
    classes: Classes
  }
}
export type Data = {
  year: YearData
}
