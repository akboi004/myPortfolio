import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'BACKEND DEVELOPMENT',
    skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'SQL', 'OOP'],
  },
  {
    title: 'DATABASES',
    skills: ['MySQL', 'Oracle'],
  },
  {
    title: 'MESSAGING & PROCESSING',
    skills: ['Apache Kafka', 'Asynchronous Processing', 'Event-Driven Processing', 'Caching'],
  },
  {
    title: 'CLOUD & DEVOPS',
    skills: ['Docker', 'Jenkins CI/CD', 'Kubernetes', 'Google Cloud Platform', 'Rancher'],
  },
  {
    title: 'TOOLS',
    skills: ['IntelliJ', 'Git', 'GitHub', 'Postman', 'SSMS', 'Azure DevOps'],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative w-full bg-black text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-10">
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]">
            03 / SKILLS
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
            TOOLS OF
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
            THE CRAFT.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className={`border border-[#8C6D4F]/30 bg-[#0d0b09]/70 p-7 ${
                index === skillGroups.length - 1 ? 'md:col-span-2' : ''
              }`}
            >
              <h3 className="text-[10px] tracking-[0.25em] text-[#D4AF37] mb-5">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 border border-[#8C6D4F]/30 text-xs text-[#CFC2B7] hover:border-[#D4AF37]/70 hover:text-[#F7E7C4] transition-colors"
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
};

export default SkillsSection;
