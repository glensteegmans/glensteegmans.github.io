import React, { useState } from 'react';
import '../../styles/components/ActivityGallery.css';

const ActivityGallery = ({ featuredActivities }) => {
  const [selectedActivity, setSelectedActivity] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Mock images for each activity - in a real scenario, these would come from your data
  const galleryImages = {
    'hack-the-future': [
      { src: '/images/activities/hack-future-1.jpg', alt: 'Hack The Future team working', caption: 'Samenwerken aan een .NET Core oplossing' },
      { src: '/images/activities/hack-future-2.jpg', alt: 'Hack The Future presentation', caption: 'Presentatie van onze oplossing' },
      { src: '/images/activities/hack-future-3.jpg', alt: 'Hack The Future venue', caption: 'De Beurs in Antwerpen' },
      { src: '/images/activities/hack-the-future.jpg', alt: 'Hack The Future logo', caption: 'Hack The Future logo' },
    ],
    'esn-belgium': [
      { src: '/images/activities/esn-1.jpg', alt: 'ESN Belgium meeting', caption: 'Nationale vergadering in Brussel' },
      { src: '/images/activities/esn-2.jpg', alt: 'ESN website work', caption: 'Werken aan de nieuwe website' },
      { src: '/images/activities/esn-3.jpg', alt: 'ESN event', caption: 'International Student Event in Hasselt' },
      { src: '/images/activities/esn-belgium.jpg', alt: 'ESN Belgium logo', caption: 'ESN Belgium logo' },
    ],
    'insticc-stage': [
      { src: '/images/activities/insticc-1.jpg', alt: 'INSTICC office', caption: 'Kantoor in Setúbal' },
      { src: '/images/activities/insticc-2.jpg', alt: 'Working on ML models', caption: 'Werken aan machine learning modellen' },
      { src: '/images/activities/insticc-3.jpg', alt: 'Team meeting', caption: 'Team meeting met internationale collega\'s' },
      { src: '/images/activities/insticc-stage.jpg', alt: 'INSTICC logo', caption: 'INSTICC logo' },
    ]
  };

  // Get all images for the "All" category
  const allImages = Object.values(galleryImages).flat();

  // Display images based on selected activity
  const displayImages = selectedActivity === 'all' ? allImages : galleryImages[selectedActivity] || [];

  // Open image modal
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close image modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="activity-gallery">
      <div className="gallery-filter">
        <button 
          className={`filter-btn ${selectedActivity === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedActivity('all')}
        >
          Alle Foto's
        </button>
        {featuredActivities.map((activity) => (
          <button 
            key={activity.id}
            className={`filter-btn ${selectedActivity === activity.id ? 'active' : ''}`}
            onClick={() => setSelectedActivity(activity.id)}
          >
            {activity.title.split(' - ')[0]}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {displayImages.map((image, index) => (
          <div 
            className="gallery-item" 
            key={index}
            onClick={() => openModal(image)}
          >
            <img src={image.src} alt={image.alt} />
            <div className="image-caption">{image.caption}</div>
          </div>
        ))}

        {/* Placeholder message if no images are available */}
        {displayImages.length === 0 && (
          <div className="no-images-message">
            <p>Geen foto's beschikbaar voor deze activiteit.</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-caption">{selectedImage.caption}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityGallery;