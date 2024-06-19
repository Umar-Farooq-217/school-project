import Image from 'next/image';
import Navbar from './components/navbar/Navbar';
import './globals.css';

export default function Home() {
  return (
    <div>
      <div className="background">
      <Navbar />
        <div className="md:px-24">
          <p className="text-sm text-white font-thin pt-20">MOTTO</p>
          <h1 className="text-3xl text-white font-bold pt-9">
            SMP N 1 Cibadak (Cerdas Beretika) Ceria, Empati, <br />
            Rasional, Damai, Aktif, Sabar, Bersih, Elok, Tulus, Iman,<br />
            Konsiste, Amanah.
          </h1>
          <button className="bg-[rgb(13,153,255)] py-2 px-9 text-white font-semibold mt-12">Contact us</button>
        </div>
      </div>
    </div>
  );
}
