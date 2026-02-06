"use client"

import { motion } from "motion/react";
import Image from "next/image";

interface HeroProps {
    className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
    return (
        <header className={`grid grid-cols-3 gap-3 p-3 font-inter ${className}`}>
            <motion.div 
                className="overflow-hidden relative col-span-2 w-full h-auto shadow-lg rounded-3xl flex items-center justify-center p-25"
                whileHover={{ y:-3 }}
            >
                <h1 className="text-[#656565] z-50 text-[200px] font-bold mix-blend-color-dodge">PACOT</h1>
                <Image 
                    src="/images/DJI_0217.JPG"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute bottom-5 left-5 flex flex-col font-montserrat text-white">
                    <h2>Bohol, Philippines</h2>
                    <p className="text-xs">Proudly shot by Evane Pacot | DJI Mini 3</p>
                </div>
            </motion.div>
            <motion.div 
                className="shadow-lg rounded-3xl flex flex-col items-center justify-center"
                whileHover={{ y:-3 }}
            >
                <h1 className="text-3xl">Welcome!</h1>
                <p className="">to Evane's blog page</p>
            </motion.div>
        </header>
    );
};

export default Hero;