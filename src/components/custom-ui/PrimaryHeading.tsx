interface PrimaryHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string;
    reduceBelow?: number;
    maxFontSize?: number;
    minFontSize?: number;
    className?: string;
}

const PrimaryHeading: React.FC<PrimaryHeadingProps> = ({
    text,
    reduceBelow = 1024,
    maxFontSize = 45,
    minFontSize = 25,
    className = '',
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <h2
            {...props}
            style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }}
            className={`${className} font-black leading-8 md:leading-10 lg:leading-custom-xl`}
        >
            {text}
        </h2>
    );
};

export default PrimaryHeading;