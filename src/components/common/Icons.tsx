import React from 'react';

interface IconProps {
    IconName?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = (props) => {
    const IconList: { [key: string]: JSX.Element } = {
        triangleIcon: (
            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.223145 0.0734577H20.7651L10.4878 16.6801L0.223145 0.0734577Z" fill="#7A9E9F" />
            </svg>
        ),
    };

    return (
        <span className={`flex ${props.className || ''}`}>
            {props.IconName && IconList[props.IconName]}
        </span>
    );
};

export default Icon;