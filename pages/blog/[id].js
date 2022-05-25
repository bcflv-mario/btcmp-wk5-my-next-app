import { useRouter } from 'next/router'
import posts from '../../posts.json'

export default function BlogPost() {
  const router = useRouter()
  const post = posts[router.query.id]
  if (!post) return <p></p>

  return (
    <>
    <div class="mt-20 mx-auto text-center max-w-3xl px-10">
    <div class="mb-10 p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
      <h1 class="text-3xl font-semibold text-gray-900">{post.title}</h1>
      <p>{post.content}</p>
      </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(posts).map((id) => ({ params: { id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: posts[params.id],
    },
  }
}