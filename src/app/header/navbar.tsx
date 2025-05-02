'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-blue-500 text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
