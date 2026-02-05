import { motion } from "motion/react";

interface SubHeroProps {
    className?:string;
}

const SubHero: React.FC<SubHeroProps> = ({ className }) => {
    return (
        <div className={`grid grid-cols-3 gap-3 p-3 ${className}`}>
            <div className="shadow-lg rounded-xl flex items-center justify-center p-5">
                <h1>I post weekly blogs based on my personal thoughts and opinions or it can be pretty random lol. Feel free to roam around and read my posts!</h1>
            </div>
            <div className="shadow-lg col-span-2 rounded-xl bg-gray-800">
                <h2>world</h2>
            </div>
        </div>
    );
};

export default SubHero;