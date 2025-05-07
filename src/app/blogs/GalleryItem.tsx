import Link from 'next/link'

type GalleryItemProps = {
    id: string;
    title: string;
    imageUrl: string;
  };
  
  export default function GalleryItem({ id, title, imageUrl }: GalleryItemProps) {
    return (
      <div className="rounded shadow p-2 bg-white">
        <Link href={`/blogs/${id}`}>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />
        <h3 className="text-center mt-2 font-semibold">{title}</h3>
        </Link>
      </div>
    );
  }
  