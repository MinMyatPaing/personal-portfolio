import { motion } from "framer-motion";
import { useState } from "react";

import Wrapper from "../../hoc";
import { textVariant, fadeIn } from "../../utils/motion";
import { styles } from "../../styles";
import { projects } from "../../constants";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  const categories = ["web", "mobile", "ML"];
  const [selectedCategory, setSelectedCategory] = useState("web");

  return (
    <>
      {/* Heading */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>
          A showcase of my skills and creativity
        </p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex justify-center mt-10 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.1 }}
            className={`mx-2 px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects
          .filter((project) => project.category === selectedCategory)
          .map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              fadeIn={fadeIn}
            />
          ))}
      </div>
    </>
  );
};

export default Wrapper(Projects, "projects");
