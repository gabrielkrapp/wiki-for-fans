import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto">
        <input
          type="text"
          placeholder="Search for a character..."
          className="w-full p-2 rounded-md"
        />
      </div>
    </header>
  );
};

export default Header;
