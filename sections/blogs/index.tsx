import { motion } from "motion/react";
import Link from "next/link";
import Container from "@/components/container";
import Preview from "@/components/preview";
import { ChevronRight } from "lucide-react";
import fs from "fs"
import path from "path"
import matter from "gray-matter"

interface BlogProps {
    className?:string;
}

const Blogs: React.FC<BlogProps> = ({
    className
}) => {
    const postsDirectory = path.join(process.cwd(), "posts")
      const filenames = fs.readdirSync(postsDirectory)
    
      const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, "utf8")
        const { data } = matter(fileContents)
    
        return {
          slug: filename.replace(".md", ""),
          title: data.title,
          date: data.uploadDate,
          caption: data.caption || ""
        }
    })

    return (
        <section className={`${className}`}>
            {/* <Container className="p-10 relative">
                <BlogPage />
            </Container> */}
            {posts.map((post) => (
                <Container 
                    key={post.slug}
                    className="relative p-5"
                >
                    {/* <h1>{post.title}</h1>
                    <p>{post.date}</p>
                    <Link href={`/blog/${post.slug}`}>
                        Read More <ChevronRight />
                    </Link> */}
                    <Preview
                        title={post.title}
                        date={post.date}
                        body={post.caption}
                    />
                    <Link 
                        href={`/blog/${post.slug}`}
                        className="absolute font-inter top-5 right-5 text-sm flex items-center"
                    >
                        Read More <ChevronRight className="h-5 w-5"/>
                    </Link>
                </Container>
            ))}
        </section>
    );
};

export default Blogs;