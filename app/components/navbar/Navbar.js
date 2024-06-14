'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
  let links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Guru', link: '/' },
    { name: 'Siswa', link: '/' },
    { name: 'Pendafteran', link: '/' },
    { name: 'Lainya', link: '/' },
    { name: 'Kontak', link: '/' },
  ]
  const menubar = ()=>{
    
  }

  return (
    <div>
      <div className="">
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div onClick={menubar} className="absolute top-9 md:invisible sm:visible right-4 text-white text-3xl">
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div className="md:flex items-center justify-between lg:px-24 md:px-16 sm:px-7 ">
        <Image src="/navImag.png" width={50} className='' height={60} alt="Description of image" />
        <ul className="md:flex sm:pt-5 sm:pb-4">
          {
            links.map((link) => (
              <li key={link.name} className="text-white px-4 sm:py-2 hover:text-sky-200">
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
