// import { notFound } from 'next/navigation'
// import { CustomMDX } from 'app/components/mdx'
// import { formatDate, getAllBlogPosts, getArticles } from 'app/blog/utils'
// import { baseUrl } from 'app/sitemap'

// export async function generateStaticParams() {
//   // let posts = getAllBlogPosts()
//   let posts = getArticles()

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

// export function generateMetadata({ params }) {
//   let post = getAllBlogPosts().find((post) => post.slug === params.slug)
//   if (!post) {
//     return
//   }

//   let {
//     title,
//     publishedAt: publishedTime,
//     summary: description,
//     image,
//   } = post.metadata
//   let ogImage = image
//     ? image
//     : `${baseUrl}/og?title=${encodeURIComponent(title)}`

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: 'article',
//       publishedTime,
//       url: `${baseUrl}/blog/${post.slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: [ogImage],
//     },
//   }
// }

// export default function Blog({ params }) {
//   const post = getAllBlogPosts().find((post) => post.slug === params.slug)


//   if (!post) {
//     notFound()
//   }

//   return (
//     <section>
//       <script
//         type="application/ld+json"
//         suppressHydrationWarning
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             '@context': 'https://schema.org',
//             '@type': 'BlogPosting',
//             headline: post.metadata.title,
//             datePublished: post.metadata.publishedAt,
//             dateModified: post.metadata.publishedAt,
//             description: post.metadata.summary,
//             image: post.metadata.image
//               ? `${baseUrl}${post.metadata.image}`
//               : `/og?title=${encodeURIComponent(post.metadata.title)}`,
//             url: `${baseUrl}/blog/${post.slug}`,
//             author: {
//               '@type': 'Person',
//               name: 'My Portfolio',
//             },
//           }),
//         }}
//       />
//       <h1 className="title font-semibold text-2xl tracking-tighter">
//         {post.metadata.title}
//       </h1>
//       <div className="flex flex-col mt-2 mb-8 text-sm">
//         <p className="text-sm text-neutral-600 dark:text-neutral-400">
//           {formatDate(post.metadata.publishedAt)}
//         </p>
//         {post.metadata.doi && (
//           <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
//             <a
//               href={post.metadata.doi}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:underline"
//             >
//               View Publication (DOI)
//             </a>
//           </p>
//         )}

//         {post.metadata.authors && post.metadata.authors.length > 0 && (
//           <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
//             {/* <strong>Authors:</strong>{' '} */}
//             {post.metadata.authors.split(/\s*,\s*/).map((author, index, array) => {
//               const isMe = author.trim() === 'Raiyan Rahman'
//               return (
//                 <span key={index}>
//                   {isMe ? <u>{author}</u> : author}
//                   {index < array.length - 1 ? ', ' : ''}
//                 </span>
//               )
//             })}
//           </p>
//         )}


//       </div>


//       <article className="prose">
//         <CustomMDX source={post.metadata.summary} />
//       </article>
//     </section>
//   )
// }


import { notFound } from 'next/navigation'
import Image from 'next/image'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getAllBlogPosts, getArticles } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  // let posts = getAllBlogPosts()
  let posts = getArticles()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getAllBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  const post = getAllBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      {/* Add the image here if it exists */}
      {post.metadata.image && (
        <div className="my-4">
          <Image
            src={
              post.metadata.image.startsWith('/')
                ? `${baseUrl}${post.metadata.image}`
                : post.metadata.image
            }
            alt={post.metadata.title}
            width={800}
            height={450}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
        {post.metadata.doi && (
          <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
            <a
              href={post.metadata.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              View Publication (DOI)
            </a>
          </p>
        )}
        {post.metadata.authors && post.metadata.authors.length > 0 && (
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
            {post.metadata.authors.split(/\s*,\s*/).map((author, index, array) => {
              const isMe = author.trim() === 'Raiyan Rahman'
              return (
                <span key={index}>
                  {isMe ? <u>{author}</u> : author}
                  {index < array.length - 1 ? ', ' : ''}
                </span>
              )
            })}
          </p>
        )}
      </div>
      <article className="prose">
        <CustomMDX source={post.metadata.summary} />
      </article>
    </section>
  )
}
