import Image from "next/image";
import { Inter } from "next/font/google";
import ProductView from "@/components/Products/ProductView";
import { GetServerSideProps } from "next";
import prisma from "../../../../lib/prisma";
const inter = Inter({ subsets: ["latin"] });
type Inventory = {
  id: string;
  name: string | null;
  price: number | null;
  thumbnail: string | null;
  category: string | null;
  color: string | null;
  size: string | null
}[]
type Props = {
  inventory: Inventory[];
};

export default function Product({ inventory }: Props) {
  return (
    <main className="flex flex-wrap justify-center items-center w-full md:w-full lg:w-[100%] lg:h-[100vh]">
      <div className="bg-lime-950 bg-opacity-1 w-[100vw] h-[98vh] fixed z-50 top-0 left-0 overflow-x-hidden overflow-y-auto">
        <ProductView Inventory={inventory} />
      </div>
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
      color: true,
      size: true
    }
  });
  return {
    props: {
      inventory,
    },
  };
};
