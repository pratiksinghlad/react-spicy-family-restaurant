import React, { memo } from 'react';

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Spicy Family Restaurant. All rights reserved.</p>
        <p className="text-sm mt-1">Jagatpura, Rudrapur</p>
      </div>
    </footer>
  );
});

export default Footer;
