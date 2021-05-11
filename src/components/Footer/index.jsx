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
      <seccion class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/rdt-react-website/sign-up">How it works</Link>
            <Link to="/rdt-react-website/">Testimonials</Link>
            <Link to="/rdt-react-website/">Careers</Link>
            <Link to="/rdt-react-website/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/rdt-react-website/">Contact</Link>
            <Link to="/rdt-react-website/">Support</Link>
            <Link to="/rdt-react-website/">Destinations</Link>
            <Link to="/rdt-react-website/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/rdt-react-website/">Submit Video</Link>
            <Link to="/rdt-react-website/">Ambassadors</Link>
            <Link to="/rdt-react-website/">Agency</Link>
            <Link to="/rdt-react-website/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/rdt-react-website/">Instagram</Link>
            <Link to="/rdt-react-website/">Facebook</Link>
            <Link to="/rdt-react-website/">Youtube</Link>
            <Link to="/rdt-react-website/">Twitter</Link>
          </div>
        </div>
      </seccion>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/rdt-react-website/" className="social-logo">
              RDT
            </Link>
          </div>
          <small class="website-rights">garridorafa © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/rdt-react-website/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/rdt-react-website/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/rdt-react-website/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/rdt-react-website/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/rdt-react-website/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
