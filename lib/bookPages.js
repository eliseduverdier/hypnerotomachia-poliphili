import fs from 'fs'
import path from 'path'

const bookFolder = path.join(process.cwd(), 'public/pages/')

export function getBookPagesData() {
  const fileNames = fs.readdirSync(bookFolder)

  const bookPages = fileNames.map(fileName => {
    const id = fileName.replace(/\.html$/, '')

    const fullPath = path.join(bookFolder, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    return {
      id,
      ...fileContents
    }
  })
  return bookPages.sort((a, b) => {
    return parseInt(a) > parseInt(b) ? 1 : -1
  })
}

export function getAllPagesIds() {
  const fileNames = fs.readdirSync(bookFolder)

  return fileNames.map(fileName => ({
    params: {
     page: fileName.replace(/\.html$/, '')
    }
  }))
}

export function getPageData(id) {
  const fullPath = path.join(bookFolder, `${id}.html`)
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Combine the data with the id
  return {
    id,
    contents: fileContents,
  }
}