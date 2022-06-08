import type { NextApiRequest, NextApiResponse } from 'next'
import pretestjson from '../../../data/pretest.json'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json(pretestjson)
  }
}