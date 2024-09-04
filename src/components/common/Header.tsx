import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PrimaryButton from '../custom-ui/PrimaryButton'

const Header = () => {
    return (
        <div className='py-4'>
            <div className="container">
                <nav className='flex items-center justify-between'>
                    <Link href="/" className='flex w-full max-w-[32px] sm:max-w-[63px]'>
                        <Image src="/assets/images/webp/logo.png" alt='logo' width={95} height={92} className='w-full' priority />
                    </Link>
                    <div className="flex items-center gap-5">
                        <PrimaryButton hoverClass='bg-darkGreen' className='py-1.5 px-2.5 sm:px-6 sm:py-3 lg:py-[17px] md:px-[30px] bg-lightGreen rounded-[65px] text-white font-bold sm:font-normal text-custom-xs' text='Require Resources?' />
                        <PrimaryButton hoverClass='bg-lightGreen' className='py-[4.5px] px-2.5 sm:px-6 sm:py-2.5 lg:py-[15.4px] md:px-[30px] border-lightGreen border-2 rounded-[65px] text-lightGreen font-bold sm:font-normal hover:border-white text-custom-xs hover:text-white' text='Provide Resources?' />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
