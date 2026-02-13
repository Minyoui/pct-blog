import fs from "fs"
import path from "path"
import matter from "gray-matter"

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "posts")
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContents)

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.numericalDate,
      upload: data.uploadDate,
      caption: data.caption || "",
    }
  })

  // Sort newest first
  posts.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return posts
}
