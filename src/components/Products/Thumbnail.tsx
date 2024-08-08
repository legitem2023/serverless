import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import { Input } from '../UI/Input';
import { Icon } from '@iconify/react/dist/iconify.js';
import PriceDisplay from './Price';
import Gallery from '../Gallery/Gallery';
import useCategory from '../../../store/useCategory';
import { useRouter } from 'next/router';
import Ratings from '../Ratings/Ratings';
import useNav from '../../../store/useNav';
import { truncateString } from '../../../utils/script';

type Sorting = 'name' | 'price' | '';
type Inventory = {
  id: string;
  name: string | null;
  price: number | null;
  thumbnail: string | null;
  category: string | null;
}[]
type Props = {
  Inventory: Inventory[];
};

const Thumbnail = ({ Inventory }:any) => {
  const { text } = useCategory();
  const { setNav } = useNav();

  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<Sorting>('price');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | ''>('desc');
  const router = useRouter();
  let pathName = router.pathname;

  const ProductsWithSearch = Inventory?.filter((item: any) =>
    item?.name?.toLowerCase()?.includes(search.toLowerCase())
  );

  const ProductCategory = ProductsWithSearch?.filter((item: any) =>
    item?.category?.toLowerCase()?.includes(text.toLowerCase())
  );

  const itemsPerPage = 24;
  const totalItems = ProductCategory?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setSearch(e.target.value);
  };

  const handleSort = (column: any) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  const sortedProducts = ProductCategory?.sort((a: any, b: any) => {
    let sort;

    if (sortBy === 'price') {
      if (!a?.price || !b?.price) {
        return 0;
      }
      sort = sortDirection === 'asc' ? a?.price - b?.price : b?.price - a?.price;
    }

    if (sortBy === 'name') {
      if (!a?.name || !b?.name) {
        return 0;
      }
      sort = sortDirection === 'asc' ? b?.name.localeCompare(a?.name) : a?.name.localeCompare(b?.name);
    }
    return sort;
  });

  const paginatedProducts = sortedProducts?.slice(startIndex, endIndex);


  return (
    <div className='flex flex-wrap justify-left md:justify-center gap-0 md:w-full lg:w-[55.56vw]'>
      <div className='flex justify-center w-[100%]'>
        <div className='flex flex-row m-1 w-[100%]'>
          <Input
            value={search}
            placeholder='Search student ID'
            onChange={handleSearch}
            className='bg-transparent'
          />
          <select className='w-[20vw]' onChange={(e: any) => handleSort(e.target.value)}>
            <option value='asc'>Sort</option>
            <option value='asc'>Low To High</option>
            <option value='desc'>High To Low</option>
          </select>
        </div>
      </div>
      <div className='flex justify-center w-[100%]'>
        <div className='lg:m-1 m-1 flex flex-wrap flex-row'>
          <div className='flex-1'>
            <Gallery data={paginatedProducts} />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-[100vw]">
        <div className='flex flex-1 p-2 border-b-4 border-t-4 border-solid col-span-2 sm:grid-cols-2 md:col-span-3 lg:col-span-4 xl:col-span-5 2xl:col-span-6 border-lime-800 flex-row align-center bg-lime-600'>
          <div className='flex flex-col justify-center p-2'><Icon icon="mdi:tags" /></div>
          <div className='flex flex-col justify-center'>Product</div>
        </div>
        {paginatedProducts?.map((product: any, i: number) => (
          <div key={i} className="flex-shrink-0 relative overflow-hidden border-4 border-lime-600 bg-lime-600 rounded-lg max-w-xs cursor-pointer m-1 addShadow">
            <img
              src={product.thumbnail}
              onClick={() => { router.push(`/ProductView/${product.id}`); setNav(pathName); }}
              className="relative w-[100%] transition-transform transform hover:scale-110 duration-500"
              alt={"alt" + i}
            />
            <div className="relative text-white grid grid-cols-3">
              <span className="flex-1 col-span-1 text-shadow-sm">Name</span><span className='col-span-2'>{truncateString(product.name, 25)}</span>
              <span className='col-span-3 flex justify-center'><Ratings /></span>
              <span className="flex-1 col-span-2">Views</span><span className='col-span-1'>(0)</span>
            </div>
            <div className="relative text-white m-3 flex flex-wrap flex-row">
              <span className="flex-1 block bg-white rounded-full text-lime-950 text-xs font-bold px-2 py-1 leading-none flex items-center"><PriceDisplay amount={product.price} /></span>
              <span className="flex-1 flex bg-transparent justify-center align-center rounded-full py-1"></span>
              <span className="flex-1 flex bg-lime-800 justify-center align-center rounded-full py-1"><Icon icon="fa-solid:cart-plus" style={{ right: "0px" }} /></span>
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