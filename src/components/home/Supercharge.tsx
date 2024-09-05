import React from 'react'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Image from 'next/image'

const Supercharge = () => {
    return (
        <div className='bg-[#7A9E9FD4] relative'>
            <div className='container pt-[169px] pb-[169px] max-md:pt-[90px] max-md:pb-[90px] max-lg:pt-[102px] max-lg:pb-[104px] max-sm:pb-14 max-sm:pt-11'>
                <div className='flex relative  lg:justify-between max-lg:flex-wrap lg:items-center justify-center max-lg:w-full'>
                    <div className=' flex flex-col max-lg:text-center max-lg:items-center'>
                        <PrimaryHeading text='Save on Cost.
Supercharge Your Growth' className='max-w-[568px] max-sm:max-w-[314px] text-white' />
                        <PrimaryParagraph data='Secure the best rates and get rewarded for on-time payments with 5% discount against your next invoice. The equivalent to 1 free days work, for 20 days paid.' className='max-w-[566px] text-white max-sm:pt-[10px] pt-[14px]' />
                        <button className='font-bold max-sm:mt-8 max-w-[155px] text-base leading-5 text-white rounded-[65px] bg-DarkGreen py-[15px] px-[27px] mt-[41px]'>Book a Demo</button>
                    </div>
                    <div className='lg:hidden'>
                        <div className='relative max-lg:pt-12'>
                            <div className=' w-full'>
                                <Image
                                    src="/assets/images/webp/supercharge-image.png"
                                    alt="On-Demand"
                                    className="z-30 relative"
                                    width={606}
                                    height={440}
                                    priority
                                />
                            </div>
                            <Image
                                src="/assets/images/webp/commitment-ellips.png"
                                alt="On-Demand"
                                className="absolute top-0 left-0 z-0"
                                width={421}
                                height={421}
                                priority
                            />
                        </div>
                    </div>
                    <div className='xl:absolute xl:top-[-60px] xl:right-[-36px]'>
                    <div className='relative max-lg:pt-12 max-lg:hidden'>
                        <div className=' w-full'>
                            <Image
                                src="/assets/images/webp/supercharge-image.png"
                                alt="On-Demand"
                                className="z-30 relative"
                                width={606}
                                height={440}
                                priority
                            />
                        </div>
                        <Image
                            src="/assets/images/webp/commitment-ellips.png"
                            alt="On-Demand"
                            className="absolute top-0 left-0 z-0"
                            width={421}
                            height={421}
                            priority
                        />
                    </div>
                </div>
                </div>
               
            </div>
            <Image
                src="/assets/images/webp/superchange-ellips.png"
                alt="On-Demand"
                className="absolute max-sm:hidden top-[51px] left-[30px]"
                width={66}
                height={78}
                priority
            />
             <Image
                src="/assets/images/webp/small-screenellips.png"
                alt="On-Demand"
                className="absolute sm:hidden max-sm:w-[36px] max-sm:h-[38px] top-[33px] left-[6px]"
                width={66}
                height={78}
                priority
            />
        </div>
    )
}

export default Supercharge
