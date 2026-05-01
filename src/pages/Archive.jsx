import React, { useState, useEffect } from 'react';
import '../styles/archive.css';

const Archive = () => {
  const [designs, setDesigns] = useState([]);
  const [photographs, setPhotographs] = useState([]);
  const [experiments, setExperiments] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Load designs from /src/assets/designs/
        const designModules = import.meta.glob('../assets/designs/*.{png,jpg,jpeg,svg,gif,webp,JPG,PNG,JPEG}');
        // Load photographs from /src/assets/images/
        const imageModules = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg,gif,webp,JPG,PNG,JPEG}');
        // Load experiments from /src/assets/experiments/
        const experimentModules = import.meta.glob('../assets/experiments/*.{png,jpg,jpeg,svg,gif,webp,JPG,PNG,JPEG}');

        const loadedDesigns = [];
        for (const path in designModules) {
          const module = await designModules[path]();
          const fileName = path.split('/').pop();
          const name = fileName.split('.').slice(0, -1).join('.');
          loadedDesigns.push({ id: path, src: module.default, alt: name });
        }

        const loadedPhotographs = [];
        for (const path in imageModules) {
          const module = await imageModules[path]();
          const fileName = path.split('/').pop();
          const name = fileName.split('.').slice(0, -1).join('.');
          loadedPhotographs.push({ id: path, src: module.default, alt: name });
        }

        const loadedExperiments = [];
        for (const path in experimentModules) {
          const module = await experimentModules[path]();
          const fileName = path.split('/').pop();
          const name = fileName.split('.').slice(0, -1).join('.');
          loadedExperiments.push({ id: path, src: module.default, alt: name });
        }

        setDesigns(loadedDesigns);
        setPhotographs(loadedPhotographs);
        setExperiments(loadedExperiments);
        setLoading(false);
        
        console.log(`Loaded ${loadedDesigns.length} designs, ${loadedPhotographs.length} photos, ${loadedExperiments.length} experiments`);
      } catch (error) {
        console.error('Error loading images:', error);
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const openImagePopup = (src, alt) => setSelectedImage({ src, alt });
  const closeImagePopup = () => setSelectedImage(null);

  if (loading) {
    return (
      <div className="archive-container">
        <div className="grid-background">
          <div className="grid-lines"></div>
        </div>
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading archive...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="archive-container">
      {/* Scrolling Grid Background */}
      <div className="grid-background">
        <div className="grid-lines"></div>
      </div>

      {/* Archive Header */}
      <section className="archive-header">
        <h1 className="archive-title">Archive</h1>
        <p className="archive-subtitle">
          A collection of visuals, experiments, and moments.
        </p>
        <p className="archive-intro">
          From poster designs to event captures this space reflects the creative side of my journey.
        </p>
        
      </section>

      {/* Design Works Section */}
      <section className="archive-section">
        <h2 className="section-heading">Design Works</h2>
        <p className="section-subhead">Posters, branding concepts, and visual experiments.</p>
        <div className="section-tags">
          <span>Hackathon posters</span>
          <span>Comic-style event designs</span>
          <span>Minimal branding explorations</span>
        </div>
        {designs.length === 0 ? (
          <p className="no-images">No designs found in /src/assets/designs/ folder</p>
        ) : (
          <div className="pinterest-grid">
            {designs.map((img) => (
              <div key={img.id} className="grid-item" onClick={() => openImagePopup(img.src, img.alt)}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Photography Section */}
      <section className="archive-section">
        <h2 className="section-heading">Photography</h2>
        <p className="section-subhead">Captured moments from events, people, and places.</p>
        <div className="section-tags">
          <span>Hackathon scenes</span>
          <span>Campus life</span>
          <span>Creative shots</span>
        </div>
        {photographs.length === 0 ? (
          <p className="no-images">No photographs found in /src/assets/images/ folder</p>
        ) : (
          <div className="pinterest-grid">
            {photographs.map((img) => (
              <div key={img.id} className="grid-item" onClick={() => openImagePopup(img.src, img.alt)}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </section>

      

      {/* Closing Line */}
      <div className="archive-footer">
        <p>Design is thinking made visible.</p>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImagePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeImagePopup}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive;