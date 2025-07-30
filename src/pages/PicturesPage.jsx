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
  '/images/ccd19.jpg',
  '/images/ccd20.jpg',
  '/images/ccd21.jpg',
  '/images/ccd22.jpg',
  '/images/ccd23.jpg',
  '/images/ccd24.jpg',
  '/images/ccd25.jpg',
  '/images/ccd26.jpg',
  '/images/ccd27.jpg',
  '/images/ccd28.jpg',
  '/images/ccd29.jpg',
  '/images/ccd30.jpg',
  '/images/ccd31.jpg',
  '/images/ccd32.jpg',
  '/images/ccd33.jpg',
  '/images/ccd34.jpg',
  '/images/ccd35.jpg',
  '/images/ccd36.jpg',
  '/images/ccd37.jpg',
  '/images/ccd38.jpg',
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
      <h1>Pictures</h1>
      <div className="gallery-grid">
        {shuffledImages.map((src, idx) => (
          <div className="gallery-item" key={idx}>
            <img src={src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PicturesPage; 