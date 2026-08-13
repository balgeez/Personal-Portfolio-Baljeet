import { motion } from 'motion/react';
import { DATA } from '../data';
import { ExternalLink, Award, Trophy } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 border-b border-black">
      <div className="max-w-7xl mx-auto md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
        
        {/* Left Column: Headers */}
        <div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-[800] tracking-[-0.04em] uppercase text-brand-dark leading-[0.85] mb-4">CERTIFICATIONS<br/>& ACHIEVEMENTS</h2>
          <p className="font-serif italic text-xl text-[#444]">Verified credentials & milestones</p>
        </div>
        
        {/* Right Column: Content */}
        <div className="flex flex-col gap-16">
          
          {/* Certifications Block */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[14px] uppercase tracking-[0.1em] font-[800] text-brand-dark border-b border-black pb-3">Certifications</h3>
            {DATA.certifications.map((cert, idx) => (
              <motion.div 
                key={`cert-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-black p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-black hover:text-brand-bg transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[18px] md:text-[20px] font-[800] leading-[1.2] tracking-tight uppercase mb-2">
                      {cert.name}
                    </h4>
                    <div className="text-[12px] uppercase tracking-[0.1em] font-[700] opacity-80">
                      {cert.issuer} &bull; {cert.date}
                    </div>
                  </div>
                </div>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.1em] font-bold border border-current px-6 py-2.5 hover:opacity-70 transition-opacity whitespace-nowrap"
                >
                  Verify <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Achievements Block */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[14px] uppercase tracking-[0.1em] font-[800] text-brand-dark border-b border-black pb-3">Platform Milestones</h3>
            {DATA.achievements.map((achievement, idx) => (
              <motion.div 
                key={`achieve-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-black p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-black hover:text-brand-bg transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[18px] md:text-[20px] font-[800] leading-[1.2] tracking-tight uppercase mb-2">
                      {achievement.title}
                    </h4>
                    <div className="text-[12px] uppercase tracking-[0.1em] font-[700] opacity-80 mb-2">
                      {achievement.issuer}
                    </div>
                    <p className="text-[14px] leading-[1.6] opacity-80 max-w-lg">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                
                <a 
                  href={achievement.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.1em] font-bold border border-current px-6 py-2.5 hover:opacity-70 transition-opacity whitespace-nowrap"
                >
                  View Profile <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}