interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    gsapClass?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, gsapClass = '', className = '', ...props }) => {
    return (
        <div className={`${gsapClass} flex`}>
            <button
                className={`overflow-hidden hover:shadow-black-border group relative z-[1] duration-300 border border-transparent hover:border-white ease-linear text-base ${className}`}
                {...props}
            >
                <span className="group-hover:drop-shadow-gray-sm duration-300 ease-linear">{text}</span>
                <span className="h-0 w-0 bg-lightRed -z-10 opacity-0 group-hover:opacity-100 absolute duration-300 ease-linear top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-180 group-hover:h-24 group-hover:w-full"></span>
            </button>
        </div>
    );
};

export default PrimaryButton;