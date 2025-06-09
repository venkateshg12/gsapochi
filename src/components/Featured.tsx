import { motion, useAnimation } from 'framer-motion';
import { img1, img2, LeftImage, RightImage } from '../constants';
import { useState } from 'react';
const Featured = () => {
    // const [isHovering, setIsHovering] = useState<boolean>(false);
    // const cards = [useAnimation(), useAnimation()];
    { /* const cards = Array(6).fill(null).map(() => useAnimation());
    const handleHover = (index: number) => {
        cards[index].start({ y: "0" });
    }
    const handleEnd = (index: number) => {
        cards[index].start({ y: "100%" });
    }*/}

    const cards: AnimationControls[] = Array(6).fill(null).map(() => useAnimation());

    const handleHover = (index: number): void => {
        cards[index].start({ y: "0" });
    };

    const handleEnd = (index: number): void => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div>
            <h1 className='pt-10 font-neue-montreal md:text-5xl text-[5vw] px-4 md:px-10 '>Featured Projects</h1>
            <div className='w-full h-[0.1rem] bg-zinc-900 my-10 ' />
            <div className='p-0  md:p-10'>
                <div className="cards">
                    <LeftImage title="SALIENCE LABS"
                        image={img1}
                        buttons={["BRAND IDENTITY", "PITCH DESK"]}
                        cardIndex={0}
                        handleHover={handleHover}
                        handleEnd={handleEnd}
                        cards={cards} />
                    <RightImage title="CARDBOARD SPACESHIP"
                        image={img2}
                        buttons={["BRANDED TEMPLATE", "SALES DECK", "SOCIAL MEDIA TEMPLATES"]}
                        cardIndex={1}
                        handleHover={handleHover}
                        handleEnd={handleEnd}
                        cards={cards} />
                </div>
                <div className="cards">
                    <LeftImage
                        title="AH2 & MATTHORN"
                        image="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                        buttons={["PITCH DESK"]}
                        cardIndex={2}
                        handleHover={handleHover}
                        handleEnd={handleEnd}
                        cards={cards}
                    />
                    <RightImage
                        title="FYDE"
                        image="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
                        buttons={["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"]}
                        cardIndex={3}
                        handleHover={handleHover}
                        handleEnd={handleEnd}
                        cards={cards}
                    />

                </div>
                <div className="cards">
                    <LeftImage
                        title="VISE"
                        image="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png"
                        buttons={["AGENCY", "COMPANY PRESENTATION"]}
                        cardIndex={4}
                        handleHover={handleHover}
                        handleEnd={handleEnd}
                        cards={cards}
                    />
                    <RightImage
                        title="BLACK BOOK"
                        image="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg"
                        buttons={["INVESTOR DECK", "REDESIGN", "REVIEW"]}
                        cardIndex={5}
                        handleHover={handleHover}
                        handleEnd={handleEnd}
                        cards={cards}
                    />
                </div>
            </div>
            <div className='w-full h-[0.1rem] bg-zinc-900 my-10 ' />
        </div >
        // </div >
        // </div >
    )
}

export default Featured;