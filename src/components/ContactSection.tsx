import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative w-full min-h-[75vh] bg-black text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 flex items-center overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-[#D4AF37]/[0.05] rounded-full blur-[160px]" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex items-center space-x-4 mb-10">
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]">
            05 / CONTACT
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] tracking-tight uppercase leading-[0.82] mb-10"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
            LET&apos;S BUILD
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
            SOMETHING GREAT.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          <div>
            <p className="text-sm text-[#A8988B] leading-[1.8] max-w-xl">
              Open to new opportunities, challenging backend problems and teams building
              reliable, scalable software.
            </p>
          </div>

          <div className="md:text-right">
            <a
              href="mailto:alwinkurianinterviews@gmail.com"
              className="text-lg sm:text-2xl text-[#EAD8C7] hover:text-[#D4AF37] transition-colors"
            >
              alwinkurianinterviews@gmail.com
            </a>
            <p className="text-xs text-[#8C6D4F] mt-3">+91 9444254583 • Chennai, India</p>

            <div className="flex md:justify-end gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/imalwinkurian/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#8C6D4F]/40 text-[10px] tracking-[0.2em] hover:border-[#D4AF37] transition-colors"
              >
                LINKEDIN ↗
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#8C6D4F]/40 text-[10px] tracking-[0.2em] hover:border-[#D4AF37] transition-colors"
              >
                RESUME ↓
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-[#8C6D4F]/20 flex flex-col sm:flex-row justify-between gap-3 text-[9px] tracking-[0.2em] text-[#66584D] uppercase">
          <span>ALWIN KURIAN</span>
          <span>SOFTWARE ENGINEER • JAVA DEVELOPER</span>
          <span>CHENNAI, INDIA</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
