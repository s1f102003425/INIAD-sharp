import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import type { Data } from "src/types/moocsTypes"

const url = `https://raw.githubusercontent.com/jun-eg/deadline-json-fork/main/data.json`

const tesydata = {
  year: {
    "2023": {
      classes: {
        cs2: {
          curses: {
            class2: {
              name: "cs2 class2",
              description: "Computer Science 2",
              deadline: { year: 23, month: 10, day: 14, hour: 23 }
            }
          }
        },
        RW2: {
          curses: {
            class2: {
              name: "RW2 class2",
              description: "Writing Assignment 1",
              deadline: { year: 23, month: 10, day: 14, hour: 23 }
            }
          }
        },
        情報連携学概論: {
          curses: {
            none: {
              name: "情報の連携学概論",
              description: "4-1",
              deadline: { year: 23, month: 10, day: 14, hour: 23 }
            }
          }
        }
      }
    }
  }
}

const FetchDeadLineData = () => {
  const [data, setData] = useState<Data | null>(null)

  const getFiledata = useCallback(async () => {
    try {
      const response = await axios.get<Data>(url)
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    getFiledata()
  }, [getFiledata])

  if (!data) return <div>GettingData</div>

  return (
    <div>
      <p>
        {`${data.year[2023].classes["RW2"].curses["class2"].name}, ${data.year[2023].classes["RW2"].curses["class2"].description},${data.year[2023].classes["RW2"].curses["class2"].deadline.month}/${data.year[2023].classes["RW2"].curses["class2"].deadline.day}/${data.year[2023].classes["RW2"].curses["class2"].deadline.hour}時`}
      </p>
      <p>
        {`${data.year[2023].classes["cs2"].curses["class2"].name}, ${data.year[2023].classes["cs2"].curses["class2"].description},${data.year[2023].classes["cs2"].curses["class2"].deadline.month}/${data.year[2023].classes["cs2"].curses["class2"].deadline.day}/${data.year[2023].classes["cs2"].curses["class2"].deadline.hour}時`}
      </p>
      <p>
        {`${data.year[2023].classes["情報連携学概論"].curses["none"].name}, ${data.year[2023].classes["情報連携学概論"].curses["none"].description},${data.year[2023].classes["情報連携学概論"].curses["none"].deadline.month}/${data.year[2023].classes["情報連携学概論"].curses["none"].deadline.day}/${data.year[2023].classes["情報連携学概論"].curses["none"].deadline.hour}時`}
      </p>
    </div>
  )
}

export default FetchDeadLineData
