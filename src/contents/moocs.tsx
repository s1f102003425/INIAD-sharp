import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import type { Data } from "src/types/moocsTypes"

const url = `https://raw.githubusercontent.com/jun-eg/deadline-json-fork/main/data.json`

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
      <div>
        <p>
          {`${data.RW2.class2.description}, ${data.RW2.class2.deadline.month}/${data.RW2.class2.deadline.day}/${data.RW2.class2.deadline.hour}時`}
        </p>
        <p>
          {`${data.cs2.description}, ${data.cs2.deadline.month}/${data.cs2.deadline.day}/${data.cs2.deadline.hour}時`}
        </p>
        <p>
          {`${data.情報連携学概論.description}, ${data.情報連携学概論.deadline.month}/${data.情報連携学概論.deadline.day} at ${data.情報連携学概論.deadline.hour}:00`}
        </p>
      </div>
    </div>
  )
}

export default FetchDeadLineData
