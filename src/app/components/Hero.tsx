import Image from "next/image"
import banner from '@/images/banner.jpg'
const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
        <Image src={banner} 
        alt="banner image" 
        className="w-full max-h-screen object-contain"/>
        <div className="absolute top-0 w-full h-full bg-black/30">
            <h2>Some Random Blog</h2>
            <p></p>
        </div>
    </div>
  )
}

export default Hero