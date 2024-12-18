import { motion } from "framer-motion";
import { useState } from "react";

import Wrapper from "../../hoc";
import { textVariant, fadeIn } from "../../utils/motion";
import { styles } from "../../styles";
import { projects } from "../../constants";
import { github } from "../../assets";

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
            <motion.div
              key={project.name}
              variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full sm:w-[360px] p-4 bg-gray-900 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform"
            >
              {/* Project Image */}
              <div className="relative rounded-t-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[200px] object-cover"
                />
                {/* GitHub Icon */}
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-3 right-3 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:bg-primary transition-all"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>

              {/* Project Details */}
              <div className="p-5">
                <h3 className="text-[20px] font-bold text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-[14px] text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`text-sm font-medium ${tag.color}`}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default Wrapper(Projects, "projects");
