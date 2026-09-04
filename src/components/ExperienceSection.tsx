import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    period: 'NOV 2025 — PRESENT',
    title: 'SOFTWARE ENGINEER',
    company: 'PRODAPT SOLUTIONS — CAMS MIGRATION',
    points: [
      'Developed Spring Boot-based automation solutions that replaced manual operational processes, improving efficiency and reducing repetitive effort.',
      'Implemented asynchronous event processing to improve application responsiveness and support efficient handling of background workloads.',
      'Integrated Apache Kafka consumers to enable reliable, event-driven processing of application events.',
      'Owned backend enhancements from requirement analysis through development, testing and deployment.',
    ],
  },
  {
    period: 'AUG 2022 — NOV 2025',
    title: 'SOFTWARE ENGINEER',
    company: 'PRODAPT SOLUTIONS — FIELD DATA TOOLKIT',
    points: [
      'Developed a new Spring Boot microservice for field technicians, reducing manual intervention and improving efficiency during on-field operations.',
      'Improved application performance using asynchronous processing and caching strategies.',
      'Integrated third-party APIs to support business workflows.',
      'Resolved production issues and improved overall application reliability.',
      'Worked with Git, Docker and Jenkins as part of development and release activities.',
      'Collaborated with cross-functional teams in an Agile environment and mentored junior developers.',
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative w-full bg-[#050505] text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center space-x-4 mb-10">
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]">
            04 / EXPERIENCE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] mb-16"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
            EXPERIENCE &
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
            MILESTONES.
          </span>
        </motion.h2>

        <div className="space-y-12">
          {experience.map((item, index) => (
            <motion.article
              key={item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative border-l border-[#8C6D4F]/40 pl-7 sm:pl-10"
            >
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.35)]" />

              <p className="text-[10px] tracking-[0.22em] text-[#D4AF37] mb-2">{item.period}</p>
              <h3
                className="text-3xl sm:text-4xl text-white mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#8C6D4F] mb-5">
                {item.company}
              </p>

              <ul className="space-y-3 max-w-3xl">
                {item.points.map((point) => (
                  <li key={point} className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.75]">
                    <span className="text-[#D4AF37] mr-2">•</span>{point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-[#8C6D4F]/25">
          <p className="text-[10px] tracking-[0.25em] text-[#D4AF37] mb-5">AWARDS &amp; RECOGNITION</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              ['SEP 2026', 'RISING ROOKIE OF THE MONTH'],
              ['OCT 2025', 'STAR OF THE QUARTER AWARD'],
              ['AUG 2024', 'SPOTLIGHT AWARD'],
            ].map(([date, award]) => (
              <div key={award} className="border border-[#8C6D4F]/25 p-5 bg-[#0d0b09]/60">
                <p className="text-[9px] tracking-[0.2em] text-[#8C6D4F] mb-2">{date}</p>
                <p className="text-sm text-[#EAD8C7]">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
