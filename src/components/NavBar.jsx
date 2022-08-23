import "../styles/NavBar.scss";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {
  hamburgerTopAnim,
  hamburgerMidAnim,
  hamburgerBotAnim,
  navbarSideAnim,
} from "../animation";

import { Link } from "react-router-dom";
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigationTitles = [
    {
      id: 1,
      title: "Services",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Testimonial",
    },
    {
      id: 4,
      title: "Contact Us",
    },
  ];

  return (
    <header className="navbar" id="navbar">
      <motion.div className="burger-menu">
        <motion.svg
          viewBox="0 0 4 4"
          width="25"
          height="20"
          overflow="visible"
          preserveAspectRatio="none"
          onClick={() => setOpen(!isOpen)}
        >
          <motion.line
            x1="0"
            x2="4"
            y1="0"
            y2="0"
            stroke="#000"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            variants={hamburgerTopAnim}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
          />
          <motion.line
            x1="0"
            x2="4"
            y1="2"
            y2="2"
            stroke="#000"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            variants={hamburgerMidAnim}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
          />
          <motion.line
            x1="0"
            x2="4"
            y1="4"
            y2="4"
            stroke="#000"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            variants={hamburgerBotAnim}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
          />
        </motion.svg>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar_sidemenu"
            variants={navbarSideAnim}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {navigationTitles.map((e) => {
              return (
                <AnimatePresence exitBeforeEnter>
                  <motion.span
                    className="navbar_titles"
                    key={e.id}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -30, opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ delay: e.id * 0.25, duration: 0.3 }}
                    whileTap={{ scale: 1.1 }}
                  >
                    {e.title}
                  </motion.span>
                </AnimatePresence>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="logo">KCM.</div>
      <div className="titles">
        <nav>
          <ul>
            <li>
              Services<span></span>
            </li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  let contact = document.getElementById("about");
                  e.preventDefault();
                  contact &&
                    contact.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                    });
                }}
              >
                About
              </a>
              <span></span>
            </li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  let testimonial = document.getElementById("testimonial");
                  e.preventDefault();
                  testimonial &&
                    testimonial.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                Testimonial
              </a>
              <span></span>
            </li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  let contact = document.getElementById("contact_section");
                  e.preventDefault();
                  contact &&
                    contact.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                Contact Us
              </a>
              <span></span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="login-btn">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
