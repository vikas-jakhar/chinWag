import React from 'react'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import Image from 'next/image'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'

const Benefit = () => {
    return (
        <div className=' relative'>
            <div className='container'>
                <div className='flex justify-center pt-[160px] max-lg:pt-[120px] max-md:pt-[80px] max-sm:pt-[71px]'>
                    <PrimaryHeading text='Benefit from the Power of Choice.
Built for Startups, SMEs & Enterprise' className='text-center text-Green max-w-[808px]' />
                </div>
                <div className='flex gap-6 max-sm:gap-[27px] max-xl:flex-wrap justify-center max-sm:pt-[41px] pt-[60px]'>
                    <div className='flex gap-6 max-md:flex-wrap w-full justify-center'>
                        <div className='min-h-[429px] max-sm:min-h-[379px] max-sm:max-w-[286px] px-5 hover:bg-[#7A9E9F] hover:border-[#7A9E9F] duration-500 group w-full max-w-[364px] border-[1px] border-[#D3D6D6] rounded-lg text-center flex justify-center'>
                            <div className='flex flex-col'>
                                <div className='pt-2 max-sm:pt-5'>
                                    <Image
                                        src="/assets/images/webp/on-demand.webp"
                                        alt="On-Demand"
                                        className="w-full pointer-events-none"
                                        width={183}
                                        height={192}
                                        priority
                                    />
                                </div>
                                <h3 className='-mt-[70px] max-sm:-mt-[50px] font-semibold group-hover:text-white text-black leading-[34px] max-sm:text-lg max-sm:leading-6 text-[25px]'>On-demand Talent </h3>
                                <PrimaryParagraph data='Review candidates and interview directly. Team extensions available from 1+ hires. Supercharge your growth with a flexible workforce' className='max-w-[310px] group-hover:text-white pt-[10px]' />
                            </div>
                        </div>
                        <div className='min-h-[429px] max-sm:min-h-[379px] max-sm:max-w-[286px] px-5 hover:bg-[#7A9E9F] hover:border-[#7A9E9F] duration-500 group w-full max-w-[364px] border-[1px] border-[#D3D6D6] rounded-lg text-center flex justify-center'>
                            <div className='flex flex-col'>
                                <div className='pt-2 max-sm:pt-5'>
                                    <Image
                                        src="/assets/images/webp/product-development.webp"
                                        alt="On-Demand"
                                        className="w-full pointer-events-none"
                                        width={178}
                                        height={193}
                                        priority
                                    />
                                </div>
                                <h3 className='-mt-[70px] max-sm:-mt-[50px] font-semibold group-hover:text-white text-black leading-[34px] max-sm:text-lg max-sm:leading-6 text-[25px]'>Product Development </h3>
                                <PrimaryParagraph data='Connect with the best available expertise for your current project. Save money and time with a partner who understands your product.' className='max-w-[310px] group-hover:text-white pt-[10px]' />
                            </div>
                        </div>
                    </div>
                    <div className='min-h-[429px] max-sm:min-h-[379px] max-sm:max-w-[286px] px-5 hover:bg-[#7A9E9F] hover:border-[#7A9E9F] duration-500 group w-full max-w-[364px] border-[1px] border-[#D3D6D6] rounded-lg text-center flex justify-center'>
                        <div className='flex flex-col'>
                            <div className='pt-2 max-sm:pt-5'>
                                <Image
                                    src="/assets/images/webp/service-teams.webp"
                                    alt="On-Demand"
                                    className="w-full pointer-events-none"
                                    width={178}
                                    height={193}
                                    priority
                                />
                            </div>
                            <h3 className='-mt-[70px] max-sm:-mt-[50px] font-semibold group-hover:text-white max-sm:text-lg max-sm:leading-6 text-black leading-[34px] text-[25px]'>Service Teams  </h3>
                            <PrimaryParagraph data='Benefit from expert team efficiency and keep your focus on task by outsourcing Lead Generation, Sales, HR, Marketing and more.' className='max-w-[310px] group-hover:text-white pt-[10px]' />
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src="/assets/images/webp/plus-ellips.webp"
                alt="On-Demand"
                className=" absolute top-[178px] left-[-60px] max-xl:left-3"
                width={66}
                height={78}
                priority
            />
        </div>
    )
}

export default Benefit
