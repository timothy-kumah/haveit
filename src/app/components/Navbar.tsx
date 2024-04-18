import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'


const Navbar = () => {
    const navigation = [
        {title:"Home",href:"/"},
        {title:"Features",href:"/features"},
        {title:"About",href:"/about"},
        {title:"Studio",href:"/studio"}
    ]
  return (
    <div className='w-full bg-white/70 text-ellipsis 
    backdrop-blur-2xl shadow-md h-20 sticky top-0 ba 
    transition-colors z-50'>
      <div className='flex justify-between mx-auto 
      max-w-screen-xl items-center px-4 lg:px-0 h-full'>
          <Logo title="Have it" className="text-blue-400"/>
          <div className='hidden md:inline-flex gap-7
           text-gray-900 hover:text-black duration-200'>
          {navigation.map((item)=>(
            <Link className="overflow-hidden text-sm 
            uppercase font-semibold relative group" key={item?.title} href={item?.href}>
              {item?.title}
              <span className='w-full h-[1px] bg-blue-700 absolute inline-block 
              left-0 bottom-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform 
              duration-200'/>
            </Link>
          ))}
          </div>
          <div className='md:hidden'>
            <FiMenu className='text-2xl'/>
          </div>
      </div>
    </div>
  )
}

export default Navbar