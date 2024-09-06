import React from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import Image from 'next/image';
import PrimaryButton from '../custom-ui/PrimaryButton';

const Supercharge: React.FC = () => {
    return (
        <div className='bg-[#7A9E9FD4] relative'>
            <div className='container pt-[169px] pb-[169px] max-md:pt-[90px] max-md:pb-[90px] max-lg:pt-[102px] max-lg:pb-[104px] max-sm:pb-14 max-sm:pt-11'>
                <div className='flex relative lg:justify-between max-lg:flex-wrap lg:items-center justify-center max-lg:w-full'>
                    <div className='flex flex-col max-lg:text-center max-lg:items-center'>
                        <PrimaryHeading text='Save on Cost. Supercharge Your Growth' className='max-w-[568px] max-sm:max-w-[314px] text-white' />
                        <PrimaryParagraph data='Secure the best rates and get rewarded for on-time payments with a 5% discount on your next invoice. Equivalent to 1 free day of work for 20 days paid.' className='max-w-[566px] text-white max-sm:pt-[10px] pt-[14px]' />
                        <PrimaryButton hoverClass='bg-lightGreen' className='font-bold border-[1px] border-transparent hover:border-lightGreen max-sm:mt-8 max-w-[155px] text-base leading-5 text-nowrap text-white rounded-[65px] bg-darkGreen py-[15px] px-[27px] mt-[41px]' text='Book a Demo' />
                    </div>
                    <div className='relative lg:hidden'>
                        <Image
                            src="/assets/images/webp/Supercharge-image.webp"
                            alt="Supercharge Image"
                            className="relative z-30 pointer-events-none"
                            width={606}
                            height={440}
                            priority
                        />
                        <Image
                            src="/assets/images/webp/commitment-ellips.webp"
                            alt="Commitment Ellipse"
                            className="absolute top-0 left-0 z-0 pointer-events-none"
                            width={421}
                            height={421}
                            priority
                        />
                    </div>
                    <div className='hidden lg:block xl:absolute xl:top-[-60px] xl:right-[-36px]'>
                        <div className='relative'>
                            <Image
                                src="/assets/images/webp/Supercharge-image.webp"
                                alt="Supercharge Image"
                                className="relative z-30 pointer-events-none"
                                width={606}
                                height={440}
                                priority
                            />
                            <Image
                                src="/assets/images/webp/commitment-ellips.webp"
                                alt="Commitment Ellipse"
                                className="absolute top-0 left-0 z-0 pointer-events-none"
                                width={421}
                                height={421}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src="/assets/images/webp/superchange-ellips.webp"
                alt="Superchange Ellipse"
                className="absolute max-sm:hidden pointer-events-none top-[51px] left-[30px]"
                width={66}
                height={78}
                priority
            />
            <Image
                src="/assets/images/webp/small-screenellips.webp"
                alt="Small Screen Ellipse"
                className="absolute sm:hidden max-sm:w-[36px] max-sm:h-[38px] top-[33px] left-[6px]"
                width={66}
                height={78}
                priority
            />
        </div>
    );
};

export default Supercharge;