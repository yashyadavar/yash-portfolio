import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import { notFound } from 'next/navigation';
import ProjectGallery from '@/components/ProjectGallery';

// In Next.js App Router, params must be awaited if they are used dynamically
export default async function ProjectDetail({ params }: { params: { id: string } }) {
  // 1. Await the params object
  const resolvedParams = await params;
  
  // 2. Safely compare string values
  const project = projects.find((p) => String(p.id) === String(resolvedParams.id));

  // 3. Use native Next.js 404 handling if it truly fails
  if (!project) {
    notFound(); 
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      
      {/* We add a minimum height and relative positioning to ensure the cursor has a boundary */}
      <main className="w-full min-h-screen relative bg-[#f4f4f4] text-[#1a1a1a] pt-32 pb-24 px-10 md:px-24">
        
        {/* Top Header & Back Button */}
        <div className="max-w-6xl mx-auto mb-16">
          <Link href="/" className="text-sm tracking-widest uppercase text-gray-500 hover:text-[#1a1a1a] transition-colors mb-8 inline-block">
            ← Back to Archive
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-end mt-4">
            <h1 className="text-6xl md:text-[8vw] font-bold uppercase tracking-tighter leading-none">
              {project.title}
            </h1>
            <p className="text-sm tracking-widest uppercase text-gray-500 mb-2">
              {project.category} — {project.location}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto aspect-[16/9] relative overflow-hidden mb-24 bg-gray-200">
          <Image src={project.src} alt={project.title} fill className="object-cover" priority />
        </div>

        {/* Description Section */}
        <div className="max-w-4xl mx-auto mb-24 flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-4 border-b border-gray-300 pb-2">The Brief</h3>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
              {project.longDescription}
            </p>
          </div>
        </div>

        {/* Photo Gallery (Grid) */}
       {/* Photo Gallery (Interactive Lightbox) */}
        <ProjectGallery gallery={project.gallery} title={project.title} />

        {/* Map Location Section */}
        {project.mapUrl && (
          <div className="max-w-4xl mx-auto mb-24"> {/* Reduced from 6xl to 4xl to make it narrower */}
             <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-8 border-b border-gray-300 pb-2">Site Location</h3>
             
             {/* Swapped 'aspect-video' for a strict height limit so it doesn't get huge on desktop */}
             <div className="w-full h-[300px] md:h-[400px] bg-gray-200 relative overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src={project.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
             </div>
          </div>
        )}

      </main>
    </SmoothScroll>
  );
}