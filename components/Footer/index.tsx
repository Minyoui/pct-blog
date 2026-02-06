import Link from "next/link";

interface FooterProps {
    className?:string;
}

const Footer: React.FC<FooterProps> = ({
    className
}) => {
    return (
        <footer className={`w-full flex items-center justify-center font-inter my-20 ${className}`}>
            <p className="text-center text-sm">All rights reserved © Evane Pacot 2026</p>
        </footer>
    );
};

export default Footer;