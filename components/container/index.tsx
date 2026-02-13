"use client"

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ContainerProps {
    className?:string;
    children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    className,
    children
}) => {
    return (
        <motion.div
            className={`shadow-lg rounded-3xl overflow-hidden ${className}`}
            whileHover={{ y:-3 }}
        >
            {children}
        </motion.div>
    );
};

export default Container;