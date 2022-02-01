// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabse } from '../../util/mongodb';

export default async function handler(req, res) {
  const {db} = await connectToDatabse();
  const data = await db.collection("states").find({}).limit(20).toArray();
  
  res.status(200).json(data);
}
