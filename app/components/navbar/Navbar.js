'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Guru', link: '/' },
    { name: 'Siswa', link: '/' },
    { name: 'Pendafteran', link: '/' },
    { name: 'Lainya', link: '/' },
    { name: 'Kontak', link: '/' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
      <div onClick={() => setOpen(!open)} className="absolute top-9 md:invisible sm:visible right-8 text-white text-3xl">
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
      <div className="md:flex items-center justify-between lg:px-24 md:px-16 sm:px-7 ">
        <Image src="/navImag.png" className='pt-4' width={50} height={60} alt="Description of image" />
        <ul className={`menu md:flex sm:pt-9 sm:pl-4 md:pl-0 sm:bg-[rgb(69,68,67)] md:bg-transparent sm:w-full md:w-auto sm:pb-4 absolute left-0 md:static md:z-auto transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'} `}>
          {links.map((link) => (
            <li key={link.name} className="text-white px-4 sm:py-2 hover:text-sky-200">
              <Link href={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
