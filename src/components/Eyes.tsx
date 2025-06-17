import  { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setRotate] = useState<Number>(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
            console.log("only angle", angle);
            console.log("angle: ", angle - 180);


        })
    })
    return (
        <div>
            <div className='w-full max-[1304]:h-[55vh] min-[1304px]:h-screen overflow-hidden -py-20' data-scroll data-scroll-speed=".2" data-scroll-section>
                <div  className=' relative min-[1319px]:w-[85vw] h-full bg-cover bg-center max-[1319px]:w-[95vw] max-[1319px]:h-[95vw] md:-my-10  mx-auto bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                    <div className='absolute  w-[40vw] top-1/2 -translate-x-[50%] flex gap-7 justify-around left-1/2 -translate-y-[70%]'>
                        <div className='flex items-center justify-center w-[16vw] h-[16vw] relative bg-zinc-100 rounded-full'>
                            {/* <div className='w-[3vw] h-[3vw] md:h-[3rem]  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-red-800 '> */}
                            <div className='h-2/3 w-2/3 bg-zinc-900 rounded-full relative'
                            >
                                <div style={{ transform: ` rotate(${rotate}deg)` }} className='w-full h-[3vw] md:h-[3rem]   absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                    <div className='md:w-[2.5vw] md:h-[2.5vw] w-[3vw] h-[3vw] bg-white rounded-full'>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className='w-[16vw] h-[16vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                            <div className='h-2/3 w-2/3 bg-zinc-900 rounded-full relative'>
                                <div style={{ transform: `rotate(${rotate}deg)` }} className=' w-full h-[3vw] md:h-[3rem]  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                    <div className='w-[3vw] h-[3vw] md:w-[2.5vw] md:h-[2.5vw] bg-white rounded-full'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Eyes;
