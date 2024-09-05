import React from 'react'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Image from 'next/image'

const Commitment = () => {
    return (
        <div className='container pt-[216px] pb-[143px] max-sm:pt-[131px] max-md:pt-[160px] max-md:pb-[110px] max-lg:pt-[170px] max-lg:pb-[120px] max-sm:pb-[94px]'>
            <div className='flex justify-between max-lg:flex-wrap max-lg:justify-center items-center'>
                <div className='relative max-lg:hidden'>
                    <Image
                        src="/assets/images/webp/commitment-image.png"
                        alt="On-Demand"
                        className="z-30 relative"
                        width={489}
                        height={527}
                        priority
                    />
                    <Image
                        src="/assets/images/webp/commitment-ellips.png"
                        alt="On-Demand"
                        className="absolute top-[-40px] z-0 left-0 pointer-events-none"
                        width={489}
                        height={527}
                        priority
                    />
                </div>
                <div className='flex flex-col max-lg:text-center'>
                    <PrimaryHeading text='Commitment to Transparency' className='text-offGreen max-w-[448px]' />
                    <PrimaryParagraph data='Marketing platforms, and agencies, can inadvertently inflate your partnership costs by charging hidden fees. ' className='max-w-[404px] font-light pt-5 max-sm:pt-2' />
                    <PrimaryParagraph data='We’ve put a stop to that problem.' className='pt-3 font-light' />
                    <PrimaryParagraph data='With charge-free & efficient matchmaking, we ensure partnership costs are never more than they would have otherwise been, even if created directly or through referral.' className='max-w-[426px] pt-3 max-sm:pt-2 font-light' />
                </div>
                <div className='relative lg:hidden pt-10'>
                    <Image
                        src="/assets/images/webp/commitment-image.png"
                        alt="On-Demand"
                        className="z-30 relative"
                        width={489}
                        height={527}
                        priority
                    />
                    <Image
                        src="/assets/images/webp/commitment-ellips.png"
                        alt="On-Demand"
                        className="absolute top-[-40px] z-0 left-0 pointer-events-none"
                        width={489}
                        height={527}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default Commitment
