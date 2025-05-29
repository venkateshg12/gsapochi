import React from 'react'

const Featured = () => {
    return (
        <div>
            <h1 className='pt-10 font-neue-montreal md:text-5xl text-[5vw] px-4 md:px-10 '>Featured Projects</h1>
            <div className='w-full h-[0.1rem] bg-zinc-900 my-10 ' />
            <div className='p-0  md:p-10'>
                <div className="cards w-full h-full flex flex-col md:flex-row  gap-10 md:gap-10 pb-10">
                    <div className='cardContainer md:w-1/2 w-[95vw] mx-auto'>
                        <div className='flex items-center gap-2 pb-5 relative'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-neue-montreal'>SALIENCE LABS</span></div>
                        <div className='flex flex-col gap-7'>
                            <div className="card relative w-full h-full mx-auto">
                                <span className='absolute text-[9vw] font-grotesk top-1/2 z-50 translate-x-[65%]  text-[#CDEA68] md:translate-x-[50%] md:right-0 -translate-y-[50%]'>
                                {"SALIENCE LABS".split("").map((item, index) => (<span key={index}>{item}</span>))}</span>
                                <img src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" className='w-full rounded-3xl' />
                            </div>
                            <div className='flex gap-2'>
                                <button className='btn'>BRAND IDENTITY</button>
                                <button className='btn'>PITCH DESK</button>
                            </div>
                        </div>
                    </div>
                    <div className='cardContainer md:w-1/2 w-[95vw] mx-auto pb-10'>
                        <div className='flex items-center gap-2 pb-5'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-neue-montreal'>CARDBOARD SPACESHIP</span>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <div className="card w-full h-full rounded-3xl mx-auto relative">
                                <span className="absolute text-[9vw] whitespace-nowrap font-grotesk top-1/2 z-50 translate-x-[25%] -translate-y-[50%] md:-translate-x-[50%] text-[#CDEA68] md:left-0 ">
                                {"CARDBOARD SPACESHIP".split("").map((item, index) => (<span key={index}>{item}</span>))}</span>
                                <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" className='w-full rounded-3xl' />
                            </div>
                            <div className='flex gap-2 flex-wrap'>
                                <button className='btn'>BRANDED TEMPLATE</button>
                                <button className='btn'>SALES DECK</button>
                                <button className='btn'>SOCIAL MEDIA TEMPLATES</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards w-full h-full flex flex-col md:flex-row gap-10 md:gap-10 pb-10">
                    <div className='cardContainer md:w-1/2 w-[95vw] mx-auto  '>
                        <div className='flex items-center gap-2 pb-5'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-neue-montreal'>AH2 & Matt Horn</span></div>
                        <div className='flex flex-col gap-7'>
                            <div className="card w-full h-full mx-auto relative">
                                <span className='absolute text-[9vw] font-grotesk top-1/2 z-50 translate-x-[50%]  text-[#CDEA68] md:translate-x-[50%] md:right-0 -translate-y-[50%] uppercase  whitespace-nowrap'>
                                {"AH2 & MATT  HORN".split("").map((item, index) => (<span key={index}>{item}</span>))}</span>
                                <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" className='w-full rounded-3xl' />
                            </div>
                            <div className='flex gap-2'>
                                <button className='btn'>PITCH DESK</button>
                            </div>
                        </div>
                    </div>
                    <div className='cardContainer md:w-1/2 w-[95vw] mx-auto'>
                        <div className='flex items-center gap-2 pb-5'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-neue-montreal'>FYDE</span>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <div className="card w-full h-full rounded-3xl mx-auto relative">
                                <span className="absolute text-[9vw] whitespace-nowrap font-grotesk top-1/2 z-50 left-1/2 -translate-x-[70%] -translate-y-[50%] md:-translate-x-[50%] text-[#CDEA68] md:left-0 ">
                                {"FYDE".split("").map((item, index) => (<span key={index}>{item}</span>))}</span>
                                <img src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="" className='w-full rounded-3xl' />
                            </div>
                            <div className='flex gap-2 flex-wrap'>
                                <button className="btn">AUDIT</button>
                                <button className="btn">COPYWRITING</button>
                                <button className="btn">SALES DECK</button>
                                <button className="btn">SLIDES DESIGN</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards w-full h-full flex flex-col md:flex-row gap-10 md:gap-10 pb-10">
                    <div className='cardContainer md:w-1/2 w-[95vw] mx-auto'>
                        <div className='flex items-center gap-2 pb-5'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-neue-montreal'>VISE</span></div>
                        <div className='flex flex-col gap-7'>
                            <div className="card w-full h-full mx-auto relative">
                                <span className='absolute text-[9vw] font-grotesk top-1/2 z-50 right-1/2 translate-x-[50%]  text-[#CDEA68] md:translate-x-[50%] md:right-0 -translate-y-[50%] uppercase  whitespace-nowrap'>
                                {"VISE".split("").map((item, index) => (<span key={index}>{item}</span>))}</span>
                                <img src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt="" className='w-full rounded-3xl' />
                            </div>
                            <div className='flex gap-2 flex-wrap'>
                                <button className="btn">AGENCY</button>
                                <button className="btn">COMPANY PRESENTATION</button>
                            </div>
                        </div>
                    </div>
                    <div className='cardContainer md:w-1/2 w-[95vw] mx-auto'>
                        <div className='flex items-center gap-2 pb-5'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-neue-montreal'>BLACK BOOK</span>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <div className="card w-full h-full rounded-3xl mx-auto relative">
                                <span className="absolute text-[9vw] whitespace-nowrap font-grotesk top-1/2 z-50 left-1/2 -translate-x-[50%] -translate-y-[50%] md:-translate-x-[50%] text-[#CDEA68] md:left-0 ">
                                {"BLACK BOOK".split("").map((item, index) => (<span key={index}>{item}</span>))}</span>
                                <img src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg" alt="" className='w-full rounded-3xl' />
                            </div>
                            <div className='flex gap-2 '>
                                <button className="btn">INVESTOR DECK</button>
                                <button className="btn">REDESIGN</button>
                                <button className="btn">REVIEW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[0.1rem] bg-zinc-900 my-10 ' />
        </div>
    )
}

export default Featured;
