// NavigationBar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";

import { navLinks } from "../../constants";
import logo from "../../assets/logo.svg";
import SlideButton from "./components/SlideButton";
import { fullScreenMenuVariants, menuItemVariants } from "../../utils/motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const [active, setActive] = useState("");

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const MenuBall = () => (
    <motion.div
      initial={{
        y: -100,
        scale: isScrolled || isSmallScreen ? 1 : 0,
        opacity: 0,
      }}
      animate={{
        y: 0,
        scale: isScrolled || isSmallScreen ? 1 : 0,
        opacity: isScrolled || isSmallScreen ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`fixed ${
        isSmallScreen ? "top-3 right-3" : "top-8 right-8"
      } z-50`}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(true)}
        className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      >
        <MdMenu size={24} />
      </motion.button>
    </motion.div>
  );

  return (
    <>
      {/* Regular Navbar */}
      <motion.nav
        initial={false}
        animate={{
          y: isScrolled ? -100 : 0,
          opacity: isScrolled ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full bg-backcolor shadow-md z-40"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href=""
              className="cursor-pointer"
              onClick={() => {
                setActive("");
                window.scrollTo({});
              }}
            >
              <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
            </a>

            {!isSmallScreen ? (
              <ul className="list-none hidden md:flex  items-center space-x-8">
                {navLinks.map((link) => {
                  if (link.title === "Contact") {
                    return (
                      <SlideButton
                        key={link.id}
                        title={"Contact Me"}
                        id={link.id}
                        onClick={() => setActive(link.title)}
                      />
                    );
                  }

                  return (
                    <li
                      key={link.title}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } hover:text-white text-[18px] font-medium cursor-pointer`}
                      onClick={() => setActive(link.title)}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <MenuBall />
            )}
          </div>
        </div>
      </motion.nav>

      <MenuBall />

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={fullScreenMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            style={{ originX: 1, originY: 0 }}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white w-14 h-14 rounded-full flex items-center justify-center"
            >
              <MdClose size={24} color={"#C084FC"} />
            </motion.button>

            {/* Menu Content */}
            <div className="text-center">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="cursor-pointer mb-8 flex justify-center items-center"
                onClick={() => {
                  setActive("");
                  window.scrollTo({});
                }}
              >
                <img src={logo} alt="Logo" className="w-[120px] h-[120px]" />
              </motion.a>

              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.title}
                    custom={i}
                    variants={menuItemVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[22px] font-medium cursor-pointer`}
                    onClick={() => {
                      setActive(link.title);
                      setIsMenuOpen(false);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
