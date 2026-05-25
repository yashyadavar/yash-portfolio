'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

// Import the data you created in src/data/projects.ts
import { projects } from '@/data/projects'; 

// Register globally inside the file
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay ensures Next.js images and DOM are fully painted before GSAP measures the width
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        const panels = gsap.utils.toArray('.panel');
        
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => '+=' + (sliderRef.current?.offsetWidth || 0),
            invalidateOnRefresh: true, // Forces recalculation on window resize
          },
        });

        // Tell GSAP to recalculate all triggers now that it's mounted
        ScrollTrigger.refresh();
      }, sectionRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full overflow-hidden flex items-center bg-[#f4f4f4]">
      {/* 
        The width here must perfectly match: 100vw * number of projects. 
        Since you have 3 projects, it is 300vw. 
      */}
      <div ref={sliderRef} className="flex h-[80vh] w-[300vw]">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`panel w-screen h-full flex flex-col justify-center px-10 md:px-24 ${project.color}`}
          >
            <div className="flex flex-col md:flex-row gap-12 items-center w-full max-w-6xl mx-auto">
              
              {/* Image Section */}
              <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden group bg-gray-200">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0} 
                />
              </div>
              
              {/* Project Details with Link */}
              <div className="w-full md:w-1/2">
                <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">{project.category}</p>
                <h2 className="text-5xl md:text-[5vw] font-bold uppercase tracking-tighter leading-none text-[#1a1a1a]">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-600 mt-6 max-w-md leading-relaxed mb-8">
                  {project.shortDescription}
                </p>

                {/* The Clickable Button to the Dynamic Page */}
                <Link 
                  href={`/project/${project.id}`} 
                  className="group inline-flex items-center gap-4 text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 hover:opacity-70 transition-opacity"
                >
                  <span className="text-sm tracking-widest uppercase font-medium">Explore Project</span>
                  <span className="transition-transform group-hover:translate-x-2">→</span>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}