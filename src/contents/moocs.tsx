import axios from "axios"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"
import { useCallback, useEffect, useState } from "react"
import type { Data } from "src/types/moocsTypes"

export const config: PlasmoCSConfig = {
  matches: ["https://moocs.iniad.org/*"],
  all_frames: true
}
const url = `https://raw.githubusercontent.com/jun-eg/deadline-json-fork/main/data.json`

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
  const aside = document.querySelector(".sidebar-menu.tree") as Element
  return aside
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
    <li>
      <ul style={{ listStyle: "none", color: "red", padding: 0 }}>
        <li>
          {`${data.year[2023].classes["RW2"].curses["class2"].name}, ${data.year[2023].classes["RW2"].curses["class2"].description},${data.year[2023].classes["RW2"].curses["class2"].deadline.month}/${data.year[2023].classes["RW2"].curses["class2"].deadline.day}/${data.year[2023].classes["RW2"].curses["class2"].deadline.hour}時`}
        </li>
        <li>
          {`${data.year[2023].classes["cs2"].curses["class2"].name}, ${data.year[2023].classes["cs2"].curses["class2"].description},${data.year[2023].classes["cs2"].curses["class2"].deadline.month}/${data.year[2023].classes["cs2"].curses["class2"].deadline.day}/${data.year[2023].classes["cs2"].curses["class2"].deadline.hour}時`}
        </li>
        <li>
          {`${data.year[2023].classes["情報連携学概論"].curses["none"].name}, ${data.year[2023].classes["情報連携学概論"].curses["none"].description},${data.year[2023].classes["情報連携学概論"].curses["none"].deadline.month}/${data.year[2023].classes["情報連携学概論"].curses["none"].deadline.day}/${data.year[2023].classes["情報連携学概論"].curses["none"].deadline.hour}時`}
        </li>
      </ul>
    </li>
  )
}

export default FetchDeadLineData
