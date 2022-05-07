import Link from 'next/link'
import posts from '../posts.json'

export default function Blog() {
  return (
    <div class="mt-20 mx-auto text-center max-w-3xl px-10">
      <h1>Blog</h1>

      <ul>
        {Object.keys(posts).map((id, index) => {
          return (
            <li key={index}>
              <Link href='/blog/[id]' as={'/blog/' + id}>
                <a>{posts[id].title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}