// SplashScreen.jsx
import { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 8;
      });
    }, 120);

    // Show tagline after logo animation
    setTimeout(() => setShowTagline(true), 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setVisible(false);
        onFinish();
      }, 800);
    }
  }, [progress, onFinish]);

  if (!visible) return null;

  return (
    <div className="splash-container">
      <div className="background-effects">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="splash-content">
        <div className="logo-section">
          <div className="logo-animation">
            <span className="logo-letter" data-letter="D">D</span>
            <span className="logo-separator">-</span>
            <span className="logo-letter" data-letter="S">S</span>
            <span className="logo-letter" data-letter="I">I</span>
            <span className="logo-letter" data-letter="G">G</span>
            <span className="logo-letter" data-letter="N">N</span>
          </div>
          <div className="brand-subtitle">DESIGNERS</div>
          <div className={`tagline ${showTagline ? 'show' : ''}`}>
            Crafting Digital Excellence
          </div>
        </div>
        
        <div className="progress-section">
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }}
            >
              <div className="progress-glow"></div>
            </div>
            <div className="progress-text">{progress}%</div>
          </div>
        </div>
      </div>
      
      <div className="corner-decorations">
        <div className="corner-decoration top-left"></div>
        <div className="corner-decoration top-right"></div>
        <div className="corner-decoration bottom-left"></div>
        <div className="corner-decoration bottom-right"></div>
      </div>
    </div>
  );
};

export default SplashScreen;