import Image from 'next/image'             // 1) Import Next.js Image component
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Raiyan Rahman
      </h1>

      {/* 2) Render your photo */}
      <div className="mb-4">
        <Image
          src="/public/images/pic.jpg" // path relative to public folder
          alt="Photo of Raiyan"
          width={200}              // adjust to your liking
          height={200}             // adjust to your liking
          className="rounded-full"
        />
      </div>

      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
