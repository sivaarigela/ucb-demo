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
      <footer className="row-start-3 flex gap-[24px] sm:p-5 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
