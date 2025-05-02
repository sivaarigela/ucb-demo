// pages/posts/[id].tsx

import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'

interface Post {
  id: string
  title: string
}

interface PostPageProps {
  post: Post
}

const PostPage = ({ post }: PostPageProps) => {
  return (
    <div>
      <div className="flex justify-between pt-[18px]">
        {/* Left Section */}
        <div className="w-2/3">
          <h1 className="text-3xl font-bold mb-4 pl-2">{post.title}</h1>
          <img
            src={`https://picsum.photos/seed/${post.id}/300/200`}
            alt={post.title}
            className="w-full h-40 object-cover rounded float-left p-1.5 mb-4"
          />
          <p className="text-justify pl-2">
            Lorem ipsum content...
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/3 mt-8 pl-3">
          <span className="text-xl font-semibold pl-5">Latest Posts</span>
          <ul className="text-sm space-y-2 p-4 rounded-lg">
            {[...Array(5)].map((_, idx) => (
              <li
                key={idx}
                className="flex items-center bg-blue-400 text-white rounded px-4 py-2 [border-top-right-radius:222px] [border-bottom-right-radius:222px]"
              >
                <div className="h-3 w-3 rounded-full bg-white"></div>
                <span className="pl-3">
                  <Link href={`/gallery/${post.id}`}>{post.title}</Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch limited posts for demo — or generate all
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
  const posts: Post[] = await res.json()

  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params!.id}`)
  const post: Post = await res.json()

  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}

export default PostPage