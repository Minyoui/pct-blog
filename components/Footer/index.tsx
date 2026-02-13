"use client"

import { motion } from "motion/react"
import { Facebook, Instagram, Youtube } from "lucide-react";

const SocialLinks = [
    {
        id:1,
        Social:<Instagram />,
        Link:"https://www.instagram.com/evn_dc_pct/",
    },

    {
        id:2,
        Social:<Facebook />,
        Link:"https://www.facebook.com/evane.pacot/",
    },

    {
        id:3,
        Social:<Youtube />,
        Link:"https://www.youtube.com/@evanlyrush",
    },
]
interface FooterProps {
    className?:string;
}

const Footer: React.FC<FooterProps> = ({
    className
}) => {
    return (
        <footer className={`w-full flex flex-col items-center justify-center font-inter my-20 ${className}`}>
            <div className="flex items-center space-x-5">
                {SocialLinks.map((index) => (
                    <motion.a
                        key={index.id}
                        href={index.Link}
                        className="mb-8 opacity-50 hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale:1.2 }}
                        target="_blank"
                    >
                        {index.Social}
                    </motion.a>
                ))}
            </div>
            <p className="text-center text-sm">All rights reserved © Evane Pacot 2026</p>
        </footer>
    );
};

export default Footer;