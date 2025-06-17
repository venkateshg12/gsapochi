import React, { useState } from 'react';
export const Logo = () => {
  return (
    <div>
      <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z" fill="currentColor"></path>
        <path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor"></path>
        <path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="currentColor"></path>
        <path d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z" fill="currentColor"></path>
        <path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z" fill="currentColor"></path>
      </svg>
    </div>
  )
}

export const navItems: String[] = ["Services", "Our Work", "About Us", "Insights", "Contact Us"];
export const landItems: String[] = ["WE CREATE", "EYE-OPENING", "PRESENTATIONS"];

export const img1 = "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png";
export const img2 = "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png";
export const img3 = "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png";
export const img4 = "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png";
export const img5 = "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png";
export const img6 = "https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg";



interface HamburgerMenuProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  size = 32,
  color = '#333',
  strokeWidth = 3,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className || "bg-gray-100"}`}>
      <button
        onClick={toggleMenu}
        className={`relative p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md transition-all duration-200 hover:bg-gray-200 ${className}`}
        style={{ width: size + 16, height: size + 16 }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="relative" style={{ width: size, height: size }}>
          {/* Top line */}
          <div
            className="absolute left-0 rounded-full transition-all duration-300 ease-in-out"
            style={{
              width: size,
              height: strokeWidth,
              backgroundColor: color,
              top: isOpen ? '50%' : '25%',
              transform: isOpen
                ? 'translateY(-50%) rotate(45deg)'
                : 'translateY(-50%) rotate(0deg)',
              transformOrigin: 'center'
            }}
          />

          {/* Bottom line */}
          <div
            className="absolute left-0 rounded-full transition-all duration-300 ease-in-out"
            style={{
              width: size,
              height: strokeWidth,
              backgroundColor: color,
              top: isOpen ? '50%' : '75%',
              transform: isOpen
                ? 'translateY(-50%) rotate(-45deg)'
                : 'translateY(-50%) rotate(0deg)',
              transformOrigin: 'center'
            }}
          />
        </div>
      </button>
    </div>
  );
};

export default HamburgerMenu;

import { motion } from 'framer-motion';

type CardAnimationState = {
  y?: string;
};

type props = {
  title: string,
  image: string,
  buttons: string[],
  cardIndex: number,
  handleHover: (cardIndex: number) => void;
  handleEnd: (cardIndex: number) => void;
  cards: CardAnimationState[];
}

export const LeftImage = ({ title, image, buttons, cardIndex, handleHover, handleEnd, cards }: props) => {
  return (
    <>
      <div className='cursor-pointer cardContainer md:w-1/2  w-[95vw] mx-auto'>
        <div className='flex items-center gap-2 pb-5 relative'>
          <div className='w-3 h-3 bg-black rounded-full'></div>
          <span className='font-neue-montreal whitespace-nowrap'>{title}</span></div>
        <div className='flex flex-col gap-7'>
          <motion.div onHoverStart={() => handleHover(cardIndex)} onHoverEnd={() => handleEnd(cardIndex)}
            className={`card relative w-full   h-full mx-auto`}
            whileHover={{
              scale: 0.99,
              y: [0, -10, 0],
              zIndex: 60,
              transition: {
                scale: { duration: 0.3 },
                y: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                },
              }
            }}
          >
            <motion.div className='absolute text-[8vw] font-grotesk top-1/2  translate-x-[65%]  overflow-hidden text-[#CDEA68] md:translate-x-[50%] md:right-0 -translate-y-[50%] pointer-events-none'
              initial={{ zIndex: 0 }}
              whileHover={{
                zIndex: 50,
                transition: { duration: 0 }
              }}
            >
              {title.split("").map((item, index) => (<motion.span
                initial={{ y: "100%", }}
                animate={cards[cardIndex]}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.03 }}
                key={index}
                className='inline-block pointer-events-none z-50'>{item}</motion.span>))}</motion.div>
            <img src={image} alt="" className='w-full rounded-3xl' />
          </motion.div>
          <div className='flex gap-2'>
            {buttons.map((button, index) => (
              <button key={index} className='btn'>
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const RightImage = ({ title, image, buttons, cardIndex, handleHover, handleEnd, cards }: props) => {
  return (
    <>
      <div className='cursor-pointer cardContainer md:w-1/2 w-[95vw] mx-auto pb-10'>
        <div className='flex items-center gap-2 pb-5 relative'>
          <div className='w-3 h-3 bg-black rounded-full'></div>
          <span className='font-neue-montreal'>{title}</span>
        </div>
        <div className='flex flex-col gap-7'>
          <motion.div onHoverStart={() => handleHover(cardIndex)} onHoverEnd={() => handleEnd(cardIndex)}
            className={`card w-full h-full  mx-auto  relative`}
            whileHover={{
              scale: 0.99,
              y: [0, -10, 0],
              zIndex: 60,
              transition: {
                scale: { duration: 0.3 },
                y: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                },
              }
            }}
          >
            <motion.div className="absolute overflow-hidden  text-[8vw] whitespace-nowrap font-grotesk top-1/2 z-50 translate-x-[25%] -translate-y-[50%] md:-translate-x-[50%] text-[#CDEA68] md:left-0 pointer-events-none"
              initial={{ zIndex: 0 }}
              whileHover={{
                zIndex: 50,
                transition: { duration: 0 }
              }}
            >
              {title.split("").map((item, index) => (<motion.span
                initial={{ y: "100%" }}
                animate={cards[cardIndex]}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.03 }}
                key={index}
                className='inline-block pointer-events-none z-50'>{item}</motion.span>))}</motion.div>
            <img src={image} alt="" className='w-full rounded-3xl' />
          </motion.div>
          <div className='flex gap-2 flex-wrap'>
            {buttons.map((button, index) => (
              <button key={index} className='btn'>
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}