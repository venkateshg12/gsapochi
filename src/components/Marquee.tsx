import { motion } from 'framer-motion';
const Marquee = () => {
  return (
    <div className='pt-10' data-scroll data-scroll-section data-scroll-speed=".3">
      <div className='bg-[#004D43]  py-20  rounded-2xl text-white w-full'>
        <div className='border-t border-b border-gray-300 flex  whitespace-nowrap overflow-hidden uppercase'>
          <div className='flex'>
            <motion.h1 initial= {{x : 0}} animate={{x : "-100%"}} transition={{repeat: Infinity , ease:"linear", duration:5 }}  className='classy'>We are ochi&nbsp;</motion.h1>
            <motion.h1 initial= {{x : 0}} animate={{x : "-100%"}} transition={{repeat: Infinity , ease:"linear", duration:5 }}  className='classy'>We are ochi&nbsp;</motion.h1>
            <motion.h1 initial= {{x : 0}} animate={{x : "-100%"}} transition={{repeat: Infinity , ease:"linear", duration:5 }}  className='classy'>We are ochi&nbsp;</motion.h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marquee;
