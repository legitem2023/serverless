// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
type Data = {
  name: string;
};

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {

  const result: any = await prisma.inventory.findMany();

  res.status(200).json(result);
}
