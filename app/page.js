import Image from 'next/image';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import Button from './components/button/button';

export default function Home() {
  return (
    <div>
      <div className="background">
      <Navbar />
        <div className="md:px-24 sm:px-6">
          <p className="text-sm text-white font-thin pt-20">MOTTO</p>
          <h1 className="md:text-3xl sm:text-2xl text-white font-bold pt-9">
            SMP N 1 Cibadak (Cerdas Beretika) Ceria, Empati, <br />
            Rasional, Damai, Aktif, Sabar, Bersih, Elok, Tulus, Iman,<br />
            Konsiste, Amanah.
          </h1>
          <div className="pt-20
          sm:pt-14 sm:mb-6 md:mb-10"  >
            <Button/>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-[repeat(auto-fit,minmax(min(600px,100%),1fr))] pt-14 md:px-24 sm:px-10">
        <div className=" relative   ">
          <div className="absolute  top-64 z-0 ">
            <Image src='/dot.png' width={150} height={150}/>
          </div>

          <div className="absolute  top-5 left-7 z-10">

          <Image src='/soldier.png' className='' width={449} height={300}/>
          </div>

          <Image src='/Polygon 1.png '  className='absolute top-40 left-60 z-30 ' alt='polygon' width={25} height={25}/>
        
        </div>
        <div className=" mt-5 relative top-80 md:top-0  left-0">
          <h1 className="text-black text-3xl font-bold pt-12 pr-6 ">Sambutan Kepala Sekolah
          SMP Negeri 1 Cibadak</h1>
          <p className="text-black text-sm pt-12">Puji dan syukur mari kita panjatkan kehadirat Allah SWT. Yang senantiasa dengan sifat kasih dan sayangnya banyak memberikan nikmat  ...</p>
          <div className="pt-12">
          <Button/>

          </div>
        </div>

      </div>
    </div>
  );
}
