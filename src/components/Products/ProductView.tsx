import React from 'react'
import { useRouter } from 'next/router'
import { ReadInventory } from '@/graphql/ClientQuery/ReadInventory';
import { useQuery } from '@apollo/client';
import Gallery from '../Gallery/Gallery';
import { Icon } from '@iconify/react/dist/iconify.js';
import Share from '../Share/Share';
import Link from 'next/link';

const ProductView:React.FC = () => {
    const {data:Products,loading,error} = useQuery(ReadInventory);
    const router = useRouter();
    let pathName = router.pathname;
    const query = router.query;
    const id = query.id;
    if(loading) return 
    const filtered = Products.ReadInventory.filter((item:any)=>item.id===id);
    return (
        <div className="flex flex-wrap transform scale-98 h-[100vh] overflow-y-auto">
        {filtered.map((view: any, idx: number) => (
            <div key={idx} className="grid lg:grid-cols-4 gap-0 bg-[#f1f1f1] w-[100vw]">
            <div className="lg:col-span-3 grid lg:grid-cols-3">
                <div className='lg:col-span-3 bg-gradient-to-l from-lime-500 via-lime-700 to-lime-800'>
                    <div className='flex flex-1 p-2 border-t-4 border-b-4 border-solid border-lime-700 flex-row align-center bg-lime-600 h-[5vh]'>Products Data</div>
                </div>
                <div className='flex lg:col-span-3 bg-[#f1f1f1] h-[5vh]'>
                  <Link href="/"className="lg:col-span-3 flex items-center justify-center h-full px-5 text-1xl">
                  <Icon icon="ic:sharp-double-arrow" className='flex-1 h-[100%]' style={{transform:'scaleX(-1)'}} /> Back
                  </Link>
                </div>

                <div className='lg:col-span-2'>
                <Gallery />
                </div>
                <div className='lg:col-span-1 grid grid-cols-2'>
                    <div className='m-[10px]'>Name:</div><div className='m-[10px]'>{view.name}</div>
                    <div className='m-[10px]'>Price:</div><div className='m-[10px]'>{view.price}</div>
                    <div className='m-[10px]'>Size:</div><div className='m-[10px]'>{view.size}</div>
                    <div className='m-[10px]'>Color:</div><div className='m-[10px]'>{view.color}</div>
                    <div className='col-span-2 grid grid-cols-7 w-[100%] h-[4vh] align-center justify-center m-[10px]'>
                        <Icon icon="mdi:add-box" className='col-span-1 flex h-[4vh] w-[65px]'/>
                            <input type='number' defaultValue='1' className='col-span-5 flex w-[100%] text-center'/>
                        <Icon icon="mdi:minus-box" className='col-span-1 flex h-[4vh] w-[65px]'/>
                    </div>
                    <div className='flex w-[100%] align-center justify-center item-center w-[100%] m-[10px] col-span-2'>
                            <Icon icon="fa-solid:cart-plus" className='text-2xl'/>
                    </div>
                    <div className='col-span-2 grid grid-row w-[100%] h-[5vh] align-center justify-center m-[10px]'>
                        <Share></Share>
                    </div>
                </div>
                <div className='flex lg:col-span-3 bg-[#f1f1f1] h-[5vh]'></div>
                <div className='flex lg:col-span-3 px-3 border-t-4 border-b-4 border-solid border-lime-700 flex-row items-center  bg-lime-600 h-[5vh]'>
                Store Details
                </div>
                <div className='flex lg:col-span-3 m-3 w-[100%]'>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className='flex lg:col-span-3 px-3 border-t-4 border-b-4 border-solid border-lime-700 flex-row items-center  bg-lime-600 h-[5vh]'>
                Product Details
                </div>
                <div className='flex lg:col-span-3 m-3 w-[100%]'>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className='flex lg:col-span-3 px-3 border-t-4 border-b-4 border-solid border-lime-700 flex-row items-center  bg-lime-600 h-[5vh]'>
                Product Review
                </div>
                <div className='flex lg:col-span-3 m-3 w-[100%]'>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
            <div className="col-span-1 bg-[#f1f1f1]">
                <div className='flex flex-1 p-2 border-t-4 border-b-4 border-solid border-lime-700 flex-row align-center bg-lime-600 h-[5vh]'>
                Related Product
                </div>
                
            </div>
          </div>
        ))}
      </div>
  )
}

export default ProductView