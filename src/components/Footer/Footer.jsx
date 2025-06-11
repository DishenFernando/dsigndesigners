import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaArrowRight } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically handle the subscription
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      
      <div className="footer-top">
        <div className="container">
          <motion.div 
            className="footer-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h2>Ready to elevate your brand?</h2>
              <p>Let's create something amazing together</p>
            </div>
            <motion.a 
              href="#contact" 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <FaArrowRight className="icon-right" />
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-column brand-column">
            <div className="footer-brand">
              <h3 className="footer-logo">D-SIGN<span>STUDIO</span></h3>
              <div className="social-links">
                <a href="https://www.facebook.com/share/19MB8PgHuW/?mibextid=wwXIfr" className="social-link" aria-label="Facebook">
                  <FaFacebook />
                  <span className="social-tooltip">Facebook</span>
                </a>
                
                <a href="https://www.instagram.com/dsigndesigners?igsh=NjlxOHRkdmdqZnZp&utm_source=qr" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                  <span className="social-tooltip">Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/dishen-fernando-30ab60293/" className="social-link" aria-label="LinkedIn">
                  <FaLinkedin />
                  <span className="social-tooltip">LinkedIn</span>
                </a>
              </div>
            </div>
            <p className="footer-about">
              We create stunning visual designs that help businesses stand out and communicate effectively with their audience.
            </p>
            <div className="footer-newsletter">
              <h4>Subscribe to our newsletter</h4>
              <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="submit-btn">
                    {subscribed ? 'Subscribed!' : 'Subscribe'}
                  </button>
                </div>
                {subscribed && <p className="success-message">Thank you for subscribing!</p>}
              </form>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#"><span>Home</span></a></li>
              <li><a href="#services"><span>Services</span></a></li>
              <li><a href="#work"><span>Work</span></a></li>
              <li><a href="#about"><span>About</span></a></li>
              <li><a href="#contact"><span>Contact</span></a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#"><span>Logo Design</span></a></li>
              <li><a href="#"><span>Banner Design</span></a></li>
              <li><a href="#"><span>Flyer Design</span></a></li>
              <li><a href="#"><span>Poster Design</span></a></li>
              <li><a href="#"><span>Business Cards</span></a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Moratuwa, Colombo</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>dishenmalinga@gmail.com</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>+94 70 118 8941</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <div className="footer-divider">
          <div className="divider-line"></div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Design Studio. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
