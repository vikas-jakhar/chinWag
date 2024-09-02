import React from 'react'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryButton from '../custom-ui/PrimaryButton'
import { CARD_DATA } from '@/utils/Helper'

const Conversations = () => {
    return (
        <div className='py-24 relative z-[1] bg-lightSky'>
            <div className="container my-10">
                <PrimaryHeading className='mx-auto text-center' text='Share or Connect.' />
                <PrimaryHeading className='mx-auto text-center -mt-1.5' text='Create Conversations that Count' />
                <div className="mt-[38px] flex gap-10 justify-center">
                    {CARD_DATA.map((i, index) => (
                        <div key={index} className={`${index === 0 ? "bg-darkGreen" : "bg-lightGreen"} max-w-[427px] w-full px-[30px] flex flex-col items-center pb-[30px] pt-10 rounded`}>
                            <p className='font-light text-lg text-white mt-0.5 text-center'>{i.text}</p>
                            <PrimaryButton gsapClass='w-full' hoverClass={`${index === 0 ? "bg-white" : "bg-lightGreen"}`} text={i.button} className={`${index === 0 ? "text-offGreen bg-mediumGreen" : "text-white bg-darkGreen"} mt-[34px] w-full py-4 rounded-[138px] font-bold`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Conversations