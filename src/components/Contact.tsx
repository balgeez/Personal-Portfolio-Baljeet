import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_10475tc',    // Replace with your EmailJS Service ID
        'template_42ikcgo',   // Replace with your EmailJS Template ID
        formRef.current,
        'qcXYWj08VOFlQfX3D'     // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          formRef.current?.reset();
          // Reset success message after 4 seconds
          setTimeout(() => setIsSubmitted(false), 4000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setIsSubmitting(false);
          setHasError(true);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 border-b border-black">
      <div className="max-w-7xl mx-auto md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="font-sans text-[32px] md:text-[48px] font-[800] tracking-[-0.04em] uppercase text-brand-dark leading-[0.85]">INQUIRIES &<br/>COLLABORATIONS</h2>
          <p className="font-serif italic text-xl text-[#444] max-w-[380px]">Let's build something driven by data</p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-dark text-brand-bg p-8 flex flex-col gap-4 min-h-[300px]"
        >
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center h-full">
              <CheckCircle2 className="w-12 h-12 text-brand-bg mb-4 opacity-80" />
              <h3 className="text-xl font-[800] uppercase tracking-tight mb-2">Message Sent</h3>
              <p className="opacity-80 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <>
              <h4 className="m-0 text-[12px] uppercase tracking-[0.2em]">Contact Form</h4>
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="text"
                    name="user_name" /* EmailJS looks for this name attribute */
                    required
                    className="bg-transparent border-b border-brand-bg/30 text-brand-bg py-2 text-[14px] flex-1 outline-none placeholder:text-brand-bg/50 focus:border-brand-bg transition-colors"
                    placeholder="FULL NAME"
                  />
                  <input
                    type="email"
                    name="user_email" /* EmailJS looks for this name attribute */
                    required
                    className="bg-transparent border-b border-brand-bg/30 text-brand-bg py-2 text-[14px] flex-1 outline-none placeholder:text-brand-bg/50 focus:border-brand-bg transition-colors"
                    placeholder="EMAIL ADDRESS"
                  />
                </div>
                
                {/* Changed this to a textarea so people can write longer messages */}
                <textarea
                  name="message" /* EmailJS looks for this name attribute */
                  required
                  rows={3}
                  className="bg-transparent border-b border-brand-bg/30 text-brand-bg py-2 text-[14px] w-full outline-none placeholder:text-brand-bg/50 focus:border-brand-bg transition-colors mt-2 resize-none"
                  placeholder="HOW CAN I HELP WITH YOUR DATA?"
                />
                
                {hasError && (
                  <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Failed to send. Please try again.</span>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-bg text-brand-dark border-none py-2.5 px-6 font-[700] uppercase text-[11px] self-start mt-4 hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin"></span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}