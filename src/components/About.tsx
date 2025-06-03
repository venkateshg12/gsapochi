import React from 'react'

const About = () => {
    return (
        <div >
            <div className='w-full py-20 bg-[#CDEA68] -mt-7 rounded-2xl min-h-screen'>
                <h1 className='font-neue-montreal pb-[7rem] px-4 text-[6.5vw] leading-[6vw] md:text-6xl md:leading-[4rem]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
                <div className='w-full h-[0.1rem] bg-gray-700' />
                <div className=' flex flex-col md:flex-row w-full justify-between py-20 md:px-20 px-5 max-[441px]:text-[5.5vw] md:text-[1.1rem] '>
                    <h1>What you can expect:</h1>
                    <div className='max-w-[20rem] space-y-[2rem] '>
                        <h1>We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</h1>
                        <h1>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
                    </div>
                    <div className='flex flex-col mt-auto'>
                        <h1>S:</h1>
                        <a href="">Instagram</a>
                        <a href="">facebook</a>
                        <a href="">Behance</a>
                        <a href="">Linkedin</a>
                    </div>
                </div>
                <div className='w-full h-[0.1rem] bg-gray-700' />
                <div className='w-full  pt-10 flex flex-col md:flex-row  gap-4  md:px-12  border-[#a1b562]'>
                    <div className='w-full px-8 space-y-4'>
                    <h1 className=' min-[1051px]:text-5xl max-[1051px]:text-[5vw] w-full'>Our Approach:</h1>
                    <button className='flex items-center w-[44vw] text-white py-3 px-7 justify-between text-[4vw] md:text-[1rem] md:w-[12rem]  rounded-full bg-zinc-900 font-neue-montreal'>READ MORE
                        <div className='w-3 h-3 rounded-full cursor-pointer bg-white'></div>
                    </button>
                    </div>
                    <div className='relative mx-auto'>
                    <div className='md:w-[45vw] w-[90vw] h-[65vw] rounded-2xl md:h-[30vw] bg-red-500'>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
