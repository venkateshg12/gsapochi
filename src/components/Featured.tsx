import { motion, useAnimation } from 'framer-motion';
const Featured = () => {
    // const [isHovering, setIsHovering] = useState<boolean>(false);
    // const cards = [useAnimation(), useAnimation()];
    const cards = Array(6).fill(null).map(() => useAnimation());
    const handleHover = (index: number) => {
        cards[index].start({ y: "0" });
    }
    const handleEnd = (index: number) => {
        cards[index].start({ y: "100%" });
    }

    return (
        <div>
            <h1 className='pt-10 font-neue-montreal md:text-5xl text-[5vw] px-4 md:px-10 '>Featured Projects</h1>
            <div className='w-full h-[0.1rem] bg-zinc-900 my-10 ' />
            <div className='p-0  md:p-10'>
                <div className="cards w-full h-full flex flex-col md:flex-row  gap-10 md:gap-10 pb-10">
                    <div className='cursor-pointer cardContainer md:w-1/2 w-[95vw] mx-auto'>
                        <div className='flex items-center gap-2 pb-5 relative'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-neue-montreal'>SALIENCE LABS</span></div>
                        <div className='flex flex-col gap-7'>
                            <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleEnd(0)} className="card relative w-full h-full mx-auto">
                                <div className='absolute text-[9vw] font-grotesk top-1/2 z-50 translate-x-[65%]  overflow-hidden text-[#CDEA68] md:translate-x-[50%] md:right-0 -translate-y-[50%]'>
                                    {"SALIENCE LABS".split("").map((item, index) => (<motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[0]}
                                        transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.08 }}
                                        key={index}
                                        className='inline-block '>{item}</motion.span>))}</div>
                                <img src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" className='w-full rounded-3xl' />
                            </motion.div>
                            <div className='flex gap-2'>
                                <button className='btn'>BRAND IDENTITY</button>
                                <button className='btn'>PITCH DESK</button>
                            </div>
                        </div>
                    </div>
                    <div className='cursor-pointer cardContainer md:w-1/2 w-[95vw] mx-auto pb-10'>
                        <div className='flex items-center gap-2 pb-5 relative'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-neue-montreal'>CARDBOARD SPACESHIP</span>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleEnd(1)} className="card w-full h-full  mx-auto  relative">
                                <div className="absolute overflow-hidden  text-[9vw] whitespace-nowrap font-grotesk top-1/2 z-50 translate-x-[25%] -translate-y-[50%] md:-translate-x-[50%] text-[#CDEA68] md:left-0 ">
                                    {"CARDBOARD SPACESHIP".split("").map((item, index) => (<motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.08 }}
                                        key={index}
                                        className='inline-block'>{item}</motion.span>))}</div>
                                <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" className='w-full rounded-3xl' />
                            </motion.div>
                            <div className='flex gap-2 flex-wrap'>
                                <button className='btn'>BRANDED TEMPLATE</button>
                                <button className='btn'>SALES DECK</button>
                                <button className='btn'>SOCIAL MEDIA TEMPLATES</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards w-full h-full flex flex-col md:flex-row gap-10 md:gap-10 pb-10">
                    <div className='  cardContainer md:w-1/2 w-[95vw] mx-auto  '>
                        <div className='flex items-center gap-2 pb-5'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-neue-montreal'>AH2 & Matt Horn</span></div>
                        <div className='flex flex-col gap-7'>
                            <motion.div onHoverStart={() => handleHover(2)} onHoverEnd={() => handleEnd(2)} className="cursor-pointer card w-full h-full mx-auto relative">
                                <div className='absolute text-[9vw] overflow-hidden  font-grotesk top-1/2 z-10 translate-x-[50%]  text-[#CDEA68] md:translate-x-[50%] md:right-0 -translate-y-[50%] uppercase  whitespace-nowrap'>
                                    {"AH2 & MATT  HORN".split("").map((item, index) => (<motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[2]}
                                        transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.08 }}
                                        className='inline-block'
                                        key={index}>{item}</motion.span>))}
                                </div>
                                <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" className='w-full rounded-3xl' />
                            </motion.div>
                            <div className='flex gap-2'>
                                <button className='btn'>PITCH DESK</button>
                            </div>
                        </div>
                    </div>
                    <div className='cursor-pointer cardContainer md:w-1/2 w-[95vw] mx-auto'>
                        <div className='flex items-center gap-2 pb-5 relative'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-neue-montreal'>FYDE</span>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <motion.div onHoverStart={() => handleHover(3)} onHoverEnd={() => handleEnd(3)} className="card w-full h-full rounded-3xl mx-auto relative">
                                <div className="absolute text-[9vw] overflow-hidden  whitespace-nowrap font-grotesk top-1/2 z-0 left-1/2 -translate-x-[70%] -translate-y-[50%] md:-translate-x-[50%] text-[#CDEA68] md:left-0 ">
                                    {"FYDE".split("").map((item, index) => (<motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[3]}
                                        transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.08 }}
                                        className='inline-block'
                                        key={index}>{item}</motion.span>))}</div>
                                <img src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="" className='w-full rounded-3xl' />
                            </motion.div>
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
                    <div className='cursor-pointer cardContainer md:w-1/2 w-[95vw] mx-auto'>
                        <div className='flex items-center gap-2 pb-5'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-neue-montreal'>VISE</span></div>
                        <div className='flex flex-col gap-7'>
                            <motion.div onHoverStart={() => handleHover(4)} onHoverEnd={() => handleEnd(4)} className="card w-full h-full mx-auto relative">
                                <div className='absolute text-[9vw] overflow-hidden font-grotesk top-1/2 z-50 right-1/2 translate-x-[50%]  text-[#CDEA68] md:translate-x-[50%] md:right-0 -translate-y-[50%] uppercase  whitespace-nowrap'>
                                    {"VISE".split("").map((item, index) => (<motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[4]}
                                        transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.08 }}
                                        className='inline-block'
                                        key={index}>{item}</motion.span>))}</div>
                                <img src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt="" className='w-full rounded-3xl' />
                            </motion.div>
                            <div className='flex gap-2 flex-wrap'>
                                <button className="btn">AGENCY</button>
                                <button className="btn">COMPANY PRESENTATION</button>
                            </div>
                        </div>
                    </div>
                    <div className='cursor-pointer cardContainer md:w-1/2 w-[95vw] mx-auto'>
                        <div className='flex items-center gap-2 pb-5'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-neue-montreal'>BLACK BOOK</span>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <motion.div onHoverStart={() => handleHover(5)} onHoverEnd={() => handleEnd(5)} className="  card w-full h-full rounded-3xl mx-auto relative">
                                <div className="absolute text-[9vw] overflow-hidden whitespace-nowrap font-grotesk top-1/2 z-0 left-1/2 -translate-x-[50%] -translate-y-[50%] md:-translate-x-[50%] text-[#CDEA68] md:left-0 ">
                                    {"BLACK BOOK".split("").map((item, index) => (<motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[5]}
                                        transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.08 }}
                                        className='inline-block'
                                        key={index}>
                                        {item}</motion.span>))}</div>
                                <img src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg" alt="" className='w-full rounded-3xl' />
                            </motion.div>
                            <div className='flex gap-2 flex-wrap '>
                                <button className="btn">INVESTOR DECK</button>
                                <button className="btn">REDESIGN</button>
                                <button className="btn">REVIEW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[0.1rem] bg-zinc-900 my-10 ' />
        </div >
    )
}

export default Featured;
