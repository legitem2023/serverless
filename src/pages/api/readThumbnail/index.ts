// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const result: any = await prisma.inventory.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      thumbnail: true,
      category: true,
      color: true
    }
  });

  res.status(200).json(result);
}
