"use client";

import Image from "next/image";
import { useState } from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

type ProjectGalleryProps = {
  media: MediaItem[];
  projectTitle: string;
};

export default function ProjectGallery({
  media,
  projectTitle,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!media || media.length === 0) {
    return null;
  }

  const activeItem = media[activeIndex];

  return (
    <div className="flex flex-col gap-8 mb-16">
      {activeItem.type === "image" ? (
        <Image
          src={activeItem.src}
          alt={activeItem.alt || projectTitle}
          width={720}
          height={600}
          className="w-full max-h-[500px] md:h-[600px] object-contain"
          priority
        />
      ) : (
        <video
          src={activeItem.src}
          controls
          className="w-full h-[600px] md:h-[600px] object-contain"
        />
      )}

      <div className="flex gap-3 overflow-x-auto pb-1">
        {media.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 overflow-hidden border-2 transition-colors w-full max-w-[100px] max-h-[81px] ${
                isActive
                  ? "border-blue"
                  : "border-transparent hover:border-grey/20"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue`}
              aria-label={`Show ${item.type} ${index + 1}`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt || `${projectTitle} image ${index + 1}`}
                  width={130}
                  height={85}
                  className="w-full h-full object-contain"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
