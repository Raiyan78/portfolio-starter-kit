import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Raiyan Rahman
      </h1>

      {/* Wrap the image + about text in a flex container */}
      <div className="flex items-start gap-4 mb-8">
        {/* Photo */}
        <div>
          <Image
            src="/images/pic.jpg"
            alt="Photo of Raiyan"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>

        {/* About Text */}
        <div>
          <p>
            {`I am currently working as a research assistant at ECE, North South University.
My research interest lies in the realm of quantum cryptography, 
where I envision to build an efficient and information theoretically secure algorithm. 
Ultimately, my goal is to build a world where privacy is a guaranteed facet in everyone's life.`}
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
