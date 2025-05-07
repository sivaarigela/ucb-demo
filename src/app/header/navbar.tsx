'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-blue-500 text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/contentfulblogs">Contenful Blogs</Link>
      <Link href="/contactus">Contact</Link>
    </nav>
  );
}
