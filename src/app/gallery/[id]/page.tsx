/*export default async function PostPage({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}*/
import Link from 'next/link'

interface Post {
  id: string;
  title: string;
}

interface PostPageProps {
  params: { id: string }
}

const PostPage = async ({ params }: PostPageProps) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
  const post: Post = await res.json()

  return (
    <div>
      <div className="flex justify-between pt-[18px]">
        {/* Left Section with Image and Post Content */}    
        <div className="w-2/3">
          <h1 className="text-3xl font-bold mb-4 pl-2">{post.title}</h1>
          <img
            src={`https://picsum.photos/seed/${post.id}/300/200`}
            alt={post.title}
            className="w-full h-40 object-cover rounded float-left p-1.5 mb-4"
          />
          <p className="text-justify pl-2">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
          <p className="text-justify pt-2 pl-2">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
        </div>

        {/* Right Section: Recent Posts */}
        <div className="w-1/3 pl-2 mt-8 pl-3">
          <span className="text-xl font-semibold pl-5">Latest Posts</span>
          <ul className="text-sm space-y-2 p-4 rounded-lg">
          <li className="flex items-center bg-blue-400 text-white rounded px-4 py-2 [border-top-right-radius:222px] [border-bottom-right-radius:222px]">
            <div className="h-3 w-3 rounded-full bg-white"></div>
              <span className='pl-3'><Link href={`/gallery/${post.id}`}>{post.title}</Link></span>
            </li>
            <li className="flex items-center bg-blue-400 text-white rounded px-4 py-2 [border-top-right-radius:222px] [border-bottom-right-radius:222px]">
            <div className="h-3 w-3 rounded-full bg-white"></div>
              <span className='pl-3'><Link href={`/gallery/${post.id}`}>{post.title}</Link></span>
            </li>
            <li className="flex items-center bg-blue-400 text-white rounded px-4 py-2 [border-top-right-radius:222px] [border-bottom-right-radius:222px]">
            <div className="h-3 w-3 rounded-full bg-white"></div>
              <span className='pl-3'><Link href={`/gallery/${post.id}`}>{post.title}</Link></span>
            </li>
            <li className="flex items-center bg-blue-400 text-white rounded px-4 py-2 [border-top-right-radius:222px] [border-bottom-right-radius:222px]">
            <div className="h-3 w-3 rounded-full bg-white"></div>
              <span className='pl-3'><Link href={`/gallery/${post.id}`}>{post.title}</Link></span>
            </li>
            <li className="flex items-center bg-blue-400 text-white rounded px-4 py-2 [border-top-right-radius:222px] [border-bottom-right-radius:222px]">
            <div className="h-3 w-3 rounded-full bg-white"></div>
              <span className='pl-3'><Link href={`/gallery/${post.id}`}>{post.title}</Link></span>
            </li>
          </ul>
          {/* Add more recent posts here */}
        </div>
      </div>

    </div>
  )
}

export default PostPage

