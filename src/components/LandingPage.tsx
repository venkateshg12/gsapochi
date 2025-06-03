import { landItems } from "../constants";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2">
            <div className=" border-b w-full">
                <div className="md:px-12 px-3 my-[18vh] md:my-[16vh]    w-full ">
                    {
                        landItems.map((item, index) => (
                            <>
                                <div className="masker">
                                    <div className="w-fit flex items-center overflow-hidden">
                                        {index === 1 && <motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay:0.5 }} className="bg-red-400 mr-[0.4vw] min-[689px]:w-[8rem] max-[689px]:w-[17vw] rounded-md max-[689px]:h-[13vw] min-[689px]:h-[5.2rem] top-[0.3rem] relative  "></motion.div>}
                                        <h1 key={index} className=" font-grotesk font-bold tracking-wide text-[18vw] max-[689px]:leading-[14vw]  min-[689px]:text-[8rem] min-[689px]:leading-[5.9rem] ">{item}</h1>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className="flex min-[940px]:justify-between gap-5 max-[940px]:flex-col max-[940px]:items-start min-[940px]:items-center px-3 md:px-8 pt-9 font-neue-montreal font-light ">
                <h3 className="cursor-pointer">For public and private companies</h3>
                <h3 className="cursor-pointer ">From the first pitch to IPO</h3>
                <div className="flex items-center gap-3">
                    <button className="px-4  py-2 border-2 border-black rounded-[12rem] cursor-pointer">Start the Project</button>
                    <span className="rotate-45 border-2 rounded-full p-3">
                        <FaArrowUp />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
