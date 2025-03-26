import Link from 'next/link'
import { formatDate, getBlogPosts, getArticles } from 'app/blog/utils'

// export function BlogPosts() {
//   let allBlogs = getBlogPosts()

//   return (
//     <div>
//       {allBlogs
//         .sort((a, b) => {
//           if (
//             new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
//           ) {
//             return -1
//           }
//           return 1
//         })
//         .map((post) => (
//           <Link
//             key={post.slug}
//             className="flex flex-col space-y-1 mb-4"
//             href={`/blog/${post.slug}`}
//           >
//             <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
//               <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
//                 {formatDate(post.metadata.publishedAt, false)}
//               </p>
//               <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
//                 {post.metadata.title}
                
//                 {post.metadata.authors && post.metadata.authors.length > 0 && (
//                     <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
//                       <strong>Authors:</strong>{' '}
//                       {post.metadata.authors.split(/\s*,\s*/).map((author, index, array) => {
//                         const isMe = author.trim() === 'Raiyan Rahman'
//                         return (
//                           <span key={index}>
//                             {isMe ? <u>{author}</u> : author}
//                             {index < array.length - 1 ? ', ' : ''}
//                           </span>
//                         )
//                       })}
//                     </p>
//                   )}

//               </p>
//             </div>
//           </Link>
//         ))}
//     </div>
//   )
// }

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 items-start">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>

              <div className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                <p className="font-medium">{post.metadata.title}</p>

                <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                  {post.metadata.authors ? (
                    <>
                      <strong>Authors:</strong>{' '}
                      {post.metadata.authors.split(/\s*,\s*/).map((author, index, array) => {
                        const isMe = author.trim() === 'Raiyan Rahman'
                        return (
                          <span key={index}>
                            {isMe ? <u>{author}</u> : author}
                            {index < array.length - 1 ? ', ' : ''}
                          </span>
                        )
                      })}
                    </>
                  ) : (
                    // Empty element for spacing consistency
                    <span>&nbsp;</span>
                  )}
                </p>
              </div>
            </div>

          </Link>
        ))}
    </div>
  )
}



export function Articles() {
  let allBlogs = getArticles()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
                
                {post.metadata.authors && post.metadata.authors.length > 0 && (
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                      <strong>Authors:</strong>{' '}
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

              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
