import React, { useEffect, useState } from 'react';
import "../../../styles/styles.css";

// Import images
import G1 from "../../../assets/gallery/G1.jpg";
import G1a from "../../../assets/gallery/G1a.jpg";
import G1b from "../../../assets/gallery/G1b.jpg";
import G2 from "../../../assets/gallery/G2.jpg";
import G3 from "../../../assets/gallery/G3.jpg";

function GallerySection() {
  const images3 = [G1, G1a, G1b];

  const [currentIndex3, setCurrentIndex3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex3((prevIndex) => (prevIndex + 1) % images3.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-20 mt-10">
      <div className="gallery-grid-1">
        <div className="image1 slider-container">
          <div className="slider-strip">
            {images3.map((image, index) => (
              <img key={index} src={image} className="gallery-img-1" alt={`gallery-${index}`} />
            ))}
            {/* Duplicate images to create seamless looping */}
            {images3.map((image, index) => (
              <img key={`duplicate-${index}`} src={image} className="gallery-img-1" alt={`gallery-duplicate-${index}`} />
            ))}
          </div>
        </div>
        <div>
          <img src={G2} className="gallery-img-2" alt="gallery" />
        </div>
        <div>
          <img src={G3} className="gallery-img-3" alt="gallery" />
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
