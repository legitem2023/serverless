import Thumbnail from "@/components/Products/Thumbnail";
import { useState, useEffect } from "react";

type InventoryItem = {
  id: string;
  name: string | null;
  price: number | null;
  thumbnail: string | null;
  category: string | null;
  color: string | null;
};

export default function Home() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
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
    <main className="flex flex-wrap justify-center items-center w-full md:w-full lg:w-[100%]">
      {loading ? (
        <p>Loading...</p> // Simple loading indicator
      ) : (
        <Thumbnail Inventory={inventory} />
      )}
    </main>
  );
}
