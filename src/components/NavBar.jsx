import "../styles/NavBar.scss";
import { motion, AnimatePresence } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import {
  hamburgerTopAnim,
  hamburgerMidAnim,
  hamburgerBotAnim,
  navbarSideAnim,
  navbarSideTitleAnim,
} from "../animation";

import { Link } from "react-router-dom";
import { Context } from "../context/Context";
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const { user } = useContext(Context);
  useEffect(() => {
    if (user) setCurrentUser(user.username);
  }, [user]);

  return (
    <header className="navbar" id="navbar">
      <motion.div className="burger-menu">
        <motion.svg
          viewBox="0 0 3.5 3.5"
          width="25"
          height="20"
          overflow="visible"
          preserveAspectRatio="none"
          onClick={() => setOpen(!isOpen)}
        >
          <motion.line
            x1="0"
            x2="5"
            y1="0"
            y2="0"
            stroke="#000"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            variants={hamburgerTopAnim}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
          />
          <motion.line
            x1="0"
            x2="5"
            y1="2"
            y2="2"
            stroke="#000"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            variants={hamburgerMidAnim}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
          />
          <motion.line
            x1="0"
            x2="5"
            y1="4"
            y2="4"
            stroke="#000"
            strokeWidth="4"
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
            onClick={() => setOpen(!isOpen)}
          >
            <motion.span
              variants={navbarSideTitleAnim}
              onClick={() => setOpen(!isOpen)}
              className="navbar_titles"
            >
              <Link to="/service">Services</Link>
            </motion.span>
            <motion.span
              variants={navbarSideTitleAnim}
              onClick={() => setOpen(!isOpen)}
            >
              <a
                href="/"
                className="navbar_titles"
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
            </motion.span>
            <motion.span
              variants={navbarSideTitleAnim}
              onClick={() => setOpen(!isOpen)}
            >
              <a
                href="/"
                className="navbar_titles"
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
            </motion.span>
            <motion.span
              variants={navbarSideTitleAnim}
              onClick={() => setOpen(!isOpen)}
            >
              <a
                href="/"
                className="navbar_titles"
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
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="logo">KCM.</div>
      <div className="titles">
        <nav>
          <ul>
            <li>
              <Link to="/service">
                Services<span></span>
              </Link>
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
        {currentUser ? (
          <span style={{ color: "black", fontSize: "1rem" }}>
            Welcome, {currentUser.toUpperCase()}
          </span>
        ) : (
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default NavBar;
