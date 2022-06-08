import type { NextApiRequest, NextApiResponse } from 'next'
import posttestjson from '../../../data/posttest.json'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json(posttestjson)
  }
}