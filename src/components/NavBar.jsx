import "../styles/NavBar.scss";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  hamburgerTopAnim,
  hamburgerMidAnim,
  hamburgerBotAnim,
} from "../animation";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="navbar">
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
                  let contact = document.getElementById("contact_section");
                  e.preventDefault();
                  contact && contact.scrollIntoView();
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
          <button type="submit">Login</button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
