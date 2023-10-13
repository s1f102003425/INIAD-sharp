import axios from "axios"

const url = `https://raw.githubusercontent.com/jun-eg/test-zip/main/data/slide.json`

const fetchSlideContent = async () => {
  const response = await axios.get(url)
  const data = response.data
  console.log(data)
}

fetchSlideContent()
