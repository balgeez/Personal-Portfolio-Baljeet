import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { DATA } from '../data';

export default function Footer() {
  return (
    <footer className="py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center border-t border-black text-[10px] uppercase tracking-[0.1em] gap-4">
      <div>&copy; {new Date().getFullYear()} {DATA.personal.name}. ALL RIGHTS RESERVED.</div>
      <div className="flex flex-wrap items-center gap-6">
        <a href={`tel:${DATA.personal.phone.replace(/[^0-9]/g, '')}`} className="hover:opacity-60 transition-opacity">
          {DATA.personal.phone}
        </a>
        <a href={`mailto:${DATA.personal.email}`} className="hover:opacity-60 transition-opacity">
          {DATA.personal.email}
        </a>
        <a href={DATA.personal.linkedin} target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
          LinkedIn
        </a>
        <span className="bg-black text-white px-2 py-1">Available for Hire</span>
      </div>
    </footer>
  );
}
