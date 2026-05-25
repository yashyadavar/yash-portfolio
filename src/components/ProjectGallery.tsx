'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProjectGallery({ gallery, title }: { gallery: string[], title: string }) {
  // This state tracks which image is currently open in full screen
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!gallery || gallery.length === 0) return null;

  return (
    <>
      {/* 1. The Smaller Grid Section */}
      <div className="max-w-6xl mx-auto mb-24">
        <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-8 border-b border-gray-300 pb-2">
          Gallery
        </h3>
        
        {/* Changed to 3 or 4 columns to make the images much smaller and neat */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {gallery.map((imgSrc, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden bg-gray-200 cursor-pointer group"
              onClick={() => setSelectedImage(imgSrc)} // Opens the image on click
            >
               <Image 
                 src={imgSrc} 
                 alt={`${title} gallery image ${index + 1}`} 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-110" 
               />
            </div>
          ))}
        </div>
      </div>

      {/* 2. The Full-Screen Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a1a1a]/95 backdrop-blur-md cursor-zoom-out"
          onClick={() => setSelectedImage(null)} // Closes when you click the background
        >
          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 text-[#f4f4f4] uppercase tracking-widest text-sm hover:opacity-70 transition-opacity z-[101]"
            onClick={() => setSelectedImage(null)}
          >
            [ Close ]
          </button>
          
          {/* Full Resolution Image */}
          <div className="relative w-[90vw] h-[90vh]">
            <Image 
              src={selectedImage} 
              alt="Full screen view" 
              fill 
              className="object-contain" // Ensures the whole image fits without cropping
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
}