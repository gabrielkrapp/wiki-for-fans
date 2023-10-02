import React, { useState, useEffect } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const Header: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);
  
  return (
    <header className="bg-gray-100 p-5 shadow-md">
    <div className="container mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a character..."
          className="w-full p-3 pl-10 rounded-md border-0 bg-white shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white transition-colors"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  </header>
  );
};

export default Header;
