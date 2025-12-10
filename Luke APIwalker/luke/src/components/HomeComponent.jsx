import { useState } from "react";
import axios from "axios";


const HomeComponent = () => {
    const [character, setCharacter] = useState(null)
    const [id, setId] = useState('')
    const [type, setType] = useState('')




    const getCharacter = (e) => {
        e.preventDefault()
        axios.get(`https://swapi.tech/api/${type}/${id}`).then(res => {
                setCharacter(res.data.result.properties); 
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            <div>
                <h1>Star Wars API</h1>
                <form onSubmit={getCharacter} ></form>
                <input type="number" onChange={(e) => setId(e.target.value)} value={id} />
                <select onClick={(e) => setType(e.target.value)}>
                    <option value="planets">planets</option>
                    <option value="people">people</option>
                </select>
                <button onClick={getCharacter}>Search</button>



                {character && (
                    <ul>
                        <li><strong>Name:</strong> {character.name}</li>

                        {type === "people" && (
                            <>
                                <li><strong>Height:</strong> {character.height}</li>
                                <li><strong>Mass:</strong> {character.mass}</li>
                                <li><strong>Hair Color:</strong> {character.hair_color}</li>
                                <li><strong>Skin Color:</strong> {character.skin_color}</li>
                            </>
                        )}

                        {type === "planets" && (
                            <>
                                <li><strong>Climate:</strong> {character.climate}</li>
                                <li><strong>Terrain:</strong> {character.terrain}</li>
                                <li><strong>Population:</strong> {character.population}</li>
                                <li><strong>Surface Water:</strong> {character.surface_water}</li>
                            </>
                        )}
                    </ul>
                )}
            </div>
        </>
    )
}
export default HomeComponent;