import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="footer-section w-100 mt-5 px-5 py-5 d-flex justify-content-center align-items-center">
      <div className="right-part w-50">
        <p>GET IN TOUCH</p>
      </div>
      
      <div className="left-part w-25">
        <ul>
          <li>
            <a href="/#">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
          </li>
          <li>
            <a href="/#">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </li>
          <li>
            <a href="/#">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
