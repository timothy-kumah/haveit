import React from 'react'
import Container from './container'
import Link from 'next/link'
import Logo from './logo'
import { BsFacebook, BsYoutube } from 'react-icons/bs'

const footer = () => {
  return (
    <Container className='p-10 bg-black text-gray-100 
    flex justify-between items-center'>
        <Logo title = "Have it" className="text-white"/>
        <div>
            <Link href="#">
            <BsFacebook className='hover:text-blue-500 duration-200'/>
            </Link>
        </div>
        <p className='text-sm'>&copy; All rights reserved{" "}<Link href="#" target ="blank" className="hover:text-white
         font-semibold duration-200">@somename</Link></p>
    </Container>
  )
}

export default footer