// pages/api/homeData.ts (or app/api/homeData.ts)
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const products = await prisma.user.findMany();
//     res.status(200).json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Database error' });
//   } finally {
//     await prisma.$disconnect();
//   }
// }
