import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Scrolling Grid Background */}
      <div className="grid-background">
        <div className="grid-lines"></div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-name">
            ATHUL KRISHNA SASIDHARAN
            <span className="hero-subhead">Builder. Designer. Problem Solver.</span>
          </h1>
          <p className="hero-quote">I turn ideas into systems — and systems into impact.</p>
          <p className="hero-bio">
            Computer Science student exploring the intersection of technology, design, and innovation.
            <br />
            From AI-powered evaluation systems to hackathon ecosystems — I build things that matter.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/archive" className="btn-secondary">Explore Archive</a>
          </div>
        </div>
      </section>

      {/* Bottom Strip */}
      <div className="bottom-strip">
        <p>Code. Create. Lead. Repeat.</p>
      </div>

      {/* Experience Section */}
      <section className="experience" id="work">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          <div className="exp-row">
            <span className="exp-role">Secretary</span>
            <span className="exp-org">MATRICS MESCE</span>
            <span className="exp-date">2025 — Present</span>
          </div>
          <div className="exp-row">
            <span className="exp-role">Student Lead</span>
            <span className="exp-org">CODEX Coding Club</span>
            <span className="exp-date">2025 — Present</span>
          </div>
          <div className="exp-row">
            <span className="exp-role">Graphic Designer & Technical Coordinator</span>
            <span className="exp-org">MATRICS & CODEX</span>
            <span className="exp-date">2024 — 2025</span>
          </div>
          <div className="exp-row">
            <span className="exp-role">React Native Intern</span>
            <span className="exp-org">Softfruit Solutions</span>
            <span className="exp-date">2024</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Evaluator.AI</h3>
            <p>AI-powered paper evaluation system using OCR and MERN stack. Automates handwritten answer sheet grading.</p>
            <div className="project-tech">MERN · AI · OCR</div>
          </div>
          <div className="project-card">
            <h3>Mobile Event Ticketing System</h3>
            <p>Mobile-based ticketing system with real-time validation and Google Sheets API backend.</p>
            <div className="project-tech">React Native · API</div>
          </div>
          <div className="project-card">
            <h3>Swipe-to-Pay Interaction Case Study</h3>
            <p>Exploring swipe gestures as a safer alternative for digital payment confirmations</p>
            <div className="project-tech">A conceptual casestudy</div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="achievement">
        <h2 className="section-title">Achievements</h2>
        <div className="achievement-card">
          <div className="achievement-icon">🏆</div>
          <div className="achievement-details">
            <h3>NASA Space Apps Challenge 2024</h3>
            <p>Global Nominee · People's Choice Award</p>
            <span className="achievement-team">Team DarkNova</span>
          </div>
          <div className="achievement-icon">🥉</div>
          <div className="achievement-details">
            <h3>NASA Space Apps Challenge 2024</h3>
            <p>3rd Prize in Local Event at Jyothi Engineering College</p>
            <span className="achievement-team">Team DarkNova</span>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="techstack">
        <h2 className="section-title">Tech Stack</h2>
        <div className="techstack-list">
          <span>C</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Python</span>
          <span>React.js</span>
          <span>React Native</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>UI/UX Design</span>
          <span>Graphic Design</span>
        </div>
      </section>
    </div>
  );
};

export default Home;