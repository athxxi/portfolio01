import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Scrolling Grid Background */}
      <div className="grid-background">
        <div className="grid-lines"></div>
      </div>

      {/* About Content */}
      <section className="about-hero">
        <div className="about-content">
          <h1 className="about-name">About Me</h1>
          <p className="about-intro">
            I'm a Computer Science Engineering student with a strong focus on building practical, scalable solutions.
          </p>
          <p className="about-text">
            My work lies at the intersection of development, design, and leadership — where ideas evolve into real-world systems.
          </p>
          <p className="about-text">
            I've worked on projects ranging from AI-powered exam evaluation platforms to IoT-based environmental monitoring systems. 
            Along the way, I've also taken on leadership roles, organizing hackathons and building communities that encourage innovation.
          </p>
          <p className="about-text">
            I enjoy simplifying complex problems, designing clean interfaces, and experimenting with emerging technologies.
          </p>
          <p className="about-text">
            Beyond code, I'm deeply involved in branding, poster design, and creating experiences that leave an impact.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Development</h3>
            <p>React • Node.js • MongoDB • Django • Google Scripts</p>
          </div>
          <div className="skill-category">
            <h3>Technologies</h3>
            <p>AI Integration • IoT Systems • Cloud Concepts</p>
          </div>
          <div className="skill-category">
            <h3>Creative</h3>
            <p>UI/UX Design • Poster Design • Branding • Photography</p>
          </div>
          <div className="skill-category">
            <h3>Leadership</h3>
            <p>Hackathon Management • Team Coordination • Community Building</p>
          </div>
        </div>
      </section>

      {/* Closing Line */}
      <div className="closing-line">
        <p>Always building. Always learning.</p>
      </div>
    </div>
  );
};

export default About;