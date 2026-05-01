import React, { useState, useEffect } from 'react';
import '../styles/projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [projectImages, setProjectImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      folder: "p01",
      title: "Evaluator.AI",
      subtitle: "AI-powered system for automated descriptive exam evaluation",
      description: [
        "Converts handwritten answer sheets into structured text using OCR",
        "Evaluates answers using AI with reasoning-based scoring",
        "Generates detailed feedback reports for students"
      ],
      tech: "React, Express, MongoDB, Google Vision API, Gemini AI",
      closing: "A step towards faster, fair, and scalable academic evaluation.",
      detailedDescription: "Evaluator.AI is an AI-powered automated paper evaluation system that transforms handwritten answer sheets into digital text using OCR technology. The system then evaluates answers using AI models that provide reasoning-based scoring, significantly reducing grading time while maintaining accuracy. It generates detailed feedback reports for students, helping them understand their strengths and areas for improvement. This solution addresses the challenges of manual evaluation in educational institutions, making the process faster, fairer, and more scalable.",
      features: [
        "Handwritten text recognition with 95%+ accuracy",
        "AI-powered scoring with detailed reasoning",
        "Automated feedback generation",
        "Teacher dashboard for review and adjustments",
        "Student portal for accessing results"
      ]
    },
    {
  id: 2,
  folder: "p02",
  title: "Mobile Event Ticketing System",
  subtitle: "A mobile solution for real-time event registration and ticket management",
  description: [
    "Real-time event registration and digital ticket generation",
    "Google Sheets API used as a lightweight backend for data management",
    "Seamless attendee verification and check-in system"
  ],
  tech: "React Native, Google Sheets API",
  closing: "Designed to simplify event operations with efficient registration and real-time ticket validation.",
  detailedDescription: "The Mobile-Based Event Ticket Management System is designed to streamline event registration, ticketing, and attendee verification through a mobile application. It enables users to register for events and receive digital tickets, while organizers can manage participants and validate entries in real time. By integrating Google Sheets API as a lightweight backend, the system ensures easy data handling and live synchronization. This solution enhances event efficiency by reducing manual processes and enabling smooth check-in experiences.",
  features: [
    "Mobile-based event registration system",
    "Digital ticket generation and validation",
    "Real-time syncing of participant and ticket data",
    "Organizer dashboard for managing registrations and check-ins",
    "Lightweight backend using Google Sheets API"
  ]
},
    {
      id: 3,
      folder: "p03",
      title: "Swipe-to-Pay Interaction Case Study",
      subtitle: "Exploring swipe gestures as a safer alternative for digital payment confirmations",
      description: [
        "Analyzed risks of accidental taps in payment flows and explored swipe as an intentional action pattern",
        "Designed interaction flows and wireframes demonstrating secure, gesture-based confirmations",
        "Evaluated usability, accessibility, and user trust through heuristic and comparative analysis"
      ],
      tech: "Figma, UX Research, Wireframing, Interaction Design",
      closing: "A conceptual study focused on improving payment safety and user confidence through deliberate interaction design.",
      detailedDescription: "This UX research project explores swipe gestures as a safer alternative to accidental taps in digital payment confirmations. The study analyzed existing payment flows, identified risks of unintended transactions, and proposed swipe-based interactions as a more intentional action pattern. Wireframes and interactive prototypes were created to demonstrate secure, gesture-based confirmations. Usability testing and heuristic evaluation were conducted to measure user trust, accessibility, and overall experience. The findings suggest that swipe gestures reduce accidental payments and increase user confidence in digital transactions.",
      features: [
        "User research and risk analysis",
        "Interactive wireframes and prototypes",
        "Heuristic evaluation methodology",
        "Comparative analysis with existing solutions",
        "Accessibility considerations"
      ]
    },
    {
  id: 4,
  folder: "p04",
  title: "AQ-Pulse: Air Quality Forecasting System",
  subtitle: "Real-time air quality monitoring and prediction using satellite + ground data",
  description: [
    "Integrates TEMPO satellite data with ground sensors and weather data",
    "Displays real-time AQI levels on an interactive map",
    "Provides short-term air quality forecasts and smart alerts"
  ],
  tech: "React, Node.js, NASA TEMPO API, OpenAQ, PurpleAir, OpenWeather",
  closing: "Focused on intelligent forecasting, public health awareness, and data-driven environmental insights.",
  detailedDescription: "AQ-Pulse is a web-based air quality monitoring and forecasting system that combines satellite data from NASA’s TEMPO mission with ground-based sensor networks like OpenAQ and PurpleAir, along with weather data. The system fuses these multiple data sources to provide accurate, localized air quality insights. Users can view real-time AQI levels on an interactive map, understand pollutant breakdowns, and receive predictive alerts based on upcoming trends. By leveraging both space-based and ground-based observations, AQ-Pulse delivers a more reliable and actionable understanding of air quality conditions.",
  features: [
    "Real-time TEMPO satellite data integration",
    "Ground sensor data fusion (OpenAQ, PurpleAir)",
    "Weather-based air quality analysis",
    "Interactive map visualization (Flightradar-style)",
    "Short-term AQI prediction system",
    "Location-based alerts and notifications",
    "User-friendly dashboard and widget support"
  ]
},
    {
      id: 5,
      folder: "p05",
      title: "Congestion Control Explainable AI Model",
      subtitle: "Explainable AI model for network congestion control analysis",
      description: [
        "Predicts congestion patterns in network systems",
        "Provides interpretable insights using XAI techniques",
        "Enhances decision-making in traffic and data flow management"
      ],
      tech: "Machine Learning models, XAI frameworks",
      closing: "Bridging the gap between complex models and human understanding.",
      detailedDescription: "Congestion Control XAI is an explainable AI project that predicts network congestion patterns while providing interpretable insights into why certain predictions are made. Using machine learning models combined with Explainable AI frameworks like LIME and SHAP, the system helps network administrators understand congestion causes and take proactive measures. This approach bridges the gap between complex AI models and human decision-making, enabling better traffic management and resource allocation in network systems.",
      features: [
        "Congestion pattern prediction",
        "XAI-based interpretable outputs",
        "Network traffic analysis dashboard",
        "Proactive alert system",
        "Resource optimization recommendations"
      ]
    }
  ];

  // Load images for a specific project folder
  const loadProjectImages = async (folderName) => {
    try {
      const imageModules = import.meta.glob('../assets/projects/**/*.{png,jpg,jpeg,svg,gif,webp,JPG,PNG,JPEG}', { eager: false });
      
      const images = [];
      for (const path in imageModules) {
        if (path.includes(`/projects/${folderName}/`)) {
          const module = await imageModules[path]();
          const fileName = path.split('/').pop();
          const name = fileName.split('.').slice(0, -1).join('.');
          images.push({
            src: module.default,
            alt: `${folderName} - ${name}`,
            id: path
          });
        }
      }
      return images;
    } catch (error) {
      console.error(`Error loading images for ${folderName}:`, error);
      return [];
    }
  };

  // Load all project images on component mount
  useEffect(() => {
    const loadAllImages = async () => {
      const imagesMap = {};
      for (const project of projects) {
        const images = await loadProjectImages(project.folder);
        imagesMap[project.folder] = images;
      }
      setProjectImages(imagesMap);
    };
    loadAllImages();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const openImagePopup = (src, alt) => {
    setSelectedImage({ src, alt });
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          closeImagePopup();
        } else if (modalOpen) {
          closeModal();
        }
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalOpen, selectedImage]);

  return (
    <div className="projects-container">
      {/* Scrolling Grid Background */}
      <div className="grid-background">
        <div className="grid-lines"></div>
      </div>

      {/* Projects Header */}
      <section className="projects-header">
        <h1 className="projects-title">Selected Work</h1>
        <p className="projects-subtitle">
          A collection of systems, experiments, and ideas — built to solve real problems.
        </p>
      </section>

      {/* Projects List */}
      <section className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-number">0{project.id}</div>
            <div className="project-content">
              <h2 className="project-name">{project.title}</h2>
              <p className="project-subhead">{project.subtitle}</p>
              
              <ul className="project-description">
                {project.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              
              <div className="project-tech">
                <span className="tech-label">Built with:</span> {project.tech}
              </div>
              
              <p className="project-closing">{project.closing}</p>
              
              <button 
                className="view-case-btn"
                onClick={() => openModal(project)}
              >
                click here to view more
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer Line */}
      <div className="projects-footer">
        <p>More experiments. More systems. Always building.</p>
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-content-inner">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-subtitle">{selectedProject.subtitle}</p>
              <h3>Project Images</h3>
              
              {/* Screenshots Gallery */}
              {projectImages[selectedProject.folder] && projectImages[selectedProject.folder].length > 0 && (
                <div className="modal-gallery">
                  
                  
                  <div className="gallery-grid">
                    {projectImages[selectedProject.folder].map((img, idx) => (
                      <div 
                        key={idx}
                        className="gallery-item"
                        onClick={() => openImagePopup(img.src, img.alt)}
                      >
                        <img 
                          src={img.src}
                          alt={img.alt}
                          className="gallery-image"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Detailed Description */}
              <div className="modal-description">
                <h3>About the Project</h3>
                <p>{selectedProject.detailedDescription}</p>
              </div>
              
              {/* Features */}
              <div className="modal-features">
                <h3>Key Features</h3>
                <ul>
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {/* Tech Stack */}
              <div className="modal-tech">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  {selectedProject.tech.split(', ').map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Popup Modal - Same as Archive */}
      {selectedImage && (
        <div className="image-popup-overlay" onClick={closeImagePopup}>
          <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-popup-close" onClick={closeImagePopup}>×</button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="image-popup-img"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;