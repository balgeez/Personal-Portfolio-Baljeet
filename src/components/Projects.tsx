import { motion } from 'motion/react';
import { DATA } from '../data';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-b border-black">
      <div className="max-w-7xl mx-auto md:px-12">
        <div className="flex flex-col gap-2 mb-16">
          <h2 className="font-sans text-[32px] md:text-[48px] font-[800] tracking-[-0.04em] uppercase text-brand-dark leading-[0.85]">FEATURED<br/>PROJECTS</h2>
          <p className="font-serif italic text-xl text-[#444] max-w-[380px]">Highlighting core analytical capabilities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DATA.projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group border border-black p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.1em] font-[700] block mb-2 opacity-80">
                  Project 0{idx + 1}
                </span>
                <h3 className="text-[18px] md:text-[24px] font-[800] leading-[1.2] tracking-tight uppercase text-brand-dark mb-4">
                  {project.title}
                </h3>
                <p className="text-[14px] leading-[1.6] opacity-80 mb-8">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <h4 className="text-[10px] uppercase tracking-[0.1em] font-[700] mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] leading-[1.6] opacity-80">
                      <div className="mt-1.5 w-1 h-1 bg-brand-dark shrink-0 rounded-full"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
