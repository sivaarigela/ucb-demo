// app/imagecarousel/page.tsx
import Image from "next/image";

const images = [
  "/carousel1.jpg",
  "/carousel2.jpg",
  "/carousel3.jpg",
];

export default function CarouselPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Carousel (SSR)</h1>

      <div className="relative w-full max-w-5xl mx-auto aspect-video overflow-hidden rounded-xl shadow-lg">
        <div className="flex animate-carousel">
          {images.map((src, index) => (
            <div className="min-w-full flex-shrink-0" key={index}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
