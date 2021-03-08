import fs from 'fs'
import path from 'path'

const bookFolder = path.join(process.cwd(), 'public/pages')

export function getBookPagesData() {
  const fileNames = fs.readdirSync(bookFolder)

  const bookPages = fileNames.map(fileName => {
    const id = fileName.replace(/\.html$/, '')

    // Read markdown file as string
    const fullPath = path.join(bookFolder, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Combine the data with the id
    return {
      id,
      ...fileContents
    }
  })
console.log(bookPages)
  return bookPages
}