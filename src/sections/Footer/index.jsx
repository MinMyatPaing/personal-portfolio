import React from "react";
import { navLinks, socialLinks } from "../../constants";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="py-12 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Min Paing. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary text-2xl transition-all"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
