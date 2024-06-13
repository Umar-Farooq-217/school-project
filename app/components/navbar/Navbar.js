import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
  let links = [
    {name:'Home',link:'/'},
    {name:'About',link:'/'},
    {name:'Guru',link:'/'},
    {name:'Siswa',link:'/'},
    {name:'Pendafteran',link:'/'},
    {name:'Lainya',link:'/'},
    {name:'Kontak',link:'/'},
  ]
  return (
    <div>
      <div className="md:flex items-center justify-between md:px-24 pt-6">
        <Image src="/navImag.png" width={50} className='sm:pl-5' height={60}  alt="Description of image"  />
        <ul className="md:flex sm:pl-6">
          {
            links.map((link)=>(
              <li key={link.name} className="text-white px-4 hover:text-sky-200">
                <Link href={link.link}>
                {
                  link.name
                }
                </Link>
                
              </li>
            ))
          }

        </ul>
      </div>

      
    </div>
  )
}
