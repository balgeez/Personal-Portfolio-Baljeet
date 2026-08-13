import { motion } from 'motion/react';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { DATA } from '../data';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto md:px-12 relative flex flex-col md:flex-row gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col justify-center pr-0 md:pr-12 md:border-r border-black"
        >
          <div className="inline-flex items-center gap-2 self-start bg-black text-white px-2 py-1 text-[10px] uppercase tracking-[0.1em] font-bold mb-8">
            <Terminal className="w-3 h-3" />
            <span>Available in {DATA.personal.location}</span>
          </div>
          
          <h1 className="font-sans text-[60px] md:text-[100px] lg:text-[120px] font-[800] tracking-[-0.04em] uppercase text-brand-dark leading-[0.85] mb-6">
            DATA<br/>ENGINEER<br/>& ANALYST
          </h1>
          
          <p className="font-serif italic text-[24px] text-[#444] mb-10">
            {DATA.personal.role}
          </p>

          <p className="text-[16px] leading-[1.6] opacity-80 max-w-[380px] mb-12">
            I'm <span className="font-bold text-brand-dark">{DATA.personal.name}</span>. I specialize in scalable cloud infrastructure, machine learning, and advanced analytics, transforming complex datasets into actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-bg text-brand-dark border border-black font-[700] uppercase text-[11px] hover:bg-black hover:text-brand-bg transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-black text-brand-bg border border-black font-[700] uppercase text-[11px] hover:bg-brand-bg hover:text-brand-dark transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
