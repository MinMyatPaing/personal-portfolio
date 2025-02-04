import { motion } from "framer-motion";
import { github } from "../../../assets";

const ProjectCard = ({ project, index, fadeIn }) => {
  return (
    <motion.div
      key={project.name}
      variants={fadeIn("up", "spring", 0.5 * index, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full sm:w-[400px] h-[300px] relative rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.05] group"
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover"
      />

      {/* Hover Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-grey to-transparent opacity-0.5 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out" />

      {/* Hover Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        {/* Project Title - Slide In From Top */}
        <motion.h3
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[24px] font-bold text-white text-center"
        >
          {project.name}
        </motion.h3>

        {/* Project Description - Slide In From Bottom */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-[16px] text-gray-300 text-center"
        >
          {project.description}
        </motion.p>

        {/* Tags and GitHub Link */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-between items-center mt-5 w-full"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-sm font-medium ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* GitHub Icon */}
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:bg-primary transition-all"
          >
            <img src={github} alt="GitHub" className="w-6 h-6 object-contain" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
