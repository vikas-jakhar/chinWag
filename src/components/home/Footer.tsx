import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PrimaryButton from '../custom-ui/PrimaryButton'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='pb-0.5 pt-4 sm:py-5 bg-footer-layer bg-no-repeat bg-cover'>
            <div className="container mt-5 relative z-[1]">
                <Link href="/" className='sm:max-w-[206px] max-w-[108px] w-full flex mx-auto'>
                    <Image src="/assets/images/webp/chin-logo.png" alt='logo' width={2006} height={200} className='w-full' priority />
                </Link>
                <PrimaryButton gsapClass='mx-auto' hoverClass='bg-white' text='Book a Demo' className='sm:mt-[34px] mt-4 bg-coolGreen mx-auto text-white text-custom-xs hover:text-coolGreen px-5 sm:px-[30px] py-2 sm:py-[18px] rounded-[65px]' />
            </div>
            <p className='pt-5 w-full text-center text-white font-normal text-custom-sm sm:text-sm opacity-60 border-t mt-8 border-offGray hidden sm:block'>© CHIN WAG INTERNATIONAL LIMITED t/a Chin-wag.com {currentYear}, All Rights Reserved.</p>
            <p className='pb-2.5 pt-3 w-full text-center text-white font-normal text-custom-sm sm:text-sm opacity-60 border-t mt-8 border-offGray sm:hidden'>©chin-wag 2022 {currentYear}, All Rights Reserved</p>
        </div>
    )
}

export default Footer