import axios from "axios"
import type { PlasmoCSConfig } from "plasmo"
import React, { useEffect, useState } from "react"

import type { Assignment, Data } from "../types/type"
import styles from "./moocs/index.module.css"

export const config: PlasmoCSConfig = {
  matches: ["https://moocs.iniad.org/*"],
  all_frames: true
}
const ExtensionOfMoocs = () => {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    console.log("aaaaaaaaaaasdddddddd")
    const fetchFileContent = async () => {
      const url =
        "https://raw.githubusercontent.com/yuon7/deadline-json/main/data.json"

      const response = await axios.get<Data>(url)
      setData(response.data)
    }

    fetchFileContent()
  }, [])
  const cs2IsArray = Array.isArray(data?.cs2)

  return (
    <div className={styles.container}>
      {data ? (
        <div>
          <h1>
            {cs2IsArray
              ? `Year: ${(data.cs2 as Assignment[])[0].deadline.year}, Month: ${
                  (data.cs2 as Assignment[])[0].deadline.month
                }`
              : "Not an array"}
          </h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ExtensionOfMoocs
