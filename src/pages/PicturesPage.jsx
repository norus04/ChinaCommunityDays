import React from 'react';

const images = [
  '/images/ccd1.jpg',
  '/images/ccd2.jpg',
  '/images/ccd3.jpg',
  '/images/ccd4.jpg',
  '/images/ccd5.jpg',
  '/images/ccd6.jpg',
  '/images/ccd7.jpg',
  '/images/ccd8.jpg',
  '/images/ccd9.jpg',
  '/images/ccd10.jpg',
  '/images/ccd11.jpg',
  '/images/ccd12.jpg',
  '/images/ccd13.jpg',
  '/images/ccd14.jpg',
  '/images/ccd15.jpg',
  '/images/ccd16.jpg',
  '/images/ccd17.jpg',
  '/images/ccd18.jpg',
];

// Fisher-Yates shuffle
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const PicturesPage = () => {
  const shuffledImages = shuffle(images);

  return (
    <div className="pictures-page">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {shuffledImages.map((src, idx) => (
          <div className="gallery-item" key={idx}>
            <img src={src} alt={`Gallery ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PicturesPage; 