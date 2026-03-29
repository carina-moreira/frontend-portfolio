"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-headline mb-4">404</h1>
        <p className="text-grey mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:opacity-90  transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
