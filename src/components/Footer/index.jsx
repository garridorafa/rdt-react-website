import React from "react";

import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./styles.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Receive email updates on special promotions and products announcements
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe!</Button>
          </form>
        </div>
      </section>
      <section className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/rdt-react-website/sign-up">How it works</Link>
            <Link to="/rdt-react-website/">Testimonials</Link>
            <Link to="/rdt-react-website/">Careers</Link>
            <Link to="/rdt-react-website/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/rdt-react-website/">Contact</Link>
            <Link to="/rdt-react-website/">Support</Link>
            <Link to="/rdt-react-website/">Destinations</Link>
            <Link to="/rdt-react-website/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/rdt-react-website/">Submit Video</Link>
            <Link to="/rdt-react-website/">Ambassadors</Link>
            <Link to="/rdt-react-website/">Agency</Link>
            <Link to="/rdt-react-website/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/rdt-react-website/">Instagram</Link>
            <Link to="/rdt-react-website/">Facebook</Link>
            <Link to="/rdt-react-website/">Youtube</Link>
            <Link to="/rdt-react-website/">Twitter</Link>
          </div>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/rdt-react-website/" className="social-logo">
              RDT
            </Link>
          </div>
          <small className="website-rights">garridorafa © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/rdt-react-website/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/rdt-react-website/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/rdt-react-website/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/rdt-react-website/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/rdt-react-website/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
