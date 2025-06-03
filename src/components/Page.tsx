import { landItems } from "../constants";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

const Page = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2">
            {/* Hero Section */}
            <div className="border-b w-full">
                <div className="px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 
                               my-16 sm:my-20 md:my-24 lg:my-28 xl:my-32 
                               w-full">
                    {landItems.map((item, index) => (
                        <div key={index} className="masker">
                            <div className="w-fit flex items-center overflow-hidden">
                                {/* Animated red box for second item */}
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "auto" }}
                                        transition={{
                                            ease: [0.76, 0, 0.24, 1],
                                            duration: 1,
                                            delay: 0.5
                                        }}
                                        className="bg-red-400 mr-2 sm:mr-3 md:mr-4 
                                                   w-12 h-12 
                                                   sm:w-16 sm:h-16 
                                                   md:w-20 md:h-20 
                                                   lg:w-24 lg:h-24 
                                                   xl:w-28 xl:h-28 
                                                   2xl:w-32 2xl:h-32
                                                   rounded-md relative top-1 sm:top-2"
                                    />
                                )}

                                {/* Main heading text */}
                                <h1 className="font-grotesk font-bold tracking-wide
                                               text-[15vw] leading-[12vw]
                                               xs:text-[14vw] xs:leading-[11vw]
                                               sm:text-[13vw] sm:leading-[10vw]
                                               md:text-[11vw] md:leading-[9vw]
                                               lg:text-[9vw] lg:leading-[7vw]
                                               xl:text-[8vw] xl:leading-[6.5vw]
                                               2xl:text-[7vw] 2xl:leading-[5.5vw]
                                               min-[1600px]:text-[120px] min-[1600px]:leading-[100px]">
                                    {item}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-4 
                           sm:gap-5 
                           lg:flex-row lg:justify-between lg:items-center lg:gap-8
                           px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 
                           pt-6 sm:pt-8 md:pt-10 lg:pt-12
                           pb-4 sm:pb-6 md:pb-8
                           font-neue-montreal font-light">

                {/* Text Content */}
                <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:gap-8 xl:gap-12">
                    <h3 className="cursor-pointer text-sm sm:text-base md:text-lg 
                                   hover:text-gray-600 transition-colors duration-200">
                        For public and private companies
                    </h3>
                    <h3 className="cursor-pointer text-sm sm:text-base md:text-lg 
                                   hover:text-gray-600 transition-colors duration-200">
                        From the first pitch to IPO
                    </h3>
                </div>

                {/* CTA Section */}
                <div className="flex items-center gap-3 sm:gap-4 mt-2 lg:mt-0">
                    <button className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
                                       text-sm sm:text-base md:text-lg
                                       border-2 border-black rounded-full 
                                       hover:bg-black hover:text-white 
                                       transition-all duration-300 ease-in-out
                                       cursor-pointer">
                        Start the Project
                    </button>

                    <button className="rotate-45 border-2 border-black rounded-full 
                                       p-2 sm:p-2.5 md:p-3
                                       hover:bg-black hover:text-white hover:rotate-0
                                       transition-all duration-300 ease-in-out
                                       cursor-pointer">
                        <FaArrowUp className="text-sm sm:text-base md:text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;