// src/pages/Gallery.js
import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import '../styles/pages/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Create array of gallery images using public path - removed unsupported formats
  const galleryImages = [
    { id: 1, src: '/images/Gallery/060524015.png', alt: "Gallery Image 1" },
    { id: 2, src: '/images/Gallery/20240409_153103.jpg', alt: "Gallery Image 2" },
    { id: 3, src: '/images/Gallery/DSC_0395.JPG', alt: "Gallery Image 3" },
    { id: 4, src: '/images/Gallery/DSC09116.jpg', alt: "Gallery Image 4" },
    { id: 13, src: '/images/Gallery/P1080810.JPG', alt: "Gallery Image 13" },
    { id: 14, src: '/images/Gallery/P1081099.JPG', alt: "Gallery Image 14" },
    { id: 15, src: '/images/Gallery/P1081106.JPG', alt: "Gallery Image 15" },
    { id: 16, src: '/images/Gallery/P1081132.JPG', alt: "Gallery Image 16" },
    { id: 17, src: '/images/Gallery/P1081152.JPG', alt: "Gallery Image 17" },
    { id: 18, src: '/images/Gallery/P1091479.JPG', alt: "Gallery Image 18" },
    { id: 19, src: '/images/Gallery/P1091499(1).JPG', alt: "Gallery Image 19" },
    { id: 20, src: '/images/Gallery/PXL_20240503_194311812.MP(1).jpg', alt: "Gallery Image 20" },
    { id: 21, src: '/images/Gallery/PXL_20241009_164720012.jpg', alt: "Gallery Image 21" },
    { id: 22, src: '/images/Gallery/PXL_20241011_114716623.jpg', alt: "Gallery Image 22" },
    { id: 23, src: '/images/Gallery/PXL_20250421_111514574~2.jpg', alt: "Gallery Image 23" },
    { id: 24, src: '/images/Gallery/PXL_20250421_111550904.MP~2.jpg', alt: "Gallery Image 24" },
    { id: 25, src: '/images/Gallery/received_323790254065392.jpeg', alt: "Gallery Image 25" }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="gallery-page">
      <PageHeader title="Fotogalerij" subtitle="Een verzameling van mijn fotografie" />
      
      <div className="container gallery-container">
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item" onClick={() => openModal(image)}>
              <img 
                src={`${process.env.PUBLIC_URL}${image.src}`} 
                alt={image.alt} 
                className="gallery-image" 
                onError={(e) => {
                  console.error(`Failed to load image: ${image.src}`);
                  e.target.src = `${process.env.PUBLIC_URL}/images/optimus_prime.png`; // Fallback image
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <img 
              src={`${process.env.PUBLIC_URL}${selectedImage.src}`} 
              alt={selectedImage.alt} 
              className="modal-image" 
              onError={(e) => {
                e.target.src = `${process.env.PUBLIC_URL}/images/optimus_prime.png`; // Fallback image
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;