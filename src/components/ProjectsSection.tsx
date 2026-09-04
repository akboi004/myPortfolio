import React from 'react';
import { motion } from 'framer-motion';

const work = [
  {
    number: '01',
    title: 'CAMS MIGRATION',
    type: 'BACKEND ENGINEERING',
    description:
      'Spring Boot-based automation and event-driven backend work focused on replacing manual operational processes, improving responsiveness and supporting background workloads.',
    technologies: 'Java • Spring Boot • Microservices • Apache Kafka',
  },
  {
    number: '02',
    title: 'FIELD DATA TOOLKIT',
    type: 'MICROSERVICE DEVELOPMENT',
    description:
      'Built a Spring Boot microservice for field technicians that reduced manual intervention during on-field operations, while improving performance, integrations and application reliability.',
    technologies: 'Java • Spring Boot • REST APIs • SQL • Docker',
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="work" className="relative w-full bg-[#050505] text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-[#D4AF37]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center space-x-4 mb-10">
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]">
            02 / SELECTED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] tracking-tight uppercase leading-[0.85] mb-16"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
            WORK THAT
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
            MADE AN IMPACT.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {work.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="group relative border border-[#8C6D4F]/30 bg-[#0d0b09]/80 p-7 sm:p-9 min-h-[360px] flex flex-col justify-between hover:border-[#D4AF37]/70 transition-all duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.25em] text-[#8C6D4F]">{item.number}</span>
                <span className="text-[9px] tracking-[0.2em] text-[#D4AF37]">{item.type}</span>
              </div>

              <div>
                <h3
                  className="text-4xl sm:text-5xl text-white group-hover:text-[#F7E7C4] transition-colors mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-[1.8] text-[#A8988B] mb-5">
                  {item.description}
                </p>
                <p className="text-[10px] tracking-[0.16em] uppercase text-[#C4B5A5]">
                  {item.technologies}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#D4AF37]/70" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#D4AF37]/70" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
