import fs from 'fs'
import path from 'path'

const questionsDirectory = path.join(process.cwd(), 'data')

export const getAllQuestionIds = () => {
  const fileNames = fs.readdirSync(questionsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ''),
      },
    }
  })
}

export const getQuestionData = (id: string) => {
  const fullPath = path.join(questionsDirectory, `${id}.json`)
  const jsonObject = JSON.parse(fs.readFileSync(fullPath, 'utf8'))

  return {
    id,
    jsonObject,
  }
}
