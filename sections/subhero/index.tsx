import { motion } from "motion/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SubHeroProps {
    className?:string;
}

const SubHero: React.FC<SubHeroProps> = ({ className }) => {
    return (
        <div className={`grid grid-cols-3 gap-3 p-3 font-inter ${className}`}>
            <div className="shadow-lg rounded-xl flex items-center justify-center p-5">
                <h1>I post weekly blogs based on my personal thoughts and opinions or it can be pretty random lol. Feel free to roam around and read my posts!</h1>
            </div>
            <div className="relative shadow-lg col-span-2 rounded-xl bg-[#131513] text-white">
                <h2 className="absolute top-5 left-5 font-semibold font-montserrat">Latest Post</h2>
                <Link 
                    className="absolute top-5 right-5 flex gap-1 text-sm"
                    href=""
                    target="_blank"
                >
                    Read More
                    <ChevronRight className="h-5 w-5"/>
                </Link>
            </div>
        </div>
    );
};

export default SubHero;