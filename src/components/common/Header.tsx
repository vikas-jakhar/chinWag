import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='py-4'>
            <div className="container">
                <nav className='flex items-center justify-between'>
                    <Link href="/" className='flex w-full max-w-[60px]'>
                        <Image src="/assets/images/webp/logo.png" alt='logo' width={95} height={92} className='w-' priority />
                    </Link>
                    <div className="flex items-center gap-5">
                        
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
