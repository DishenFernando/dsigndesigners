"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import "./About.css"

const About = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
  })

  const finalCounts = {
    projects: 150,
    clients: 50,
    experience: 2,
  }

  useEffect(() => {
    const animateCounters = () => {
      Object.keys(finalCounts).forEach((key) => {
        let start = 0
        const end = finalCounts[key]
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounters((prev) => ({ ...prev, [key]: end }))
            clearInterval(timer)
          } else {
            setCounters((prev) => ({ ...prev, [key]: Math.floor(start) }))
          }
        }, 16)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    const statsElement = document.querySelector(".stats-container")
    if (statsElement) observer.observe(statsElement)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="background-elements">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="section-badge">About Me</span>
          <h2 className="section-title">
            Crafting Digital
            <span className="title-highlight"> Experiences</span>
          </h2>
          <p className="section-subtitle">Passionate designer with a keen eye for detail and innovation</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-content">
              <p className="about-description">
                I'm a passionate designer specializing in creating stunning visual identities and digital experiences.
                With over 5 years of experience in the industry, I've had the privilege of working with diverse clients
                across various sectors.
              </p>
              <p className="about-description">
                My approach combines strategic thinking with creative execution, ensuring every project not only looks
                exceptional but also serves its intended purpose effectively. I believe great design should tell a story
                and create meaningful connections between brands and their audiences.
              </p>
              <div className="skills-tags">
                <span className="skill-tag">Brand Identity</span>
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Web Design</span>
                <span className="skill-tag">Print Design</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="visual-container">
              <div className="main-card">
                <div className="card-content">
                  <div className="profile-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3>Design Excellence</h3>
                  <p>Creating impactful solutions</p>
                </div>
              </div>
              <div className="floating-elements">
                <div className="float-card card-1">
                  <div className="card-icon">🎨</div>
                </div>
                <div className="float-card card-2">
                  <div className="card-icon">✨</div>
                </div>
                <div className="float-card card-3">
                  <div className="card-icon">🚀</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="stats-container"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{counters.projects}+</div>
              <div className="stat-label">Projects Completed</div>
              <div className="stat-description">Successful deliveries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.clients}+</div>
              <div className="stat-label">Happy Clients</div>
              <div className="stat-description">Satisfied customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.experience}+</div>
              <div className="stat-label">Years Experience</div>
              <div className="stat-description">Industry expertise</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
