import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <input type="text" id="subject" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default Contact;