import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div>
      <h1>Pokémon Abilities</h1>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <h3>Abilities:</h3>
          <ul>
            {pokemonData.abilities.map(ability => (
              <li key={ability.ability.name}>
                <p>Name: {ability.ability.name}</p>
                <p>URL: {ability.ability.url}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
