import React from 'react'
import Image from 'next/image'
export default function Cards() {
  return (
    <div className='bg-white  border-[1px] slate-500 shadow-lg rounded-lg hover:scale-105'>
        <div className="bg-white w-10 rounded-full shadow-lg mt-8 ml-5">
            <Image src='/Group 30.png' className='py-2 px-2'  width={60} height={60} />
        </div>
        <h1 className="text-3xl font-bold pt-8 pl-3">umar</h1>
        <p className="text-sm text-slate-600 pt-5 pl-3 pb-12">Lorem ipsum dolor sit amet adipcing
        aqua lorem ipsum.</p>
      
    </div>
  )
}
