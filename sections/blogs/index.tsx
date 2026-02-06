"use client"

import { motion } from "motion/react";
import Link from "next/link";
import Container from "@/components/container";
import Preview from "@/components/preview";
import { ChevronRight } from "lucide-react";

interface BlogProps {
    className?:string;
}

const Blogs: React.FC<BlogProps> = ({
    className
}) => {
    return (
        <section className={`${className}`}>
            <Container className="p-10 relative">
                <Preview 
                    title="My First Blog Post!"
                    date="February 7, 2026"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <Link 
                    className="absolute top-10 right-10 text-sm font-inter flex items-center"
                    href=""
                    target="_blank"
                >
                    Read More <ChevronRight className="w-5 h-5"/>
                </Link>
            </Container>
        </section>
    );
};

export default Blogs;