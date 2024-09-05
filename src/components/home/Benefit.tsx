import React from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import Image from 'next/image';
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import { BENEFIT_ITEMS } from '@/utils/Helper';
interface BenefitItem {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
}

const Benefit: React.FC = () => {
    return (
        <div className='relative' id='benefit'>
            <div className='container'>
                <div className='flex justify-center pt-[160px] max-lg:pt-[100px] max-xl:pt-[80px] max-md:pt-[80px] max-sm:pt-[71px]'>
                    <PrimaryHeading text='Benefit from the Power of Choice. Built for Startups, SMEs & Enterprise' className='text-center text-offGreen max-w-[808px]' />
                </div>
                <div className='flex gap-6 max-sm:gap-[27px] max-xl:flex-wrap justify-center max-sm:pt-[41px] pt-[60px]'>
                    <div className='flex gap-6 max-md:flex-wrap w-full justify-center'>
                        {BENEFIT_ITEMS.map((item: BenefitItem, idx) => (
                            <div key={idx} className='min-h-[429px] max-sm:min-h-[379px] max-sm:max-w-[286px] px-5 hover:bg-[#7A9E9F] hover:border-[#7A9E9F] duration-500 group w-full max-w-[364px] border-[1px] border-[#D3D6D6] rounded-lg text-center flex justify-center'>
                                <div className='flex flex-col'>
                                    <div className='pt-2 max-sm:pt-5 max-w-[310px]'>
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className="w-full pointer-events-none"
                                            width={178}
                                            height={193}
                                            priority
                                        />
                                    </div>
                                    <h3 className='-mt-[70px] max-sm:-mt-[50px] font-semibold group-hover:text-white text-black leading-[34px] max-sm:text-lg max-sm:leading-6 text-[25px]'>
                                        {item.title}
                                    </h3>
                                    <PrimaryParagraph data={item.description} className='max-w-[310px] group-hover:text-white pt-[10px]' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Image
                src="/assets/images/webp/plus-ellips.webp"
                alt="Plus Ellipse"
                className="absolute pointer-events-none max-sm:left-[7px] max-sm:top-[157px] max-sm:w-[37px] max-sm:h-[42px] top-[178px] left-[60px]"
                width={66}
                height={78}
                priority
            />
            <Image
                src="/assets/images/webp/two-circle.webp"
                alt="Two Circle"
                className="absolute pointer-events-none bottom-[4px] max-sm:w-[44px] max-sm:h-[41px] max-sm:right-[3px] max-sm:bottom-[-60px] right-[35px]"
                width={66}
                height={78}
                priority
            />
        </div>
    );
};

export default Benefit;