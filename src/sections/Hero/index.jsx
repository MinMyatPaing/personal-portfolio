import React from "react";
import { motion } from "framer-motion";
import { IoArrowDownCircleSharp } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";

import backgroundImg from "../../assets/backgroundImg.jpg";
import { styles } from "../../styles";

export default function Hero() {
  // Animation Variants
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const subHeaderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
  };

  const [currentSkill, setCurrentSkill] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const rotateSkills = ["Websites.", "Mobile Apps.", "ML Models."];

    let timer;
    const updateSkill = () => {
      const word = rotateSkills[index];
      const currentLength = currentSkill.length;

      if (!deleting && currentLength < word.length) {
        setCurrentSkill(word.substring(0, currentLength + 1));
      } else if (deleting && currentLength > 0) {
        setCurrentSkill(word.substring(0, currentLength - 1));
      } else if (!deleting && currentLength === word.length) {
        timer = setTimeout(() => setDeleting(true), 1000); // Pause at full word
      } else if (deleting && currentLength === 0) {
        setDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % rotateSkills.length); // Move to next skill
      }
    };

    timer = setTimeout(updateSkill, 100); // Typing speed

    return () => clearTimeout(timer);
  }, [currentSkill, deleting, index]);

  return (
    <section className="relative w-full h-screen mx-auto flex justify-center items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-backcolor/90" />
      <div className={`${styles.padding} max-w-7xl relative z-10 flex gap-7`}>
        {/* Animated Purple Ball and Line */}
        <div className="flex flex-col justify-center items-center relative">
          {/* Ball Animation */}
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: "calc(100% - 10px)" }} // Stop dynamically at end of line
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-5 h-5 rounded-full bg-primary"
          />

          {/* Line Trail */}
          <div
            className="absolute top-0 w-1 bg-gradient-to-b from-[#6d1ddb] to-transparent"
            style={{
              height: "calc(100% + 100px)", // Line taller than content
            }}
          />
        </div>

        {/* Main Header & Subheader */}
        <div className="flex flex-col justify-center sm:gap-2 gap-6">
          <motion.h1
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className={`font-black font-playfair text-white lg:text-[110px] sm:text-[75px] xs:text-[60px] text-[48px] lg:leading-[98px] lg:mb-10 sm:mb-6 xs:mb-4`}
          >
            Min Paing
          </motion.h1>
          <motion.h3
            variants={subHeaderVariants}
            initial="hidden"
            animate="visible"
            className="font-medium lg:text-[35px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center"
          >
            I create innovative{" "}
            <span className="text-primary capitalize">{currentSkill}</span>
          </motion.h3>

          <motion.a
            href="#contact"
            whileHover="hover"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                delay: 1,
              },
            }}
            className="mx-auto bg-transparent flex gap-2 items-center text-[20px] font-bold mt-3"
          >
            Let&apos;s Connect{" "}
            <motion.span
              variants={{
                hover: {
                  marginLeft: 12,
                },
              }}
            >
              <MdArrowForward size={24} />
            </motion.span>
          </motion.a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-2 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-4 border-primary flex justify-center items-start p-2 rounded-3xl">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <IoArrowDownCircleSharp size={20} color="#6d1ddb" />
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
}
