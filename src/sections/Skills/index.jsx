import React from "react";
import { technologies } from "../../constants";

export default function Skills() {
  return (
    <div className="bg-backcolor py-10 overflow-hidden">
      <div className="relative">
        {/* Marquee Container */}
        <div className="flex animate-marquee space-x-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center relative p-4 group"
            >
              <div className="absolute inset-0 bg-gray-700 bg-opacity-50 rounded-full transition-opacity group-hover:opacity-0"></div>
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
          {/* Duplicate the content for seamless looping */}
          {technologies.map((tech, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex items-center justify-center relative p-4 group"
            >
              <div className="absolute inset-0 bg-gray-700 bg-opacity-50 rounded-full transition-opacity group-hover:opacity-0"></div>
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
