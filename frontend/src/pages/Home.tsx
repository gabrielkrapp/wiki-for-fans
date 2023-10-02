import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

interface Character {
    name: string;
    firstName: string;
    image: string;
}

function Home() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);  


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Character[]>(`http://localhost:3000/naruto`);
                setCharacters(response.data);
                setFilteredCharacters(response.data);
            } catch (error) {
                console.error("Error to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (query: string) => {
        const results = characters.filter(character => 
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCharacters(results);
    }

    return (
        <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
            <Header onSearch={handleSearch}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {filteredCharacters.map((character) => (
                    <Link to={`/character/${character.firstName.toLowerCase()}`} key={character.name}>
                        <div key={character.name} className="box m-8 p-6 flex flex-col items-center bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105">
                            <img 
                            src={`http://localhost:3000${character.image}`} 
                            alt={character.name} 
                            className="w-64 h-64 object-contain rounded-xl mb-4"
                            />
                            <p className="text-center text-xl text-gray-800 font-semibold">{character.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
