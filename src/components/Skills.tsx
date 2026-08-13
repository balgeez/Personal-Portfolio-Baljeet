import { motion } from 'motion/react';
import { DATA } from '../data';
import { Code2 } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-b border-black">
      <div className="max-w-7xl mx-auto md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
        <div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-[800] tracking-[-0.04em] uppercase text-brand-dark leading-[0.85] mb-4">TECHNICAL<br/>SKILLS</h2>
          <p className="font-serif italic text-xl text-[#444]">Core capabilities & tooling</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {DATA.skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-t border-black pt-4"
            >
              <h3 className="text-[14px] uppercase tracking-[0.1em] font-[800] text-brand-dark mb-4">{skillGroup.category}</h3>
              <div className="flex flex-col gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-[14px] leading-[1.6] opacity-80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
