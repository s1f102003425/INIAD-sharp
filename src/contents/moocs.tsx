import axios from "axios"
import * as dotenv from "dotenv"

dotenv.config()

const owner = "yuon7"
const repo = "deadline-json"
const path = "data.json"
const TOKEN = process.env.GITHUB_TOKEN

const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
const Authorization = `token ${TOKEN}`
const Accept = "application/vnd.github.v3+json"

const headers = {
  Authorization,
  Accept
}

const fetchFileContent = async () => {
  const response = await axios.get(url, { headers })
  const fileContentBase64 = response.data.content
  //GitHub API は、ファイルの内容を Base64 エンコーディングで返す。
  const fileContent = JSON.parse(
    Buffer.from(fileContentBase64, "base64").toString("utf-8")
  ) //それをBuffer.from-toで文字列に変換した後JSONに変換してる。このコメントアウトはみんなが理解したら消します。
  console.log(fileContent)
  console.log(fileContent.cs2[0].内容)
}

fetchFileContent()
