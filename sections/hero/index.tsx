import { motion } from "motion/react";
import Image from "next/image";

interface HeroProps {
    className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
    return (
        <header className={`grid grid-cols-3 gap-3 p-3 font-inter ${className}`}>
            <div className="relative col-span-2 inset-0 w-full h-50 shadow-lg rounded-2xl">
                <Image 
                    src="/assets/images/DJI_0217.JPG"
                    alt="Hero Background"
                    fill
                    className=""
                />
            </div>
            <div className="shadow-lg rounded-2xl flex flex-col items-center justify-center">
                <h1 className="text-3xl">Welcome!</h1>
                <p className="">to Evane's blog page</p>
            </div>
        </header>
    );
};

export default Hero;