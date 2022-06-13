import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body = req.body
    console.log(
      `UserID:${body.userid},SetID:${body.setid},QID:${body.qid},Answer:${body.answer},Time:${body.time/1000}`
    )
    res.status(200).json({ data: `${body.answer}`})
  }
}
