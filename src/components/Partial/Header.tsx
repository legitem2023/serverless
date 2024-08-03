import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'
import navigation from '../../../json/navigation.json'
import useCollapse from '../../../store/useCollapse';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Header: React.FC = () => {
 const {status,setOn,setOff} = useCollapse();

  const handle = (e:any) =>{
    const data:boolean = e.target.checked;
    data===true?setOn():setOff();
  }
  const router = useRouter();
let pathName = router.pathname;
  return (
    <nav className='flex flex-wrap flex-row h-[8vh] w-[100vw] lg:w-[100vw]'>
    <div className='grid grid-cols-9 w-[100%]'>
      {/* <div className='lg:col-span-2 col-span-2 logo'></div> */}
       <label htmlFor='sideCollapser' className='lg:col-span-2 col-span-2 logo'>
           {/* <Icon icon="icon-park-outline:hamburger-button" className='w-[100%]'/> */}
          <input type="checkbox" defaultChecked={status} id='sideCollapser' onChange={(e:any)=>handle(e)} className="hidden"/>
      </label>
    {navigation.map((item, idx) => (
      <Link href={"/"+item.Link} key={idx} className='transition ease-in-out duration-500 col-span-1 flex flex-col justify-center item-center p-2 hover:bg-lime-400 cursor-pointer h-[8vh]'>
        <Icon icon={item.icon} className='w-[100%] h-[30px] text-lime-950'/>
        <div className='hidden'><span className='w-[100%] flex justify-center'>{item.Name}</span></div>
      </Link>
    ))}
      <div className='lg:col-span-2 col-span-2'></div>
    </div>
  </nav>
  )
}

export default Header