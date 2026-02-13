import Image from "next/image";
import Container from "@/components/container";
import Preview from "@/components/preview";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { getAllPosts } from "@/lib/posts";

interface HeroProps {
    className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
    const posts = getAllPosts()
    const latestPost = posts[0] // newest post

    if (!latestPost) {
        return <p>No posts yet.</p>
    }

    return (
        <header className={`sm:grid sm:grid-cols-3 gap-3 font-inter flex flex-col ${className}`}>
            <Container className="relative col-span-2 flex items-center justify-center p-15">
                <h1 className="text-[#656565] z-50 sm:text-[200px] text-[125px] font-bold mix-blend-color-dodge">PACOT</h1>
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

            <Container className="flex flex-col items-center justify-center p-5">
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
                        href={`/blog/${latestPost.slug}`}
                    >
                        Read More
                        <ChevronRight className="h-5 w-5"/>
                    </Link>
                </div>

                <Preview 
                    className=""
                    title={latestPost.title}
                    date={latestPost.upload}
                    body={latestPost.caption}
                />
            </Container>

            <nav 
                className="col-span-3 rounded-3xl shadow-lg"
            >
                <ul className="w-full flex items-center justify-between py-3 px-5 text-sm">
                    <li className="font-semibold">
                        Recent Posts
                    </li>
                    {/* <li>
                        Filter:
                    </li>
                    <li>
                        View All
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Hero;