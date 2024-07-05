import Image from 'next/image';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import Button from './components/button/Button';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';
import 'animate.css';
export default function Home() {
  return (
    <div>
      <div className="background">
        <Navbar />
        <div className="md:px-24 sm:px-6  ">
          <p className="text-sm text-white font-thin pt-20 animate__animated animate__zoomIn">MOTTO</p>
          <h1 className="md:text-3xl sm:text-2xl text-white font-bold pt-9 animate__animated animate__zoomIn">
            SMP N 1 Cibadak (Cerdas Beretika) Ceria, Empati, <br />
            Rasional, Damai, Aktif, Sabar, Bersih, Elok, Tulus, Iman,<br />
            Konsiste, Amanah.
          </h1>
          <div className="pt-20
          sm:pt-14 sm:mb-6 md:mb-10 animate__animated animate__zoomIn"  >
            <Button title='Contact Us' />
          </div>
        </div>
      </div>

      <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-20 pt-14  md:px-24 sm:px-10 mb-16">
        <div className="animate__animated animate__fadeInLeft">
          <Image src='/soldier.png' className='w-full h-[348px] mt-10 ' width={400} height={400} />
        </div>
        <div className=" mt-5 relative sm:top-0 md:top-0  left-0 animate__animated animate__fadeInRight">
          <h1 className="text-black text-3xl font-bold pt-12  pr-6 ">Sambutan Kepala Sekolah
            SMP Negeri 1 Cibadak</h1>
          <p className="text-black text-sm pt-12">Puji dan syukur mari kita panjatkan kehadirat Allah SWT. Yang senantiasa dengan sifat kasih dan sayangnya banyak memberikan nikmat  ...</p>
          <div className="pt-12">
            <Button title='Lebih Lanjut' />

          </div>
        </div>

      </div>

      <div className="bg-[rgb(249,252,253)] grid md:grid-cols-2 sm:grid-cols-1 gap-10 pt-12 md:px-24 sm:px-10">
        <div className=" animate__animated animate__zoomIn">
          <h1 className="text-3xl font-bold md:pt-44 sm:pt-20">
            Profil Sekolah
          </h1>
          <p className="pt-5">
            Di samping adalah profil sekolah kami secara
            keseluruhan dari mulai bagian depan hingga seluruh
            fasilitas yang terdapat disekolah kami kami akan ...
          </p>
          <div className="pt-7">

            <Button title='Lebih Lanjut' />

          </div>
        </div>
        <div className="grid md:grid-cols-2  gap-10  animate__animated animate__zoomIn">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>

      <div className="md:px-24 sm:px-10">
        <h1 className="text-2xl font-bold pt-10">Gallery</h1>
        <div className="grid md:grid-cols-3 gap-10 mt-5 sm:grid-cols-1">
          <Image src='/Mask Group-1.png' className='w-full hover:scale-105  animate__animated animate__zoomIn ' width={200} height={200} />
          <Image src='/Mask Group-2.png' className='w-full hover:scale-105  animate__animated animate__zoomIn' width={200} height={200} />
          <Image src='/Mask Group-3.png' className='w-full hover:scale-105  animate__animated animate__zoomIn' width={200} height={200} />
          <Image src='/Mask Group.png' className='w-full hover:scale-105  animate__animated animate__zoomIn' width={200} height={200} />
          <Image src='/Rectangle 7.png' className='w-full hover:scale-105  animate__animated animate__zoomIn' width={200} height={200} />
          <Image src='/Rectangle 8.png' className='w-full hover:scale-105  animate__animated animate__zoomIn' width={200} height={200} />
        </div>
      </div>
      <Footer />




    </div>
  );
}
