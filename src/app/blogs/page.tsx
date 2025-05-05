import GalleryItem from './GalleryItem';
import { fetchImages, ImageData } from '../blogs/fetchimages';

export default async function GalleryPage() {
  let images: ImageData[] = [];

  try {
    images = await fetchImages(15);
  } catch (err) {
    return <div className="text-red-500 p-4">Failed to load Blogs data.</div>;
  }

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Blogs</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {images.map((img) => (
          <GalleryItem key={img.id} id={img.id} title={img.title} imageUrl={img.url} />
        ))}
      </div>
    </div>
  );
}
