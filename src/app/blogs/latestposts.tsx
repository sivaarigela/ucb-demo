import axios from 'axios'
import Link from 'next/link'

type ImageData = {
  id: number
  title: string
}

export default async function LatestPosts() {
  let images: ImageData[] = []

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
    images = res.data.map((item: any) => ({
      id: item.id,
      title: item.title
    }))
  } catch (err) {
    return <div className="text-red-500 p-4">Failed to load gallery data.</div>
  }

  return (
    <ul className="space-y-2 mt-4">
      {images.map((post) => (
        <li
          key={post.id}
          className="flex items-center justify-between bg-blue-100 px-4 py-2 rounded hover:bg-blue-200 transition"
        >
          <Link href={`/blogs/${post.id}`} className="flex justify-between w-full items-center">
            <span className="hover:underline text-blue-900">{post.title}</span>
            <span className="text-blue-600">&rarr;</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
