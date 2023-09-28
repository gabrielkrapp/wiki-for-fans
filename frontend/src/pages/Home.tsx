import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';

interface Character {
    firstName: string;
    image: string;
}

function Home() {
    const [characters, setCharacters] = useState<Character[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Character[]>(`http://localhost:3000/naruto`);
                setCharacters(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
          <Header />
          <div className="grid grid-cols-4 gap-4 mt-8">
            {characters.map((character) => (
            <div key={character.firstName} className="box w-1/4 p-4 flex flex-col items-center">
            <img src={`http://localhost:3000${character.image}`} alt={character.firstName} className="w-32 h-32 object-cover rounded" />
            <h2 className="text-center mt-4">{character.firstName}</h2>
            </div>
            ))}
          </div>
        </div>
    );
};

export default Home;
