import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body = req.body
    const time = Date.now() - body.startTime
    console.log(`ID: ${body.id} Time : ${time/1000} [s], Answer: ${body.answer}`)
    res.status(200).json({ data: `${body.answer}`})
  }
}
