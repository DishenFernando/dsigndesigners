import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaExternalLinkAlt, FaFilter, FaTimes } from 'react-icons/fa';
import './Work.css';

const projects = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Logo Design",
    image: "images/project1.jpg",
    color: "#6e8efb",
    description: "Complete brand identity design for a tech startup including logo, color palette, and brand guidelines.",
    client: "TechFlow Inc.",
    year: "2024"
  },
  {
    id: 2,
    title: "Marketing Campaign",
    category: "Banner Design",
    image: "images/project2.jpg",
    color: "#a777e3",
    description: "Digital marketing campaign banners for social media and web advertising.",
    client: "Creative Agency",
    year: "2024"
  },
  {
    id: 3,
    title: "Event Promotion",
    category: "Poster Design",
    image: "images/project3.jpg",
    color: "#f78da7",
    description: "Eye-catching poster design for annual music festival promotion.",
    client: "Music Festival",
    year: "2023"
  },
  {
    id: 4,
    title: "Product Launch",
    category: "Flyer Design",
    image: "images/project4.jpg",
    color: "#47b8e0",
    description: "Product launch flyer design with modern aesthetics and clear messaging.",
    client: "Startup Co.",
    year: "2024"
  },
  {
    id: 5,
    title: "Corporate Branding",
    category: "Business Cards",
    image: "images/project5.jpg",
    color: "#6cbf84",
    description: "Professional business card design with premium finishing and elegant typography.",
    client: "Law Firm",
    year: "2023"
  },
  {
    id: 6,
    title: "Social Media",
    category: "Digital Graphics",
    image: "images/project6.jpg",
    color: "#ff9a44",
    description: "Social media graphics package including posts, stories, and cover designs.",
    client: "Fashion Brand",
    year: "2024"
  },
  {
    id: 6,
    title: "Youtube Channel Thumbnail",
    category: "Digital Graphics",
    image: "images/1.jpg",
    color: "#ff9a44",
    description: "Youtube Thumbnail for a musician.",
    client: "Musician",
    year: "2024"
  },
  {
    id: 6,
    title: "Assignment",
    category: "Digital Graphics",
    image: "images/Assignment.jpg",
    color: "#ff9a44",
    description: "Social Media Flyer for a business.",
    client: "Business Brand",
    year: "2025"
  },
  {
    id: 6,
    title: "Banner Design",
    category: "Banner Design",
    image: "images/Banner.jpg",
    color: "#ff9a44",
    description: "Banner designed for awurudu function.",
    client: "St. Charles Youth Society",
    year: "2025"
  },
  {
    id: 6,
    title: "Banner Design",
    category: "Banner Design",
    image: "images/SSbanner.jpg",
    color: "#ff9a44",
    description: "Social media graphics package including posts, stories, and cover designs.",
    client: "Furniture Brand",
    year: "2024"
  }
];

const categories = ["All", "Logo Design", "Banner Design", "Poster Design", "Flyer Design", "Business Cards", "Digital Graphics"];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="work" className="work-section">
      <div className="work-background">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="bg-gradient-3"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">Explore our portfolio of creative projects that showcase our expertise and passion for design</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="filter-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="filter-icon">
            <FaFilter />
          </div>
          <div className="filter-buttons">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="work-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="work-card"
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="work-card-inner">
                  <div 
                    className="work-image"
                    style={{ 
                      background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`
                    }}
                  >
                    <img src={project.image || "/placeholder.svg"} alt={project.title} />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <motion.button
                          className="overlay-btn view-btn"
                          onClick={() => openModal(project)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaEye />
                        </motion.button>
                        <motion.button
                          className="overlay-btn link-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt />
                        </motion.button>
                      </div>
                    </div>
                    <div className="category-badge" style={{ backgroundColor: project.color }}>
                      {project.category}
                    </div>
                  </div>
                  <div className="work-info">
                    <h3 className="work-title">{project.title}</h3>
                    <p className="work-client">{project.client}</p>
                    <div className="work-meta">
                      <span className="work-year">{project.year}</span>
                      <div className="work-color" style={{ backgroundColor: project.color }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="view-all-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="view-all-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              <div className="modal-image">
                <img src={selectedProject.image || "/placeholder.svg"} alt={selectedProject.title} />
                <div className="modal-gradient" style={{ 
                  background: `linear-gradient(135deg, ${selectedProject.color}40, transparent)` 
                }}></div>
              </div>
              <div className="modal-info">
                <div className="modal-category" style={{ color: selectedProject.color }}>
                  {selectedProject.category}
                </div>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-description">{selectedProject.description}</p>
                <div className="modal-details">
                  <div className="detail-item">
                    <span className="detail-label">Client:</span>
                    <span className="detail-value">{selectedProject.client}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Year:</span>
                    <span className="detail-value">{selectedProject.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
