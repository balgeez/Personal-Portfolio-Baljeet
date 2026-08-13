import { motion } from 'motion/react';
import { DATA } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-b border-black">
      <div className="max-w-7xl mx-auto md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
        <div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-[800] tracking-[-0.04em] uppercase text-brand-dark leading-[0.85] mb-4">PROFESSIONAL<br/>EXPERIENCE</h2>
          <p className="font-serif italic text-xl text-[#444]">Career trajectory & impact</p>
        </div>

        <div className="flex flex-col gap-12">
          {DATA.experience.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-t border-black pt-6"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-2">
                <div>
                  <h3 className="text-[20px] md:text-[24px] font-[800] leading-[1.2] tracking-tight uppercase text-brand-dark mb-1">{job.title}</h3>
                  <div className="text-[14px] uppercase tracking-[0.1em] font-[700] opacity-80">{job.company}</div>
                </div>
                <div className="flex flex-col md:items-end gap-1 text-[12px] uppercase tracking-[0.1em] opacity-60">
                  <span>{job.duration}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              
              <ul className="space-y-4">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-[1.6] opacity-80">
                    <div className="mt-2 w-1.5 h-1.5 bg-brand-dark shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
