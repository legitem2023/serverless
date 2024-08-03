import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { ReadInventory } from '@/graphql/ClientQuery/ReadInventory';
import Pagination from '../Pagination/Pagination';
import { Input } from '../UI/Input';
import { Icon } from '@iconify/react/dist/iconify.js';
import PriceDisplay from './Price';
import Gallery from '../Gallery/Gallery';
import useCategory from '../../../store/useCategory';
import { useRouter } from 'next/router';
type Sorting = 'name' | 'price' | '';

const Thumbnail:React.FC = () => {
  const {text} = useCategory();

const {data:Products,loading,error} = useQuery(ReadInventory);
const [search, setSearch] = useState<string>('');
const [currentPage, setCurrentPage] = useState<number>(1);
const [sortBy, setSortBy] = useState<Sorting>('price');
const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | ''>('desc');
const router = useRouter();
let pathName = router.pathname;
if(loading) return 
const ProductsWithSearch = Products.ReadInventory?.filter((item:any) => item?.name?.toLowerCase()?.includes(search.toLowerCase()));
const ProductCategory = ProductsWithSearch?.filter((item:any) => item?.category?.toLowerCase()?.includes(text.toLowerCase()));
const itemsPerPage = 12;
const totalItems = ProductCategory?.length;
const totalPages = Math.ceil(totalItems! / itemsPerPage);
const handlePageChange = (page: number) => {
  setCurrentPage(page);
};
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  setCurrentPage(1);
  setSearch(e.target.value);
};
const handleSort = (column:any) => {
  if (sortBy === column) {
    if (sortDirection === 'asc') {
      setSortDirection('desc');
    } else {
      setSortDirection('asc');
    }
  } else {
    setSortBy(column);
    setSortDirection('asc');
  }
};

const handleSortByName = () => {
  handleSort('name');
};
const handleSortByScore = () => {
  handleSort('price');
};

const sortedProducts = ProductCategory?.sort((a:any, b:any) => {
  let sort: any;

  if (sortBy === 'price') {
    if (!a?.price || !b?.price) {
      return 0;
    }

    if (sortDirection === 'asc') {
      sort = a?.price - b?.price;
    } else {
      sort = b?.price - a?.price;
    }
  }

  if (sortBy === 'name') {
    if (!a?.name || !b?.name) {
      return 0;
    }

    if (sortDirection === 'asc') {
      sort = b?.name.localeCompare(a?.name);
    } else {
      sort = a?.name.localeCompare(b?.name);
    }
  }

  return sort;
});

const paginatedProducts = sortedProducts?.slice(
  startIndex,
  endIndex
);



  return (
    <div className='flex flex-wrap justify-left md:justify-center gap-1 md:w-full lg:w-[60%]'>
              <div className='flex justify-center w-[100%]'>
                <div className='flex flex-row m-2 w-[100%]'>
                <Input
                  value={search}
                  placeholder='Search student ID'
                  onChange={handleSearch}
                  className='bg-transparent'
                />
                <select className='w-[20vw]' onChange={(e:any)=>handleSort(e)}>
                  <option value='asc'>Sort by Price</option>
                  <option value='asc'>Low To High</option>
                  <option value='desc'>High To Low</option>
                </select>
                </div>
              </div>
              <div className='flex justify-center w-[100%]'>
                <div className='lg:m-3 m-2 flex'>
                  <Gallery/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4  md:grid-cols-4 lg:grid-cols-6 w-[100vw]">
                    <div className='flex flex-row align-center col-span-2 md:col-span-4 lg:col-span-6  bg-gradient-to-l from-lime-500 via-lime-700 to-lime-800 p-2'>
                    <Icon icon="mdi:tags"/> Products
                    </div>
                {paginatedProducts.map((product:any,i:number)=>(
                  <div key={i}
                      
                       className="flex-shrink-0 relative overflow-hidden bg-lime-600 rounded-lg max-w-xs shadow-sm cursor-pointer m-2">
                    <img src={product.thumbnail}
                         onClick={()=>router.push(`/ProductView/${product.id}`)} 
                         className="relative w-[100%] transition-transform transform hover:scale-110 duration-500" alt={"alt"+i} />
                    <div className="relative text-white m-3">
                      <span className="block opacity-75 -mb-1">Name :{product.name}</span>
                    </div>
                    <div className="relative text-white m-3 flex flex-wrap flex-row">
                      <span className="flex-1 block bg-white rounded-full text-lime-950 text-xs font-bold px-2 py-1 leading-none flex items-center"><PriceDisplay amount={product.price} /></span>
                      <span className="flex-1 flex bg-transparent justify-center align-center rounded-full py-1"></span>
                      <span className="flex-1 flex bg-lime-800 justify-center align-center rounded-full py-1"><Icon icon="fa-solid:cart-plus" style={{right:"0px"}}/></span>
                    </div>
                  </div>
                ))}
              </div>
        <div className='flex justify-center w-[100vw]'>
        <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
        </div>
    </div>
  )
}

export default Thumbnail