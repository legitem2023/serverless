import Image from "next/image";
import { Inter } from "next/font/google";
import Thumbnail from "@/components/Products/Thumbnail";
const inter = Inter({ subsets: ["latin"] });
import prisma from "../../../lib/prisma";

import { GetServerSideProps } from 'next';
type Inventory = {
  id: string;
  name: string | null;
  price: number | null;
  thumbnail: string | null;
  category: string | null;
  color: string | null;
}[]
type Props = {
  inventory: Inventory[];
};

export default function Product({ inventory }: Props) {
  return (
    <main className="flex flex-wrap justify-center items-center w-full md:w-full lg:w-[100%]">
      <Thumbnail Inventory={inventory} />
    </main>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const inventory = await prisma.inventory.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      thumbnail: true,
      category: true,
      color: true
    }
  });
  return {
    props: {
      inventory,
    },
  };
};
