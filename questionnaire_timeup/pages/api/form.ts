import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body = req.body
    console.log(`ID: ${body.id} Time : ${body.time/1000} [s], Answer: ${body.answer}`)
    res.status(200).json({ data: `${body.answer}`})
  }
}
