import $ from "jquery"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://www.ace.toyo.ac.jp/ct/home*"],
  all_frames: true
}
const ExtensionOfToyoNetAce = () => {
  useEffect(() => {
    const dlButtonHtml =
      '<button id="toyoNetAceDlButton">時間割をjsonにしてダウンロード</button>'
    $(".mycourses-body").prepend(dlButtonHtml)
    const handleDownload = () => {
      const confirmDownload: boolean = confirm(
        "時間割をJSONとしてダウンロードしますか？"
      )
      if (confirmDownload) {
        const table: HTMLElement | undefined = $(".stdlist").get(0)
        if (table) {
          const rows: JQuery<HTMLElement> = $(table).find("tr")
          const data: { [key: number]: string[] } = {}
          rows.each(function (rowIndex: number) {
            if (rowIndex > 0) {
              const cells: JQuery<HTMLElement> = $(this).find("td")
              const rowData: string[] = []
              cells.each(function () {
                const cellData: string = $(this).text()
                rowData.push(cellData)
              })
              data[rowIndex] = rowData
            }
          })
          const jsonData: string = JSON.stringify(data, null, 4)
          const downloadLink: HTMLAnchorElement = document.createElement("a")
          downloadLink.href = URL.createObjectURL(
            new Blob([jsonData], { type: "application/json" })
          )
          downloadLink.download = "timeTable.json"
          document.body.appendChild(downloadLink)
          downloadLink.click()
          document.body.removeChild(downloadLink)
        }
      }
    }
    $(document).on("click", "#toyoNetAceDlButton", handleDownload)
    return () => {
      $(document).off("click", "#toyoNetAceDlButton", handleDownload)
    }
  }, [])

  return null
}

export default ExtensionOfToyoNetAce
