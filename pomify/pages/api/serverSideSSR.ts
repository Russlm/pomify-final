import type { NextApiRequest, NextApiResponse } from 'next'

export default function Test(req: NextApiRequest, res: NextApiResponse ) {
  res.json({hello: "world", method: req.method})
}