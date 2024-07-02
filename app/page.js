import Image from 'next/image';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import Button from './components/button/Button';
import Cards from './components/cards/Cards';

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
            <Button />
          </div>
        </div>
      </div>

      <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-10 pt-14  md:px-24 sm:px-10 mb-16">
        <div className="">
          <Image src='/soldier.png' className='w-full h-[348px] mt-10' width={400} height={400} />
        </div>
        <div className=" mt-5 relative sm:top-28 md:top-0  left-0">
          <h1 className="text-black text-3xl font-bold pt-12  pr-6 ">Sambutan Kepala Sekolah
            SMP Negeri 1 Cibadak</h1>
          <p className="text-black text-sm pt-12">Puji dan syukur mari kita panjatkan kehadirat Allah SWT. Yang senantiasa dengan sifat kasih dan sayangnya banyak memberikan nikmat  ...</p>
          <div className="pt-12">
            <Button />

          </div>
        </div>

      </div>

      <div className="bg-[rgb(249,252,253)]">
        <div className="">
          <h1 className="">
            Profil Sekolah
          </h1>
          <p className="">
          Di samping adalah profil sekolah kami secara
keseluruhan dari mulai bagian depan hingga seluruh
fasilitas yang terdapat disekolah kami kami akan ...
          </p>
          <Button/>
        </div>
        <div className="">
          <Cards/>
        </div>
      </div>




    </div>
  );
}
