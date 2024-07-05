import React from 'react'
import Image from 'next/image'
import 'animate.css';
export default function Footer() {
  return (
    <div>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 md:px-24 sm:px-10 gap-5 pt-16">
        <div className=" animate__animated animate__zoomIn">
            <Image src='/navImag.png' className='' width={40} height={40} />
            <p className="text-sm pt-5">Jl. Siliwangi No 123, Cibadak, Cibadak, Sukabumi,
            Jawa Barat 43351, Indonesia, (0266)531333</p>
            <p className="text-lg font-bold pt-8">
            smpn1cbd_kabsi@yahoo.co.id
            </p>
            <p className="text-lg font-bold">
            info@smpn1cibadak.sch.id
            </p>
        </div>
        <div className=" animate__animated animate__zoomIn">
            <h1 className="text-xl font-bold">
            Jelajah
            </h1>
            <h1 className="font-semibold pt-8">
            Sambutan
            </h1>
            <h1 className="font-semibold py-2">
            Profil Sekolah
            </h1>
            <h1 className="font-semibold py-2">
            Berita
            </h1>
            <h1 className="font-semibold py-2">
            Galeri            </h1>
           

        </div>
        <div className=" animate__animated animate__zoomIn">
            <h2 className="text-xl font-bold">Halaman Umum</h2>
            <p className="font-semibold py-2 pt-8">
            Data Guru
            </p>
            <p className="font-semibold py-2">
            PPDB SMPN 1 Cibadak
            </p>
            <p className="font-semibold py-2">
            Panduan PPDB
            </p>
            <p className="font-semibold py-2">
            Lokasi
            </p>
            <p className="font-semibold py-2">
            Kontak
            </p>
            
        </div>
        <div className=" animate__animated animate__zoomIn">
            <h1 className="text-xl font-bold">Social Media</h1>
            <div className="flex mt-5">
                <div className="border-slate border-[2px] rounded-lg w-7 h-7 flex justify-center items-center  "> 
                    <Image src='/Icon Instagram.svg' className='' width={10} height={10} />
                </div>
                <div className="border-slate border-[2px] w-7 h-7 ml-3 flex justify-center items-center rounded-lg "> 
                    <Image src='/Icon Facebook.svg' className='' width={8} height={8} />
                </div>
                <div className="border-slate border-[2px] w-7 h-7 ml-3 flex justify-center items-center  rounded-lg "> 
                    <Image src='/Icon Twitter.svg' className='' width={10} height={10} />
                </div>
                
            </div>
        </div>
        </div>

        <div className="h-[1px] bg-slate-300 sm:mx-10 md:mx-24 mt-5"></div>
        <p className=" font-semibold md:px-24 sm:px-10 mt-10 mb-10  animate__animated animate__zoomIn">Copyright © SMP Negeri 1 Cibadak. All right Reserved. Hosting By IDCloudHost</p>


    </div>
  )
}
