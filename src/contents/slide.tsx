import axios from "axios"
import { useCallback, useEffect, useState } from "react"

const DisplayData = () => {
  const [changedData, setChangedData] = useState<string>()

  const getSlideData = (): Promise<string> => {
    return axios
      .get(
        "https://raw.githubusercontent.com/jun-eg/test-zip/main/data/slide.json"
      )
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const fetchData = useCallback(async () => {
    try {
      const data = await getSlideData()
      setChangedData(data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="sidebar-menu tree">
      <li>{JSON.stringify(changedData)}</li>
    </div>
  )
}

export default DisplayData
