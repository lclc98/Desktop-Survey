import XLSX from 'xlsx'
import fs from 'fs'

const sheet = 'survey'
const path = './data.xlsx'

export function saveInformation (data) {
  let wb
  let ws

  let row = {'Full Name': data.fullName, 'Phone Number': data.phoneNumber, 'Address': data.address}
  for (let i in data.survey) {
    row[data.survey[i].question] = data.survey[i].responses[data.answers[i]]
  }
  if (fs.existsSync(path)) {
    wb = XLSX.readFile(path)
    ws = wb.Sheets[sheet]
    XLSX.utils.sheet_add_json(ws, [row], {skipHeader: true, origin: -1})
  } else {
    wb = XLSX.utils.book_new()
    ws = XLSX.utils.json_to_sheet([row])
    XLSX.utils.book_append_sheet(wb, ws, sheet)
  }
  XLSX.writeFile(wb, path)
}
