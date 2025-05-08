import Link from 'next/link';

type ContentGalleryItemProps = {
  id: any;
  title: any;
  imageUrl: string;
};

export default function ContentGalleryItemProps({ id, title, imageUrl }: ContentGalleryItemProps) {
  return (
    <div className="rounded shadow p-2 bg-white">
      <Link href={`/contentfulblogs/${id}`}>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />
        <h3 className="text-center mt-2 font-semibold">{title}</h3>
      </Link>
    </div>
  );
}
