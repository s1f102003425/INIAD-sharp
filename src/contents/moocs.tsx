// import { json } from "stream/consumers"
import axios from "axios"
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
  // matches: ["https://findy-code.io/home"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
  const aside = document
    // .querySelector("aside")
    // ?.querySelector("section")
    // ?.querySelector("ul > li:last-child") as Element
    .querySelector(".sidebar-menu.tree") as Element
  // .querySelector(".custom-15x9owl") as Element
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
  return <li style={styles}>{newdata ? JSON.stringify(newdata) : "Loading..."}</li>
}

export default PlasmoInline
