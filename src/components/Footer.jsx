import React from "react";
import "../styles/Footer.scss";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_socials">
        <div className="footer_box">
          <h3>Follow Us on Social Media</h3>
          <span className="footer_ul">
            <span className="footer_icon insta">
              <AiOutlineInstagram />
            </span>
            <span className="footer_icon twit">
              <AiOutlineTwitter />
            </span>
            <span className="footer_icon git">
              <AiOutlineGithub />
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
            <div className="footer_list_head">Learn</div>
            <ul className="footer_list">
              <p>
                <span>About </span>
              </p>
              <p>
                <span>Culture</span>
              </p>
              <p>
                <span>Testimonial</span>
              </p>
              <p>
                <span>Blog</span>
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
                <span>Work</span>
              </p>
              <p>
                <span>Service</span>
              </p>
              <p>
                <span>Contact</span>
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
                <span>halsrvcs@gmail.com</span>
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
