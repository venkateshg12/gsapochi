import { Logo } from '../constants';

const Footer = () => {
    return (
        <div className='flex max-[900px]:h-h-full   max-[900px]:flex-col min-[900px]:flex-row max-[900px]:gap-[2rem] mb-10 min-[900px]:h-screen w-full min-[900px]:px-12 max-[900px]:px-2  justify-between relative'>
            <div >
                <h1 className='font-grotesk min-[1303px]:text-[8vw] max-[900px]:leading-[3rem] max-[900px]:text-[4.5rem] max-[1303px]:text-[8vw] uppercase max-[1303px]:leading-[6vw] min-[1303px]:leading-[6vw]'>  eye-<br />opening</h1>
            </div>
            <div>
                <h1 className='font-grotesk min-[1303px]:text-[8vw] -mt-[5rem] py-10 max-[900px]:text-[4.5rem]  max-[1303px]:text-[8vw]'>PRESENTATIONS</h1>
                <div className='flex  font-neue-montreal max-[900px]:text-[1.6rem] max-[1303px]:text-[2vw] min-[1303px]:text-[1.3vw]'>
                    <div className='space-x-7'>
                        <h1>S:</h1>
                        <div className='flex flex-col underline gap-1'>
                            {
                                ["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => (
                                    <h1 key={index} className='cursor-pointer'>{item}</h1>
                                ))
                            }
                        </div>
                        <h1 className='py-5'>L:</h1>
                        <div className='flex flex-col underline font-neue-montreal'>
                            <span>202-1965 W 4th Ave</span>
                            <span>Vancouver, Canada</span>
                            <span className='pt-5'>30 Chukarina St</span>
                            <span>Lviv, Ukraine</span>
                        </div>
                        <h1 className='py-5'>E:</h1>
                        <div className='flex  flex-col underline'>
                            <span>hello@ochi.design</span>
                        </div>
                    </div>
                    <div className='flex flex-col min-[900px]:mt-auto  ml-auto'>
                        <h1>M:</h1>
                        <div className='flex flex-col gap-1 underline font-neue-montreal'>
                            {
                                ["Home", "Services", "Our work", "About us", "Insights", "Contact us"].map((item, index) => (
                                    <h1 key={index} className='cursor-pointer'>{item}</h1>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute min-[900px]:static hidden bottom-10 left-10'>
                <Logo />
            </div>
        </div>
    )
}

export default Footer;
