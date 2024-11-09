import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Peak LookOut 
      </h1>
      <p className="mb-4">
        {`Take a glance at who's sliding down right now.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
