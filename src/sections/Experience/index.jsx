import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import Wrapper from "../../hoc";
import { styles } from "../../styles";
import { textVariant, fadeIn } from "../../utils/motion";
import { experiences } from "../../constants";

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-gray-800 py-6 px-10 rounded-xl shadow-lg cursor-pointer hover:scale-[1.02] transition-transform"
    >
      {/* Header Section */}
      <div
        className="flex items-center justify-between"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div>
          <h3 className="text-white text-[18px] font-bold">
            {experience.title}
          </h3>
          <p className="text-gray-400 text-[16px] mt-1">
            {experience.company_name}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-secondary text-[14px]">{experience.date}</p>
          {isExpanded ? (
            <MdKeyboardArrowUp size={24} color="#6d1ddb" />
          ) : (
            <MdKeyboardArrowDown size={24} color="#6d1ddb" />
          )}
        </div>
      </div>

      {/* Expandable Details */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="expandable-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: "easeInOut" },
              opacity: { duration: 0.3, ease: "easeInOut" },
            }}
            className="mt-4 bg-gray-700 p-6 rounded-lg shadow-inner"
          >
            {/* Logo and Points Section */}
            <div className="flex flex-col items-center md:flex-row gap-6 md:items-start">
              {/* Logo */}
              <img
                src={experience.icon}
                alt={`${experience.company_name} logo`}
                className={`w-16 h-16 rounded-lg bg-white p-2 object-contain shadow-md`}
              />

              {/* Points List */}
              <ul className="flex-1 list-disc list-inside space-y-2">
                {experience.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: idx * 0.05,
                    }}
                    className="text-gray-300 text-[14px] leading-6"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
        <p className={styles.sectionSubText}>
          Stories of collaboration, innovation, and impact
        </p>
        <h3 className={styles.sectionHeadText}>My Work</h3>
      </motion.div>

      <div className="flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.title}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Wrapper(Experience, "experience");
