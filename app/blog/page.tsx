import { Articles } from 'app/components/posts'

export const metadata = {
  title: 'Research',
  description: 'Read my research.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Research</h1>
      <Articles />
    </section>
  )
}
