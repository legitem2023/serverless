import Image from "next/image";
import { Inter } from "next/font/google";
import ProductView from "@/components/Products/ProductView";

const inter = Inter({ subsets: ["latin"] });
export default function Product() {
  return (
    <main className="flex flex-wrap justify-center items-center w-full md:w-full lg:w-[100%] lg:h-[100vh]">
      <div className="bg-lime-950 bg-opacity-1 w-[100vw] h-[98vh] fixed z-50 top-0 left-0">
        <ProductView/>
      </div>
    </main>
  );
}
