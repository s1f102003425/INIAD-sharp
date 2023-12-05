// import { json } from "stream/consumers"
import axios from "axios"
<<<<<<< HEAD
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"
import type { CSSProperties } from "react"
import React, { useEffect, useState } from "react"

// const url = `https://raw.githubusercontent.com/yuon7/deadline-json/main/data.json`
const url = `https://raw.githubusercontent.com/s1f102003425/deadpiro-json/main/data.json`

const fetchFileContent = async () => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
    return null // エラーの場合、nullを返すか適切なエラーハンドリングを行う
  }
}

export const config: PlasmoCSConfig = {
  matches: ["https://moocs.iniad.org/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
  const aside = document
    .querySelector(".sidebar-menu.tree") as Element
  return aside
}

export const getShadowHostId = () => "INIAD-sharp"

const styles: CSSProperties = {
  boxSizing: "border-box",
  fontWeight: "bold",
  color: "#ff0000",
  fontSize: "0.7rem"
}

const PlasmoInline = () => {
  const [newdata, setNewData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFileContent()
        console.log(data.cs2.deadline)
        setNewData(data.cs2.deadline)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  return <li style={styles}>{newdata === null ? JSON.stringify(newdata) : "Loading..."}</li>
}

export default PlasmoInline
=======
import type { PlasmoCSConfig } from "plasmo"
import { useCallback, useEffect, useState } from "react"
import type { Data } from "src/types/moocsTypes"

export const config: PlasmoCSConfig = {
  matches: ["https://moocs.iniad.org/*"],
  all_frames: true
}
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
>>>>>>> upstream/develop
