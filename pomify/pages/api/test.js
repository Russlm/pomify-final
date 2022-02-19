import { NextApiRequest, NextApiResponse } from 'next';


export default async function test(NextApiRequest, NextApiResponse) {
  if (req.method !== "GET") {
    res.status(500).json({message: "return error here."})
  }
}