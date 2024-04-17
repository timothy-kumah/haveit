import React from 'react'
import Logo from './logo'
import Link from 'next/link'


const Navbar = () => {
    const navigation = [
        {title:"Home",href:"/"},
        {title:"Features",href:"/features"},
        {title:"About",href:"/about"},
        {title:"Studio",href:"/studio"}
    ]
  return (
    <div className='w-full shadow-sm text-ellipsis ' >
        <div>
            <Logo title="Have it" className="text-blue-400"/>
            {navigation.map((item)=>(
              <Link key={item?.title} href={item?.href}>
                {item?.title}
              </Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar