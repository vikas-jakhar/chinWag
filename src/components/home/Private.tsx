import React from 'react'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Image from 'next/image'
const Private = () => {
    return (
        <div className=''>
            <div className='container pt-[179px] max-sm:pt-[145px] max-md:pt-[150px] max-lg:pt-[160px]'>
                <div className='flex justify-between max-lg:flex-wrap w-full max-lg:justify-center lg:items-center'>
                    <div className='flex flex-col max-lg:text-center'>
                        <PrimaryHeading text='Stay Private. Stay in Control.' className='max-w-[397px] text-offGreen' />
                        <PrimaryParagraph data='Chin-wag empowers you with the ability to request information from the resource marketplace without revealing your Identity. ' className='max-w-[428px] font-light pt-5 max-sm:pt-[15px]' />
                        <PrimaryParagraph data='Review applications and schedule introductions with total discretion.' className='max-w-[428px] pt-4 max-sm:pt-2 font-light' />
                    </div>
                    <div>
                        <div className='max-lg:w-full relative z-30 max-lg:pt-[68px] flex max-lg:justify-center'>
                            <Image
                                src="/assets/images/webp/stay-private.webp"
                                alt="On-Demand"
                                className=" z-30 relative"
                                width={545}
                                height={477}
                                priority
                            />
                            <Image
                                src="/assets/images/webp/private-ellips.webp"
                                alt="On-Demand"
                                className="absolute bottom-[23px] max-sm:bottom-[-40px] w-full lg:right-[-40px] md:left-0 z-0"
                                width={545}
                                height={429}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Private
