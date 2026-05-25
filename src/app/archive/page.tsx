import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';

export default function Archive() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      
      <main className="w-full min-h-screen bg-[#f4f4f4] text-[#1a1a1a] pt-40 pb-24 px-10 md:px-24">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-end border-b border-gray-300 pb-10">
          <div>
            <span className="text-sm tracking-widest uppercase text-gray-500 mb-4 block">Index</span>
            <h1 className="text-6xl md:text-[8vw] font-bold uppercase tracking-tighter leading-none">
              Project Archive.
            </h1>
          </div>
          <p className="text-sm tracking-widest uppercase text-gray-500 mt-8 md:mt-0">
            {projects.length} Works
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <Link 
              href={`/project/${project.id}`} 
              key={project.id}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container with Hover Zoom */}
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-gray-200 mb-6">
                <Image 
                  src={project.src} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 4} // Loads the first row immediately
                />
              </div>
              
              {/* Details */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold uppercase tracking-tighter mb-1">
                    {project.title}
                  </h2>
                  <p className="text-xs tracking-widest uppercase text-gray-500">
                    {project.category}
                  </p>
                </div>
                <span className="text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </main>
    </SmoothScroll>
  );
}