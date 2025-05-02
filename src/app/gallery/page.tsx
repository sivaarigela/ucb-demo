import GalleryItem from './GalleryItem';
import axios from 'axios';

type ImageData = {
  id: number;
  title: string;
  url: string;
};


export default async function GalleryPage() {
  let images: ImageData[] = [];

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=9');
    images = res.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      url: 'https://picsum.photos/seed/${item.id}/300/200',
    }));
  } catch (err) {
    return <div className="text-red-500 p-4">Failed to load gallery data.</div>;
  }

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Gallery</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {images.map((img) => (
          <GalleryItem key={img.id} id={img.id} title={img.title} imageUrl={img.url} />
        ))}
      </div>
    </div>
  );
}
