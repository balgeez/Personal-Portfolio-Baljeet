import { motion } from 'motion/react';
import { DATA } from '../data';
import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-b border-black">
      <div className="max-w-7xl mx-auto md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* About Me Column */}
          <div>
            <h2 className="font-sans text-[32px] md:text-[48px] font-[800] tracking-[-0.04em] uppercase text-brand-dark leading-[0.85] mb-6">ABOUT ME</h2>
            
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Profile Image */}
              <div className="w-[200px] sm:w-[280px] shrink-0">
                <img 
                  src="/profile.png" /* Update this if your image is not named profile.jpg */
                  alt={DATA.personal.name} 
                  className="w-full h-auto aspect-square object-cover border border-black grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              {/* Text Paragraphs */}
              <div className="flex-1">
                <p className="text-[16px] leading-[1.6] opacity-80 mb-6">
                  {DATA.personal.about}
                </p>
                <p className="text-[16px] leading-[1.6] opacity-80">
                  I thrive at the intersection of engineering and analytics, translating complex datasets into strategic decisions. With experience spanning robust ETL pipeline construction and multimodal AI integrations, my focus is on efficiency, accuracy, and impact.
                </p>
              </div>
            </div>
          </div>
          
          {/* Education Column */}
          <div>
            <h2 className="font-sans text-[32px] md:text-[48px] font-[800] tracking-[-0.04em] uppercase text-brand-dark leading-[0.85] mb-8">EDUCATION</h2>
            
            <div className="flex flex-col gap-6">
              {DATA.education.map((edu, idx) => (
                <div key={idx} className="border-t border-black pt-4">
                  <h3 className="text-[16px] font-[800] tracking-tight uppercase text-brand-dark mb-1">{edu.degree}</h3>
                  <p className="text-[14px] uppercase tracking-[0.1em] font-[700] opacity-80 mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-[12px] uppercase tracking-[0.1em] opacity-60">
                    <span>{edu.duration}</span>
                    <span className="w-1 h-1 bg-brand-dark rounded-full"></span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}