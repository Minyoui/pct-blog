import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!slug) return notFound()

  const filePath = path.join(process.cwd(), "posts", `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return notFound()
  }

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)

  const contentHtml = processedContent.toString()

  return (
    <main className="font-inter mx-auto max-w-275 p-3 space-y-3">
      {/* HEADER IMAGE OR BANNER */}
      {data.banner && (
        <div className="relative">
          <Image
            src={data.banner}
            alt={data.title}
            width={1200}
            height={600}
            className="w-full h-100 object-cover rounded-2xl"
            priority
          />
        </div>
      )}
      <Link href="/" className="flex items-center font-semibold text-sm w-fit hover:-translate-x-3 transition-all duration-300">
        <ChevronLeft className="h-5 w-5"/> Go Home 
      </Link>
      <h1 className="text-5xl font-bold font-montserrat">{data.title}</h1>
      <div className="font-manrope flex sm:flex-row flex-col sm:items-center items-start gap-3 text-sm text-black/65">
        <p>
          <span className="font-semibold">Upload date:</span> {data.uploadDate}
        </p>
        {/* <p>
          <span className="font-semibold">Author:</span> Evane Pacot
        </p> */}
      </div>
      <div className="w-full border border-black/30"/>
      <div className="[&_p]:mb-6">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} className="text-justify hyphens-auto"/>
      </div>
    </main>
  )
}
