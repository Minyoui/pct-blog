"use client"

import { motion } from "motion/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Preview from "@/components/preview";

interface SubHeroProps {
    className?:string;
}

const SubHero: React.FC<SubHeroProps> = ({ className }) => {
    return (
        <div className={`grid grid-cols-3 gap-3 p-3 font-inter ${className}`}>
            <motion.div 
                className="shadow-lg rounded-3xl flex items-center justify-center p-5"
                whileHover={{ y:-3 }}
            >
                <h1>I post weekly blogs based on my personal thoughts and opinions or it can be pretty random lol. Feel free to roam around and read my posts!</h1>
            </motion.div>

            <motion.div 
                className="shadow-lg col-span-2 rounded-3xl bg-[#131513] text-white p-8"
                whileHover={{ y:-3 }}
            >
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
            </motion.div>
        </div>
    );
};

export default SubHero;