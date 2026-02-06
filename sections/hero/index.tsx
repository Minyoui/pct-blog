"use client"

import Image from "next/image";
import Container from "@/components/container";
import Preview from "@/components/preview";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
    className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
    return (
        <header className={`grid grid-cols-3 gap-3 font-inter ${className}`}>
            <Container className="relative col-span-2 flex items-center justify-center p-15">
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
            </Container>

            <Container className="flex flex-col items-center justify-center">
                <h1 className="text-3xl">Welcome!</h1>
                <p className="">to Evane's blog page</p>
            </Container>

            <Container className="flex items-center justify-center p-5">
                <h1>I post weekly blogs based on my personal thoughts and opinions or it can be pretty random lol. Feel free to roam around and read my posts!</h1>
            </Container>

            <Container className="col-span-2 bg-[#131513] text-white p-8">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="font-semibold font-montserrat">Latest Post</h2>
                    <Link 
                        className="flex gap-1 text-sm"
                        href=""
                        target="_blank"
                    >
                        Read More
                        <ChevronRight className="h-5 w-5"/>
                    </Link>
                </div>

                <Preview 
                    className=""
                    title="My First Blog Post!"
                    date="February 7, 2026"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                />
            </Container>

            <motion.nav 
                className="col-span-3 rounded-3xl shadow-lg"
                whileHover={{ y:-3 }}
            >
                <ul className="w-full flex items-center justify-between py-3 px-5 text-sm">
                    <li className="font-semibold">
                        Recent Posts
                    </li>
                    <li>
                        Filter:
                    </li>
                    <li>
                        View All
                    </li>
                </ul>
            </motion.nav>
        </header>
    );
};

export default Hero;