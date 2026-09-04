import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'WORK', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black text-[#E8DFD8] font-sans cursor-none">
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/40"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered
              ? 'rgba(212, 175, 55, 0.1)'
              : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-end">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-screen w-auto max-w-none object-contain origin-right scale-95 md:scale-[0.98] lg:scale-100"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-black via-black/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ALWIN KURIAN
          </a>

          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 hover:text-[#FFF5EB] transition-colors duration-300"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/60 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span>↗</span>
          </a>
        </header>

        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-sm sm:max-w-md md:max-w-2xl pointer-events-auto z-20"
          >
            <div className="relative mb-5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[7.7rem] tracking-tight uppercase leading-[0.82]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
                  I BUILD
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                  RELIABLE
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410]">
                  BACKENDS.
                </span>
              </h1>
            </div>

            <p
              className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.28em] uppercase text-[#C4B29E] mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              JAVA <span className="text-[#8C6D4F] mx-1">•</span> SPRING BOOT
              <span className="text-[#8C6D4F] mx-1">•</span> MICROSERVICES
              <span className="text-[#8C6D4F] mx-1">•</span> REST APIs
            </p>

            <p
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-xl mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Software Engineer with 4+ years of experience building scalable backend
              systems, improving application performance, and turning complex
              requirements into reliable production solutions.
            </p>

            <div className="flex flex-row items-center gap-4 sm:gap-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase"
              >
                <span>VIEW MY WORK</span><span>↗</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] text-[11px] font-medium tracking-[0.24em] uppercase"
              >
                <span>RESUME</span><span>↓</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.1 }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-24 xl:pr-36 mr-4 z-20 select-none"
          >
            <span className="text-xl text-[#C99E5D] leading-none font-serif mb-2">“</span>
            <div
              className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#E0D3C5] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>CODE IS MY CRAFT.</p>
              <p>IMPACT IS MY GOAL.</p>
            </div>
            <div className="w-28 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-2" />
            <div
              className="text-[2.2rem] text-[#D8AB64] leading-none"
              style={{ fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive" }}
            >
              Alwin
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
