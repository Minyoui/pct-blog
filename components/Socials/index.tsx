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

const Socials = () => {
    return (
        <aside 
            className="fixed flex flex-col items-center top-1/2 left-15"
        >
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
        </aside>
    );
};

export default Socials;