import { useState } from 'react';
import axios from 'axios';


export const HomeComponent = () => {
    const [pokemonName, setPokemonName] = useState([]);
    const [loaded, setLoaded] = useState(false);

    if (!loaded) {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                setPokemonName(response.data.results)
                setLoaded(true);
            })
            .catch(error => {
                console.error('Error fetching Pokémon data:', error);
                setLoaded(true);
            });
    }


    return (
        <>
            <h1>Fetch Pokemon</h1>
            <ul>
                {pokemonName.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </>
    );
};

