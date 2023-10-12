// import axios from "axios"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"
import type { CSSProperties } from "react"
import React, { useEffect, useState } from "react"

// const url = `https://raw.githubusercontent.com/yuon7/deadline-json/main/data.json`

// const fetchFileContent = async () => {
//   const response = await axios.get(url)
//   const data = response.data
//   console.log(data)
//   console.log(data.cs2[0].内容)
// }

// fetchFileContent()

export const config: PlasmoCSConfig = {
  matches: ["https://moocs.iniad.org/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
  const aside = document
    .querySelector("aside")
    ?.querySelector("section")
    ?.querySelector("ul > li:last-child") as Element
  return aside
}

export const getShadowHostId = () => "INIAD-sharp"

const styles: CSSProperties = {
  boxSizing: "border-box",
  fontWeight: "bold",
  color: "#fff",
  fontSize: "0.7rem"
}
const PlasmoInline = () => {
  return <div style={styles}>aaaaaaaaaaaaa</div>
}

export default PlasmoInline
