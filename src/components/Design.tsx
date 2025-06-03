import React from 'react'

const Design = () => {
    return (
        <div>
            <div className='flex md:flex-row flex-col gap-3 mx-4 md:px-12 my-20 '>
                <div className=' md:w-[50vw] bg-[#004D43] rounded-2xl md:h-[20vw] w-full min-[500px]:h-[40vw] z-0 max-[500px]:h-[22rem] relative'>
                    <div className=' w-full h-full rounded-2xl flex items-center justify-center'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" className='max-[500px]:w-[16vw] min-[500px]:w-[10vw]' />
                    </div>
                    <button className='absolute text-[#CDEA68] border-[#CDEA68] border-2 px-5 py-1 max-[1557px]:text-[1vw] max-[768px]:text-[2.5vw] max-[500px]:text-[3.7vw] rounded-full z-10 bottom-2 left-4 min-[1557px]:text-[1vw]'>@2019-2022</button>
                </div>
                <div className='flex gap-3 max-[500px]:flex-col min-[500px]:flex-row'>

                    <div className='bg-[#212121] md:w-[25vw] md:h-[20vw] w-full min-[500px]:h-[40vw] max-[500px]:h-[22rem] rounded-2xl relative'>
                        <div className='w-full h-full flex items-center justify-center'>
                            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" className='max-[500px]:w-[16vw]  min-[500px]:w-[10vw]' />
                        </div>
                        <button className='absolute text-[#FFF] border-[#FFF] border-2 px-5 py-1 max-[1557px]:text-[1vw] max-[768px]:text-[2.5vw] max-[500px]:text-[3.7vw] rounded-full z-10 bottom-2 left-4 min-[1557px]:text-[1vw]'>RATING 5.0 ON CLUTCH</button>
                    </div>
                    <div className='bg-[#212121] md:w-[25vw] md:h-[20vw] w-full min-[500px]:h-[40vw] max-[500px]:h-[22rem] rounded-2xl relative '>
                        <div className='flex items-center justify-center w-full h-full'>
                            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='max-[500px]:w-[16vw]  min-[500px]:w-[10vw]' alt="" />
                        </div>
                        <button className='absolute text-[#FFF] border-[#FFF] border-2 px-5 py-1 max-[1557px]:text-[1vw] max-[768px]:text-[2.5vw] max-[500px]:text-[3.7vw] rounded-full z-10 bottom-2 left-4 min-[1557px]:text-[1vw]'>RATING 5.0 ON CLUTCH</button>
                    </div>
                </div>
            </div>
            <div className='w-full h-[0.1rem] bg-black my-10' />
        </div>
    )
}

export default Design;
