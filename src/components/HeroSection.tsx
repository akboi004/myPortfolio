import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-black" />

      {/* Subtle cinematic glow */}

      <motion.div
        className="absolute right-[10%] top-[10%] h-[450px] w-[450px] rounded-full bg-[#c9a35b]/10 blur-[150px]"
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <motion.nav
        className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-7 md:px-16"
        initial={{
          opacity: 0,
          y: -25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className="text-sm font-semibold tracking-[0.35em] text-[#e8d7bd] md:text-base">
          ALWIN KURIAN
        </div>

        <div className="hidden items-center gap-10 md:flex">
          {["ABOUT", "WORK", "SKILLS", "EXPERIENCE", "CONTACT"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs tracking-[0.3em] text-[#a99e93] transition-colors duration-300 hover:text-[#e5c27c]"
              >
                {item}
              </a>
            )
          )}
        </div>

        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="hidden border border-[#67543a] px-6 py-3 text-xs tracking-[0.25em] text-[#e5d5c0] md:block"
        >
          LET'S TALK ↗
        </motion.a>
      </motion.nav>

      {/* =====================================================
          WALKING VIDEO

          IMPORTANT:
          The uploaded video contains the whole generated scene.
          We crop it so only the walking person is visible.
      ====================================================== */}

      <div
        className="
          absolute
          right-0
          top-0
          z-10
          h-screen
          w-[48%]
          overflow-hidden
        "
      >
        <motion.div
          className="absolute inset-0"
          initial={{
            opacity: 0,
            x: 100,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            x: mousePosition.x * -5,
            y: mousePosition.y * -3,
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="
              absolute
              left-1/2
              top-1/2
              h-[125vh]
              w-[65vw]
              max-w-none
              -translate-x-1/2
              -translate-y-1/2
              object-contain
            "
          >
            <source
              src="/videos/alwin-walking.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Dark gradient to blend video into the page */}

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-30 flex min-h-screen items-center px-8 pt-20 md:px-16">
        <div className="max-w-[680px]">

          {/* Software Engineer */}

          <motion.div
            className="mb-7 flex items-center gap-3"
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
          >
            <span className="h-3 w-3 rounded-full bg-[#e5c27c]" />

            <span className="text-xs tracking-[0.35em] text-[#9e9287]">
              SOFTWARE ENGINEER
            </span>
          </motion.div>

          {/* =================================================
              MAIN TITLE
          ================================================== */}

          <motion.h1
            className="
              text-[60px]
              font-black
              uppercase
              leading-[0.86]
              tracking-[-0.04em]
              sm:text-[76px]
              md:text-[100px]
            "
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            <motion.span
              className="block bg-gradient-to-b from-white via-white to-[#aaa49e] bg-clip-text text-transparent"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.9,
                  },
                },
              }}
            >
              I BUILD
            </motion.span>

            <motion.span
              className="block bg-gradient-to-b from-[#f7d99d] via-[#d9ad63] to-[#6f4d21] bg-clip-text text-transparent"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.9,
                  },
                },
              }}
            >
              RELIABLE
            </motion.span>

            <motion.span
              className="block bg-gradient-to-b from-[#f7d99d] via-[#d9ad63] to-[#6f4d21] bg-clip-text text-transparent"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.9,
                  },
                },
              }}
            >
              BACKENDS.
            </motion.span>
          </motion.h1>

          {/* =================================================
              TECHNOLOGIES
          ================================================== */}

          <motion.div
            className="mt-9 text-xs font-medium tracking-[0.28em] text-[#c8b9a8] md:text-sm"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.7,
            }}
          >
            JAVA
            <span className="mx-3 text-[#8b6c3d]">•</span>
            SPRING BOOT
            <span className="mx-3 text-[#8b6c3d]">•</span>
            MICROSERVICES
            <span className="mx-3 text-[#8b6c3d]">•</span>
            REST APIS
          </motion.div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            className="mt-6 max-w-[650px] text-sm leading-7 text-[#938b84] md:text-base"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.05,
              duration: 0.8,
            }}
          >
            Software Engineer with 4+ years of experience building
            scalable backend systems, improving application performance,
            and turning complex requirements into reliable production
            solutions.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <motion.div
            className="mt-8 flex flex-wrap gap-5"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 0.7,
            }}
          >
            <motion.a
              href="#work"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                border
                border-[#a98552]
                px-8
                py-4
                text-xs
                font-semibold
                tracking-[0.25em]
                text-[#e8d7bd]
                transition-all
                duration-300
                hover:bg-[#d8b46d]
                hover:text-black
              "
            >
              VIEW MY WORK ↗
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                border
                border-[#493a29]
                px-8
                py-4
                text-xs
                font-semibold
                tracking-[0.25em]
                text-[#c7b7a6]
                transition-all
                duration-300
                hover:border-[#d7ae61]
                hover:text-[#f2d49d]
              "
            >
              RESUME ↓
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          QUOTE

          This is deliberately kept on the far right.
          The video crop should prevent its duplicate quote
          from being visible.
      ====================================================== */}

      <motion.div
        className="absolute bottom-24 right-[5%] z-40 hidden max-w-[230px] lg:block"
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1.5,
          duration: 0.9,
        }}
      >
        <div className="mb-3 text-3xl text-[#d6a955]">
          “
        </div>

        <p className="text-xs font-medium leading-6 tracking-[0.2em] text-[#ddd4ca]">
          CODE IS MY CRAFT.
          <br />
          IMPACT IS MY GOAL.
        </p>

        <div className="my-5 h-px w-28 bg-[#7c6034]" />

        <div className="font-serif text-3xl italic text-[#d6a955]">
          Alwin
        </div>
      </motion.div>

      {/* =====================================================
          FLOATING ELEMENT
      ====================================================== */}

      <motion.div
        className="absolute bottom-24 right-[2%] z-40 hidden h-6 w-6 rotate-45 bg-[#77736e]/40 lg:block"
        animate={{
          y: [-8, 8, -8],
          rotate: [45, 135, 45],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          BOTTOM LINE
      ====================================================== */}

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-50 h-px bg-gradient-to-r from-transparent via-[#5e4a31] to-transparent"
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          delay: 1.3,
          duration: 1.5,
        }}
      />
    </section>
  );
};

export default HeroSection;