import Image from "next/image"
import banner from '@/images/banner.jpg'
const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
        <Image src={banner} 
        alt="banner image" 
        className="w-full max-h-screen object-contain"/>
        <div className="absolute top-0 w-full h-full
         bg-black/30 flex flex-col items-center 
         justify-center text-gray-100">
            <h2 className="text-4xl md:text-7xl lg:text-[100px] font-bold">Some Random Blog</h2>
            <p className="text-lg md:text-2xl">Content Creator, Influencer</p>
        </div>
    </div>
  )
}

export default Hero