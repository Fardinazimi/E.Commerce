import React from 'react'
import { assets } from '../assets/assets'
// import Hero from "../components/Hero"
const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>

            {/* Hero left side  */}
            <div className=' w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>

                    <div className='flex items-center gap-2'>

                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'> OUR BESTSELLERS</p>
                    </div>
                    <h1 className=".merriweather-regular text-3xl sm:py-3 l:text-5xl leading-relaxed">
                        Latest Arrivals
                    </h1>
                    <div className='flex item-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[2px] mt-3  bg-[#414141]'></p>
                    </div>


                </div>

            </div>
            {/* Hero right side */}
            {/* <img src={assets.hero_img} className='w.full sm:w-1/2' alt="" /> */}

            <img src={assets.hero1} className='w.full sm:w-1/2' alt="" />
            {/*  i added the Top image  */}


        </div>
    )
}

export default Hero