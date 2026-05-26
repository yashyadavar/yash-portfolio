import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Hero from '@/components/Hero';
import HorizontalScroll from '@/components/HorizontalScroll';
import Navbar from '@/components/Navbar';
import Image from 'next/image'; // Make sure Image is imported
import Link from 'next/link';

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="w-full">
        <Hero />
        
        {/* Parallax Image Section using homepage.png */}
        <section 
          className="h-[60vh] w-full flex items-center justify-center relative bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/yash-portfolio/homepage.png')" }}
        >
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0"></div>
          <p className="text-2xl font-light uppercase tracking-widest text-center max-w-2xl text-[#1a1a1a] z-10 px-8">
            We structure digital environments that bridge the gap between architectural theory and interactive web graphics.
          </p>
        </section>

        {/* Projects Intro Title Section */}
        <section className="w-full bg-[#f4f4f4] pt-32 pb-10 px-10 md:px-24 flex flex-col md:flex-row justify-between items-end">
          <div className="flex flex-col">
            <span className="text-sm tracking-widest uppercase text-gray-400 mb-2">[ 01 ] Archive</span>
            <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter uppercase leading-none text-[#1a1a1a]">
              Projects.
            </h2>
          </div>
          <p className="text-sm tracking-widest uppercase text-gray-500 mt-8 md:mt-0 md:mb-4">
            Selected Works — 2024
          </p>
        </section>

        {/* The Horizontal Gallery */}
        <HorizontalScroll />
        

        {/* NEW: View All Projects (Archive) Button */}
        <section className="w-full bg-[#f4f4f4] py-24 flex items-center justify-center border-t border-gray-300">
          <Link 
            href="/archive" 
            className="group relative flex items-center justify-center gap-6 px-12 py-6 border border-[#1a1a1a] text-[#1a1a1a] overflow-hidden transition-all duration-500"
          >
            {/* Dark background that slides up on hover */}
            <div className="absolute inset-0 bg-[#1a1a1a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
            
            <span className="relative z-10 text-sm tracking-widest uppercase font-bold group-hover:text-[#f4f4f4] transition-colors duration-500">
              Explore Full Archive
            </span>
            <span className="relative z-10 group-hover:text-[#f4f4f4] transition-colors duration-500">
              +
            </span>
          </Link>
        </section>

        {/* NEW: Resume / CV Block */}
        <section className="w-full bg-[#f4f4f4] py-32 px-10 md:px-24 border-t border-gray-300">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
            
            {/* Left Side: Text & Download Button */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <span className="text-sm tracking-widest uppercase text-gray-400 mb-4">[ 02 ] Profile</span>
              <h2 className="text-[10vw] md:text-[6vw] font-bold tracking-tighter uppercase leading-none text-[#1a1a1a] mb-6">
                Curriculum<br />Vitae.
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
                A comprehensive overview of my experience in spatial architecture, structural planning, and technical methodologies.
              </p>
              
              {/* Download Button */}
              <a 
                href="/yash-portfolio/resume.pdf" 
                download 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold tracking-widest uppercase text-sm border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f4f4f4] transition-all duration-300"
              >
                <span>Download Resume</span>
              </a>
            </div>

            {/* Right Side: Interactive Preview Card */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end perspective-[1000px]">
              <a 
                href="/yash-portfolio/resume.jpg" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full max-w-sm aspect-[1/1.4] bg-white shadow-2xl group transition-all duration-700 hover:-translate-y-4 hover:rotate-y-6 hover:rotate-z-2"
              >
                {/* The Preview Image */}
                <Image 
                  src="/yash-portfolio/resume.jpg" 
                  alt="Resume Preview" 
                  fill 
                  className="object-cover border border-gray-200"
                />
                
                {/* Hover Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-medium tracking-widest uppercase text-sm border border-white px-6 py-3">
                    View PDF
                  </span>
                </div>
              </a>
            </div>

          </div>
        </section>

        {/* Footer */}
        <section className="h-[50vh] w-full flex flex-col items-center justify-center bg-[#1a1a1a] text-[#f4f4f4]">
          <h2 className="text-[8vw] md:text-[6vw] font-bold tracking-tighter uppercase mb-10 hover:opacity-70 transition-opacity cursor-pointer">
            Initiate Project.
          </h2>
          
          {/* Social Icons Container */}
          <div className="flex gap-8 mb-12">
            
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#f4f4f4] hover:text-gray-400 transition-colors hover:-translate-y-1 transform duration-300">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            
            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#f4f4f4] hover:text-gray-400 transition-colors hover:-translate-y-1 transform duration-300">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#f4f4f4] hover:text-gray-400 transition-colors hover:-translate-y-1 transform duration-300">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
              </svg>
            </a>
            
            {/* Email */}
            <a href="mailto:hello@example.com" className="text-[#f4f4f4] hover:text-gray-400 transition-colors hover:-translate-y-1 transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>

          </div>

          <p className="tracking-widest uppercase text-xs md:text-sm text-gray-500">
            Based in Jaipur • Operating Globally
          </p>
        </section>

      </main>
    </SmoothScroll>
  );
}