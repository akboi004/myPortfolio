import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-screen min-h-screen bg-black text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center"
    >
      <div className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-[#D4AF37]/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/6 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/[0.05] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-10"
        >
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]">
            01 / ABOUT ME
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-8"
          >
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88] mb-7"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
                I DON'T JUST WRITE CODE.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                I SOLVE PROBLEMS.
              </span>
            </h2>

            <p
              className="text-sm md:text-[15px] font-light text-[#B3A497] leading-[1.9] tracking-wide max-w-3xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I&apos;m <span className="text-[#F3DBB3] font-medium">Alwin Kurian</span>,
              a Software Engineer specializing in Java, Spring Boot, Microservices and
              REST APIs. With 4+ years of experience, I build dependable backend
              solutions, improve application performance and work closely with
              cross-functional teams to deliver features that solve real business problems.
            </p>

            <p
              className="text-sm md:text-[15px] font-light text-[#B3A497] leading-[1.9] tracking-wide max-w-3xl mt-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              My work includes asynchronous processing, event-driven systems with Apache
              Kafka, third-party integrations, caching, production troubleshooting and
              cloud-native technologies. I enjoy taking ownership from requirement analysis
              through development, testing, deployment and production support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-4 grid grid-cols-2 gap-4"
          >
            {[
              ['4+', 'YEARS EXPERIENCE'],
              ['JAVA', 'BACKEND FOCUS'],
              ['KAFKA', 'EVENT DRIVEN'],
              ['GCP', 'CLOUD EXPOSURE'],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`border border-[#8C6D4F]/30 bg-[#120F0C]/60 p-5 min-h-[130px] flex flex-col justify-end ${
                  index % 2 === 1 ? 'mt-8' : ''
                }`}
              >
                <span
                  className="text-3xl sm:text-4xl text-[#D4AF37]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {value}
                </span>
                <span className="text-[9px] tracking-[0.18em] text-[#A8988B] mt-1">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
