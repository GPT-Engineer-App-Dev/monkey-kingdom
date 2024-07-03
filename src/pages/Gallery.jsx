import React from 'react';

const galleryImages = [
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
];

const Gallery = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;