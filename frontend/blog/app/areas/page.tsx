import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Areas',
  description: 'Choose an area.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Areas where we slide</h1>
      <BlogPosts />
    </section>
  )
}
