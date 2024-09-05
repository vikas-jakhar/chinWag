import React from 'react'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Image from 'next/image'
import Icon from '../common/Icons';
import Header from '../common/Header';

const Hero = () => {
  return (
    <div className='relative'>
      <Header />
      <div className='container relative'>
        <div className='flex justify-between max-lg:flex-wrap max-lg:justify-center max-lg:text-center pt-[213px] max-sm:pt-[119px] pb-[141px] max-md:pb-[50px] max-sm:pb-[71px] max-lg:pb-[60px] items-center'>
          <div className='relative z-30 transform translate-x-[-16%] translate_x'>
            <Image
              src="/assets/images/gif/hero-img.gif"
              alt="On-Demand"
              className="z-30 w-full relative rounded-lg shadow-gif-shadow max-w-[715px] max-sm:!h-[197px] !h-[456px]"
              width={715}
              height={456}
              priority
            />
            <Image
              src="/assets/images/webp/dot-img.webp"
              alt="On-Demand"
              className="absolute z-0 top-[-49px] right-[-20px] max-sm:top-[-20px] max-sm:right-[-14px] max-sm:w-[52px] max-sm:h-auto"
              width={146}
              height={118}
              sizes="(max-width: 640px) 52px, 146px" // Image size changes based on the screen width
              priority
            />

          </div>
          <div className='flex flex-col max-lg:pt-16 max-sm:pt-[23px] max-lg:text-center max-lg:items-center'>
            <h1 className=' font-black max-sm:text-[30px] relative z-30 max-sm:leading-[40px] max-w-[419px] text-offGreen max-sm:max-w-[273px] text-[46px] leading-[61px]'>Introductions that save you money.</h1>
            <PrimaryParagraph data='Avoid inflated costs, keep your identity hidden while searching for Partners, and get rewarded for paying on-time.' className='max-w-[409px] pt-3 z-20' />
            <button className='font-bold text-base max-sm:mt-[21px] leading-5 max-w-[237px] border-none text-nowrap text-white rounded-[65px] bg-darkGreen py-[16px] px-[20px] mt-[41px]'>Publish your Requirement</button>
          </div>
        </div>
        <div className='max-2xl:hidden sm:hidden'>
          <div className='flex flex-col gap-[17px] max-sm:!gap-[4px] absolute right-[-112px] top-[107px]'>
            <Icon IconName='triangleIcon' />
            <Icon IconName='triangleIcon' />
            <Icon IconName='triangleIcon' />
            <Icon IconName='triangleIcon' />
            <Icon IconName='triangleIcon' />
          </div>
          <Image
            src="/assets/images/webp/scroll-down.webp"
            alt="On-Demand"
            className="absolute right-[-103px] bottom-0"
            width={111}
            height={112}
            priority
          />
        </div>
      </div>
      <div className='absolute  top-0 z-0 width-small w-full max-sm:h-[207px] max-lg:h-[407px] 2xl:w-[50%] lg:w-[600px] bg-darkGreen h-[810px] lg:rounded-[0px_16px_16px_0px]'></div>
      <div className='2xl:hidden'>
        <div className='flex flex-col gap-[17px] max-sm:left-[10px] max-sm:top-[225px] absolute right-[15px] top-[107px]'>
          <Icon IconName='triangleIcon' />
          <Icon IconName='triangleIcon' />
          <Icon IconName='triangleIcon' />
          <Icon IconName='triangleIcon' />
          <Icon IconName='triangleIcon' />
        </div>
        <Image
          src="/assets/images/webp/scroll-down.webp"
          alt="On-Demand"
          className="absolute  max-sm:hidden right-[23px] bottom-0"
          width={111}
          height={112}
          priority
        />
      </div>
    </div>
  )
}
export default Hero
