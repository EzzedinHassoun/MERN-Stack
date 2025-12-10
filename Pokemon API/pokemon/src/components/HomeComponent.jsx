import { useEffect, useState }from 'react'

export const HomeComponent = () => {

    const [pokemonName, setPokemonName] = useState([]);


useEffect(()=>{

    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(data=> {
            console.log(data.results);
            setPokemonName(data.results)

        }).catch(err => {
            console.log(err);
        })

},[])
    return (
        <><h1>Fetch Pokemon</h1>
            <ul>
                {pokemonName.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </>

    )
}
