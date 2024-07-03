import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our website dedicated to monkeys! Our mission is to provide comprehensive information about various monkey species, their habitats, behaviors, and conservation efforts.
      </p>
      <h2 className="text-2xl font-semibold mb-2">History</h2>
      <p className="mb-4">
        Monkeys have fascinated humans for centuries. They are known for their intelligence, social behaviors, and diverse species. Our website aims to educate and raise awareness about these incredible creatures.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Interesting Facts</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Monkeys are primates, a group that also includes apes and humans.</li>
        <li>There are over 260 known species of monkeys.</li>
        <li>Monkeys are found in various habitats, including forests, savannas, and mountains.</li>
        <li>Some monkey species are highly social and live in large groups called troops.</li>
      </ul>
    </div>
  );
};

export default About;