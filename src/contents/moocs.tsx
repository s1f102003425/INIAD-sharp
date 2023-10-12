import axios from "axios"

const url = `https://raw.githubusercontent.com/yuon7/deadline-json/main/data.json`

const fetchFileContent = async () => {
  const response = await axios.get(url)
  const data = response.data
  console.log(data)
  console.log(data.cs2[0].内容)
}

fetchFileContent()
