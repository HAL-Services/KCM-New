import React from "react";
import "../styles/Footer.scss";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_socials">
        <div className="footer_box">
          <h3>Follow Us on Social Media</h3>
          <span className="footer_ul">
            <span className="footer_icon insta">
              <a href="https://www.instagram.com/kcmautomobiles/">
                <AiOutlineInstagram />
              </a>
            </span>
            <span className="footer_icon fab">
              <a href="https://www.facebook.com/kcmautomobiles">
                <AiOutlineFacebook />
              </a>
            </span>
          </span>
        </div>
        <div>
          <h4>© Made By HAL Services.</h4>
          <h4>All Rights Reserved.</h4>
        </div>
      </div>
      <div className="footer_links">
        <div className="footer_gap">
          <div className="footer_list_continer">
            <div className="footer_list_head">Goto</div>
            <ul className="footer_list">
              <p>
                <span>
                  <a
                    style={{ color: "white" }}
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
                </span>
              </p>
              <p>
                <span>
                  <Link style={{ color: "white" }} to="/service">
                    Services
                  </Link>
                </span>
              </p>
              <p>
                <span>
                  <a
                    style={{ color: "white" }}
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
                </span>
              </p>
            </ul>
          </div>
          <div className="footer_list_continer">
            <div className="footer_list_head">Explore</div>
            <ul className="footer_list">
              <p>
                <span>Home</span>
              </p>
              <p>
                <span>
                  <a
                    style={{ color: "white" }}
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
                </span>
              </p>
              <p>
                <span>
                  <Link style={{ color: "white" }} to="/write">
                    Write Review
                  </Link>
                </span>
              </p>
            </ul>
          </div>
        </div>
        <div className="footer_gap">
          <div className="footer_list_continer">
            <div className="footer_list_head">Telephone</div>
            <ul className="footer_list">
              <p>
                <span>+91 099106 64597</span>
              </p>
            </ul>
          </div>
          <div className="footer_list_continer">
            <div className="footer_list_head">Email</div>
            <ul className="footer_list">
              <p>
                <span>kcmautomobiles@gmail.com</span>
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
