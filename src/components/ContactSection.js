import React from 'react';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaPinterestP,
  FaTiktok,
  FaYoutube
} from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <footer className="social-footer" id='contact'>
      <div className="footer-container">
                <h2 className="section-title">Let's Connect</h2>

        <h3 className="footer-tagline">Join Our Natural Beauty Community</h3>
        
        <div className="social-grid">
          {/* Instagram */}
          <a 
            href="https://instagram.com/dermatoes" 
            className="social-icon instagram"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-svg" />
            <span className="social-tooltip">Follow on Instagram</span>
            <div className="social-wave"></div>
          </a>
          
          {/* Facebook */}
          <a 
            href="https://facebook.com/dermatoes" 
            className="social-icon facebook"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="social-svg" />
            <span className="social-tooltip">Like on Facebook</span>
            <div className="social-wave"></div>
          </a>
          
          {/* Twitter */}
          <a 
            href="https://twitter.com/dermatoes" 
            className="social-icon twitter"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-svg" />
            <span className="social-tooltip">Follow on Twitter</span>
            <div className="social-wave"></div>
          </a>
          
          {/* Pinterest */}
          <a 
            href="https://pinterest.com/dermatoes" 
            className="social-icon pinterest"
            aria-label="Pinterest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterestP className="social-svg" />
            <span className="social-tooltip">Pin on Pinterest</span>
            <div className="social-wave"></div>
          </a>
          
          {/* TikTok */}
          <a 
            href="https://tiktok.com/@dermatoes" 
            className="social-icon tiktok"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="social-svg" />
            <span className="social-tooltip">Follow on TikTok</span>
            <div className="social-wave"></div>
          </a>
          
          {/* YouTube */}
          <a 
            href="https://youtube.com/dermatoes" 
            className="social-icon youtube"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="social-svg" />
            <span className="social-tooltip">Subscribe on YouTube</span>
            <div className="social-wave"></div>
          </a>
        </div>
        
        <p className="copyright">
          © {new Date().getFullYear()} Dermatoes Naturals. Glow naturally.
        </p>
      </div>
    </footer>
  );
};

export default ContactSection;