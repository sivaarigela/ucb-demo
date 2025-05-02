export default async function PostPage({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
