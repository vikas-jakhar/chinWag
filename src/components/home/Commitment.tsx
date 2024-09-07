import React from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import Image from 'next/image';

const Commitment: React.FC = () => {
    return (
        <div className='relative'>
            <div className='container pt-[145px] max-lg:pt-[100px] pb-[143px] max-sm:pt-[70px] max-md:pb-[110px] max-lg:pb-[120px] max-sm:pb-[94px]'>
                <div className='flex justify-between max-lg:flex-wrap max-lg:justify-center items-center'>
                    <div className='max-lg:hidden'>
                        <Image
                            src="/assets/images/webp/commitment-image.webp"
                            alt="Commitment Image"
                            className="z-30 relative pointer-events-none"
                            width={489}
                            height={527}
                            priority
                        />
                    </div>
                    <div className='flex flex-col max-lg:text-center'>
                        <PrimaryHeading text='Commitment to Transparency' className='text-offGreen max-w-[448px]' />
                        <PrimaryParagraph data='Marketing platforms, and agencies, can inadvertently inflate your partnership costs by charging hidden fees.' className='max-w-[404px] font-light pt-5 max-sm:pt-2' />
                        <PrimaryParagraph data='We’ve put a stop to that problem.' className='pt-3 font-light' />
                        <PrimaryParagraph data='With charge-free & efficient matchmaking, we ensure partnership costs are never more than they would have otherwise been, even if created directly or through referral.' className='max-w-[426px] pt-3 max-sm:pt-2 font-light' />
                    </div>
                    <div className='lg:hidden pt-10'>
                        <Image
                            src="/assets/images/webp/commitment-image.webp"
                            alt="Commitment Image"
                            className="z-30 relative max-sm:max-w-[319px] max-md:max-w-[400px]"
                            width={489}
                            height={527}
                            priority
                        />
                    </div>
                </div>
            </div>
            <Image
                src="/assets/images/webp/plus-ellips.webp"
                alt="Plus Ellipse"
                className="absolute max-sm:hidden top-[380px] right-[30px]"
                width={66}
                height={78}
                priority
            />
            <Image
                src="/assets/images/webp/two-circle.webp"
                alt="Two Circle"
                className="absolute top-[131px] pointer-events-none left-[10px] max-sm:w-[26px] max-sm:h-[26px]"
                width={66}
                height={78}
                priority
            />
            <Image
                src="/assets/images/webp/commitment-ellips.webp"
                alt="Commitment Ellipse"
                className="absolute top-[0px] left-[193px] max-lg:left-0 max-lg:top-[300px] z-0 pointer-events-none"
                width={489}
                height={527}
                priority
            />
        </div>
    );
};

export default Commitment;