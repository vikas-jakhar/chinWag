import React from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import PrimaryButton from '../custom-ui/PrimaryButton';
import { CARD_DATA } from '@/utils/Helper';
import Icon from '../common/Icons';
interface CardDataItem {
    text: string;
    button: string;
}

const Conversations: React.FC = () => {
    return (
        <div className='sm:py-24 pt-9 pb-11 relative z-[1] bg-lightSky'>
            <div className="container sm:my-10 relative z-[2]">
                <PrimaryHeading className='mx-auto text-center text-offGreen' text='Share or Connect.' />
                <PrimaryHeading className='mx-auto text-center text-offGreen -mt-1.5 px-10 sm:px-0' text='Create Conversations that Count' />
                <div className="mt-[38px] flex md:flex-row flex-col items-center gap-6 sm:gap-10 justify-center">
                    {CARD_DATA.map((item: CardDataItem, index: number) => (
                        <div
                            key={index}
                            className={`${index === 0 ? "bg-darkGreen" : "bg-lightGreen"} max-w-[330px] sm:max-w-[427px] w-full px-[30px] flex flex-col items-center pb-10 sm:pb-[30px] pt-[30px] sm:pt-10 rounded`}
                        >
                            <p className='font-light text-base sm:text-lg text-white mt-0.5 text-center'>{item.text}</p>
                            <PrimaryButton
                                gsapClass='w-full'
                                hoverClass={`${index === 0 ? "bg-white" : "bg-lightGreen"}`}
                                text={item.button}
                                className={`${index === 0 ? "text-offGreen bg-mediumGreen" : "text-white bg-darkGreen"} sm:mt-[34px] mt-6 w-full text-xs py-3 sm:py-4 rounded-[138px] font-bold`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Icon IconName='greenTriangleIcon' className='top-[70px] left-[31px] absolute hidden lg:flex' />
            <Icon IconName='halfCircleIcon' className='bottom-[111px] right-[72px] absolute hidden lg:flex' />
        </div>
    );
}

export default Conversations;