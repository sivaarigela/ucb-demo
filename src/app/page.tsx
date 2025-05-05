import Image from "next/image";
import GalleryItem from '../app/blogs/GalleryItem';
import { fetchImages, ImageData } from '../app/blogs/fetchimages';

export default async function Home() {
  let images: ImageData[] = [];

  try {
    images = await fetchImages(4);
  } catch (err) {
    return <div className="text-red-500 p-4">Failed to load Blogs data.</div>;
  }

  return (
    <div className="grid items-center justify-items-center sm:p-0 font-[family-name:var(--font-geist-sans)]">
      <main className="gap-[1px] row-start-2">
        <div className="min-h-screen bg-gray-100 p-6">
          <Image
            className="dark:invert"
            src="https://www.ucb.com/sites/default/files/2024-11/2.png"
            alt="Next.js logo"
            width={1200}
            height={400}
            priority
          />
          <h1 className="text-3xl font-bold mb-6 text-center pt-4">Our New Blogs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img) => (
                    <GalleryItem key={img.id} id={img.id} title={img.title} imageUrl={img.url} />
          ))}
          </div>
        </div>
      </main>
    </div>
  );
}
