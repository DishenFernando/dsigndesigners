// Services.jsx
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    title: "Logo Design",
    description: "Unique and memorable logos that represent your brand identity.",
    icon: "🎨",
    color: "#6e8efb"
  },
  {
    title: "Banner Design",
    description: "Eye-catching banners for websites, social media, and advertisements.",
    icon: "🖼️",
    color: "#a777e3"
  },
  {
    title: "Flyer Design",
    description: "Professional flyers that effectively communicate your message.",
    icon: "📄",
    color: "#f78da7"
  },
  {
    title: "Poster Design",
    description: "Creative posters for events, promotions, and announcements.",
    icon: "📢",
    color: "#47b8e0"
  },
  {
    title: "Business Card Design",
    description: "Elegant business cards that leave a lasting impression.",
    icon: "📇",
    color: "#6cbf84"
  },
  {
    title: "Social Media Graphics",
    description: "Engaging graphics tailored for various social media platforms.",
    icon: "📱",
    color: "#ff9a44"
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We offer a wide range of design services to meet your needs</p>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="service-icon"
                style={{ backgroundColor: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div 
                className="service-hover-bg"
                style={{ backgroundColor: service.color }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;