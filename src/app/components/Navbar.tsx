import React from 'react'
import Logo from './logo'


const Navbar = () => {
    const navigation = [
        {title:"Home",href:"/"},
        {title:"Features",href:"/features"},
        {title:"About",href:"/about"},
        {title:"Studio",href:"/studio"}
    ]
  return (
    <div>
        <div>
            <Logo title="Have it" className="text-blue-400"/>
        </div>
    </div>
  )
}

export default Navbar