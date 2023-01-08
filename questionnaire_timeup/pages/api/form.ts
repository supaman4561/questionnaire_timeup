import type { NextApiRequest, NextApiResponse } from 'next'
import { format } from 'date-fns'
import * as fs from 'fs'
import { EOL } from 'os'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body = req.body
    const logFilePath = `log/${body.userid}.csv`
    const header = "DateTime,UserID,Section,QuestionID,Answer,Time"
    const logData = [
      format(new Date().getTime(), 'yyyy/MM/dd HH:mm:ss'),
      body.userid,
      body.setid,
      body.qid,
      body.answer,
      body.time/1000
    ].join(',')

    try {
      if (!fs.existsSync(logFilePath)) {
        // file does not exist
        fs.writeFileSync(logFilePath, header + EOL)  // write csv header
      }
      fs.appendFile(logFilePath, logData + EOL, 'utf-8', (err) => {
        if (err) throw err;
      })
    } catch(err) {
      console.error(err);
    }
    
    console.log(logData);
    res.status(200).json({ data: `${body.answer}`})
  }
}
