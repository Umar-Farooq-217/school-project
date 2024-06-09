import Image from 'next/image'
import Navbar from './components/navbar/Navbar'
import bgImage from './../public/image 12.png'
export default function Home() {
  return (
    <div className="">
      <div className="" style={bgImage} >

      <Navbar/>
      </div>
      
    </div>
  )
}
