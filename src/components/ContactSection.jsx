import { 
  FaInstagram, 
  FaFacebookF, 
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
            href="https://www.instagram.com/dermatoesnaturals/" 
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
            href="https://www.facebook.com/profile.php?id=61563567328835" 
            className="social-icon facebook"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="social-svg" />
            <span className="social-tooltip">Like on Facebook</span>
            <div className="social-wave"></div>
          </a>
         
          
          {/* TikTok */}
         <div

  className="social-icon tiktok"
 
>
  <div className="tiktok-icon-container">
    <FaTiktok className="social-svg" />
  </div>
  <span className="social-tooltip">Follow on TikTok</span>
  <div className="social-wave"></div>
</div>
          
          {/* YouTube */}
          <div
            className="social-icon youtube"
          >
            <FaYoutube className="social-svg" />
            <span className="social-tooltip">Subscribe on YouTube</span>
            <div className="social-wave"></div>
          </div>
        </div>
        
        <p className="copyright">
          © {new Date().getFullYear()} Dermatoes Naturals. Glow naturally.
        </p>
      </div>
    </footer>
  );
};

export default ContactSection;