import fs from 'fs'
import path from 'path'

type Metadata = {
  type: string
  title: string
  publishedAt: string
  summary?: string
  image?: string
  doi?: string 
  authors?: string
  
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })
  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))
    return { metadata, slug, content }
  })
}

// This function returns all blog posts, sorted by published date (newest first)
// export function getAllBlogPosts() {
//   const posts = getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
//   return posts.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
// }

export function getAllBlogPosts() {
  const posts = getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))

  const updatedPosts = posts.map((post) => {
    const isNews = post.metadata.type === 'news'
    const hasNoDate = !post.metadata.publishedAt?.trim()

    if (isNews && hasNoDate) {
      post.metadata.publishedAt = new Date().toISOString().split('T')[0] // 'YYYY-MM-DD'
    }

    return post
  })

  return updatedPosts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  )
}


export function getArticles() {
  const dir = path.join(process.cwd(), 'app', 'blog', 'posts')
  const mdxFiles = getMDXFiles(dir)

  const articles = mdxFiles
    .map((file) => {
      const { metadata, content } = readMDXFile(path.join(dir, file))
      const slug = path.basename(file, path.extname(file))
      return { metadata, slug, content }
    })
    .filter((post) => ['journal', 'conference'].includes(post.metadata.type))
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )

  return articles
}

// This function returns only the latest five blog posts
export function getBlogPosts() {
  const posts = getAllBlogPosts()
  console.log(posts)
  return posts.slice(0, 5)
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''
  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }
  return `${fullDate} (${formattedDate})`
}
