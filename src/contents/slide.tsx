import axios from "axios"

const getSlideData = () => {
  axios
    .get(
      "https://raw.githubusercontent.com/jun-eg/test-zip/main/data/slide.json"
    )
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}

getSlideData()
