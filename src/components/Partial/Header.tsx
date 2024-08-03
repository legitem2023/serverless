import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'
import navigation from '../../../json/navigation.json'
import useCollapse from '../../../store/useCollapse';
import { useRouter } from 'next/router';
const Header: React.FC = () => {
 const {status,setOn,setOff} = useCollapse();

  const handle = (e:any) =>{
    const data:boolean = e.target.checked;
    data===true?setOff():setOn();
  }
  const router = useRouter();
let pathName = router.pathname;
  return (
    <nav className='flex flex-wrap flex-row h-[8vh] w-[100vw] lg:w-[60vw]'>
      <div className='flex flex-wrap flex-row w-[100%]'>
      <label htmlFor='sideCollapser' className='transition ease-in-out duration-500 flex-1 flex flex-col justify-center align-center p-2 hover:bg-lime-400 cursor-pointer text-center'>
          <Icon icon="icon-park-outline:hamburger-button" className='w-[100%]'/>
          <input type="checkbox" defaultChecked={status} id='sideCollapser' onChange={(e:any)=>handle(e)} className="hidden"/>
      </label>
      {navigation.map((item, idx) => (
        <a href={"/"+item.Link} key={idx} className='transition ease-in-out duration-500 flex-1 flex flex-col justify-center align-center p-2 hover:bg-lime-400 cursor-pointer'>
          <div className='flex flex-col '><Icon icon={item.icon} className='w-[100%] h-[30px] text-lime-950'/></div>
          <div className='flex flex-col'><span className='w-[100%] flex justify-center'>{item.Name}</span></div>
        </a>
      ))}
      </div>
    </nav>

  )
}

export default Header