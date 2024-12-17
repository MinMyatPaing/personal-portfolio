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
        {/* Animated Purple Ball */}
        <div className="flex flex-col justify-center items-center relative">
          <motion.div
            initial={{ y: -80, opacity: 1 }}
            animate={{ y: 180, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-5 h-5 rounded-full bg-primary"
          />

          <motion.div
            initial={{ height: -80, opacity: 1 }}
            animate={{ height: "440px", opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-32 w-1"
            style={{
              background:
                "linear-gradient(to top, rgba(109, 29, 219, 1), rgba(109, 29, 219, 0))",
            }}
          />
        </div>

        {/* Main Header & Subheader */}
        <div className="flex flex-col justify-center gap-6">
          <motion.h1
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className={`font-black font-playfair text-white lg:text-[110px] sm:text-[65px] xs:text-[50px] text-[40px] lg:leading-[98px] mb-10`}
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
            className="mx-auto bg-transparent flex gap-2 items-center text-[20px] font-bold"
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
