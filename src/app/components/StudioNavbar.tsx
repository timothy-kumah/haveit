import Link from 'next/link'
import React from 'react'
import { IoReturnDownBack } from 'react-icons/io5'

const StudioNavbar = (props:any) => {
  return (
    <div>
        <div className="p-5 bg-blue text-red-00 items-center justify-between">
            <Link className='flex items-center gap-3 font-semibold hover:text-blue-400 
                duration-200' href={'/'}>
                <IoReturnDownBack className='text-5xl'></IoReturnDownBack>
                Go to Website
            </Link>
        </div>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar