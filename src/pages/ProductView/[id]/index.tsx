import Image from "next/image";
import { Inter } from "next/font/google";
import ProductView from "@/components/Products/ProductView";
import { GetServerSideProps } from "next";
import prisma from "../../../../lib/prisma";
import { useEffect, useState } from "react";
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

export default function Product() {
  const [inventory, setInventory] = useState<Inventory[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Added loading state

  useEffect(() => {
    async function getInventory() {
      try {
        const response = await fetch("/api/readThumbnail");
        const result = await response.json();
        setInventory(result);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      } finally {
        setLoading(false); // Ensure loading state is set to false after fetching
      }
    }

    getInventory();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <main className="flex flex-wrap justify-center items-center w-full md:w-full lg:w-[100%] lg:h-[100vh]">
      <div className="bg-lime-950 bg-opacity-1 w-[100vw] h-[98vh] fixed z-50 top-0 left-0 overflow-x-hidden overflow-y-auto">
        {loading ? (
        <p>Loading...</p> // Simple loading indicator
      ) : (
        <ProductView Inventory={inventory} />
      )}
      </div>
    </main>
  );
}
