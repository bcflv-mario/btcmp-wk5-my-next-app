import Link from 'next/link'
import posts from '../posts.json'

export default function Blog() {
  return (
    <div class="mt-20 mx-auto text-center max-w-3xl px-10">
      <div class="mb-10 p-8 bg-white border border-gray-500 rounded-2xl shadow-sm flex flex-col">
      <h1 class="text-3xl font-bold ">Blog</h1>

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
    </div>
  )
}