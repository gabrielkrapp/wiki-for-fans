import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Character {
  name: string;
  image: string;
  age: number,
  height: string,
  gender: string,
  mainJutsu: string,
  chakraElements: Array<String>,
}

const CharacterDetails: React.FC = () => {

  const [character, setCharacter] = useState<Character | null>(null);
  const { characterFirstName } = useParams<{ characterFirstName: string }>();

  const characterDetails = [
    { label: "Age", value: character?.age },
    { label: "Height", value: character?.height },
    { label: "Gender", value: character?.gender },
    { label: "Main Jutsu", value: character?.mainJutsu },
    { label: "Chakra Elements", value: character?.chakraElements.join(', ') }
  ];

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get<Character>(`http://localhost:3000/character/${characterFirstName}`);
            setCharacter(response.data);
        } catch (error) {
            console.error("Error to fetch data:", error);
        }
    };

    fetchData();
}, [characterFirstName]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow transition duration-200">
          🔙 Back
        </Link>
      </div>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <img 
          src={`http://localhost:3000${character.image}`} 
          alt={character.name} 
          className="w-full h-64 object-contain rounded-t-lg"
        />
        <h1 className="text-2xl mt-4 mb-2 font-bold text-center text-gray-800">{character.name}</h1>
        <ul className="divide-y divide-gray-200">
          {characterDetails.map((detail, index) => (
            <li key={index} className="py-2 flex justify-between">
              <span className="font-medium text-gray-600">{detail.label}</span>
              <span className="text-gray-800">{detail.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
