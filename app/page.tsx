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
            width={800}
            height={800}
            className="rounded-xl"
          />
        </div>

        {/* About Text */}
        <div>
          <p>
            I am currently working as a research assistant at ECE, North South University, under the supervision of  
            <a href="https://northsouth.edu/faculty-members/seps/mathematics-physics/dr.-abul-kalam-al-azad-akad.html"><strong> Prof. Abul Kalam al Azad</strong></a> &  
            <a href="https://ece.northsouth.edu/people/dr-sifat-momen/"><strong> Prof. Sifat Momen</strong></a> 
            <br /><br />
            My research interest lies in the realm of quantum cryptography, 
            where I envision to build an efficient and information theoretically secure algorithm. Previously, I have
            worked closely with  
            <a href="https://sites.google.com/view/nsuopticslab/home"><strong> Prof. Mahdy Rahman Chowdhury</strong></a>.
            Ultimately, my goal is to build a world where privacy is a guaranteed facet in everyone's life.
          </p>

          <h3>Email</h3>: <p style="font-family: 'Courier New', Courier, monospace; font-size: 18px;">
            raiyanrahman78 [at] gmail [dot] com
          </p>
        </div>

      </div>

      {/* Blog Posts */}
      <div className="my-8">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        News & Publications
      </h1>
        <BlogPosts />
      </div>
    </section>
  )
}
