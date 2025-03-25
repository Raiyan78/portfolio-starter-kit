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
          src="/images/pic.jpg" // path relative to public folder
          alt="Photo of Raiyan"
          width={200}              // adjust to your liking
          height={200}             // adjust to your liking
          className="rounded-full"
        />
      </div>

      <p className="mb-4">
        {`I am currently working as a research assistant at ECE, North South University.

      My research interest lies in the realm of quantum cryptography, where I envision to build an efficient and information theoretically secure algorithm. 
      Ultimately, my goal is to build a world where privacy is a guaranteed facet in everyone's life.`}
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
