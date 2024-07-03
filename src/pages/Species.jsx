import React from 'react';

const speciesList = [
  { name: 'Chimpanzee', description: 'Chimpanzees are great apes found in the forests and savannas of tropical Africa.', image: 'https://placehold.co/600x400' },
  { name: 'Gorilla', description: 'Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Sub-Saharan Africa.', image: 'https://placehold.co/600x400' },
  { name: 'Orangutan', description: 'Orangutans are great apes native to Indonesia and Malaysia. They are found in the rainforests of Borneo and Sumatra.', image: 'https://placehold.co/600x400' },
  { name: 'Baboon', description: 'Baboons are African and Arabian Old World monkeys belonging to the genus Papio, part of the subfamily Cercopithecinae.', image: 'https://placehold.co/600x400' },
];

const Species = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Monkey Species</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {speciesList.map((species, index) => (
          <div key={index} className="border rounded-lg p-4">
            <img src={species.image} alt={species.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{species.name}</h2>
            <p>{species.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Species;