import "../styles/NavBar.scss";
import { motion, AnimatePresence } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  hamburgerTopAnim,
  hamburgerMidAnim,
  hamburgerBotAnim,
  navbarSideAnim,
  navbarSideTitleAnim,
} from "../animation";

import { Link } from "react-router-dom";
import { Context } from "../context/Context";
const NavBar = (props) => {
  const history = useHistory();
  const [isOpen, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const { user } = useContext(Context);
  const { dispatch } = React.useContext(Context);
  useEffect(() => {
    if (user) setCurrentUser(user.username.split(" ")[0]);
  }, [user]);

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("User");
    history.push("/");
  };

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

      <div className="logo">
        <Link to="/">KCM</Link>
      </div>
      <div className="titles">
        {props.titles.length === 4 ? (
          <nav>
            <ul>
              <li>
                <Link to="/service">
                  {props.titles[0]}
                  <span></span>
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
                  {props.titles[1]}
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
                  {props.titles[2]}
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
                  {props.titles[3]}
                </a>
                <span></span>
              </li>
            </ul>
          </nav>
        ) : (
          <div className="titles">
            <nav>
              <ul className="titlestwo">
                <li>
                  <Link to="/service">{props.titles[0]}</Link>
                  <span></span>
                </li>
                <li>
                  <Link to="/record">{props.titles[1]}</Link>
                  <span></span>
                </li>
                <li>
                  <Link to="/settings">{props.titles[2]}</Link>
                  <span></span>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      <div className="login-btn">
        {currentUser && props.titles.length === 4 ? (
          <span style={{ color: "black", fontSize: "1rem" }}>
            <Link to="/settings">Welcome, {currentUser.toUpperCase()}</Link>
          </span>
        ) : props.titles.length === 3 ? (
          <button onClick={handleClick}>LOGOUT</button>
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
