import { url } from "inspector"
import type { AxiosError } from "axios"
import axios from "axios"

let jsonData: any = null

const fetchData = async (): Promise<void> => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/jun-eg/test-zip/main/data/slide.json"
    )
    jsonData = response.data

    console.log(jsonData)
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.response) {
      console.error("status:", axiosError.response.status)
      console.error("data:", axiosError.response.data)
      console.error("headers:", axiosError.response.headers)
    }
  }
  const urls: string[] = allDownload(jsonData)
  console.log(urls)
}

type RecursiveObject = {
  [key: string]: string | RecursiveObject
}

function allDownload(obj: RecursiveObject, urls: string[] = []): string[] {
  // オブジェクトのキーをイテレートします。
  for (const key in obj) {
    // キーの値がオブジェクトの場合、再帰的に関数を呼び出します。
    if (typeof obj[key] === "object" && obj[key] !== null) {
      allDownload(obj[key] as RecursiveObject, urls)
    } else if (key === "url" && typeof obj[key] === "string") {
      // キーが"url"で、値が文字列の場合、urls配列に追加します。
      urls.push(obj[key] as string)
    }
  }
  // URLの配列を返します。
  return urls
}

fetchData()
