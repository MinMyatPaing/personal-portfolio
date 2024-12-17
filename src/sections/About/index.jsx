import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import Wrapper from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { skills } from "../../constants";

const SkillCard = ({ index, title, icon: Icon, description }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      className="xs:w-[300px] w-full relative group"
    >
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-primary to-transparent opacity-70 blur-[3px] group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 min-h-[400px] cursor-pointer flex flex-col justify-between items-center rounded-[20px] bg-tertiary p-8 shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
        <div className="p-4 rounded-full bg-gradient-to-t from-[#6d1ddb] to-[#4c1dbb] shadow-2xl">
          <Icon size={40} className="text-white" />
        </div>

        <h3 className="text-[22px] font-bold text-white text-center leading-tight">
          {title}
        </h3>

        <p className="text-secondary text-[15px] text-center leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Areas of Expertise</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center items-stretch gap-10">
        {skills.map((skill, i) => (
          <SkillCard key={skill.title} index={i} {...skill} />
        ))}
      </div>
    </>
  );
}

export default Wrapper(About, "about");
