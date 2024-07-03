import React from 'react';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="hero-section mb-8">
        <img src="https://placehold.co/1200x600" alt="Monkey Hero" className="w-full h-64 object-cover rounded-lg mb-4" />
        <h1 className="text-4xl font-bold mb-2">Welcome to the Monkey World</h1>
        <p className="text-lg">Discover the fascinating world of monkeys, their species, habitats, and much more!</p>
      </div>
      <div className="introduction">
        <h2 className="text-3xl font-semibold mb-4">About Our Website</h2>
        <p>
          Our website is dedicated to providing comprehensive information about various monkey species, their habitats, behaviors, and conservation efforts. Explore our sections to learn more about these incredible creatures.
        </p>
      </div>
    </div>
  );
};

export default Index;