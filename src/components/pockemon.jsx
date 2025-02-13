import "./pokemon.css"
import { useEffect, useState } from "react"
import { PokemonCards } from "./PokemonCards";
import { Loading } from "./Loading";

export const Pokmon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=152";

    const featchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();

            const detailedPokemonData = data.results.map(async (curPokmon) => {
                const res = await fetch(curPokmon.url);
                const data = await res.json();
                return data;
            });

            const detaileResponses = await Promise.all(detailedPokemonData);
            setPokemon(detaileResponses);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(error)
        }
    }

    useEffect(() => {
        featchPokemon()
    }, []);


    const searchData = pokemon.filter((curPokemon) => {
        if (!curPokemon.name) return false;
        return curPokemon.name.toLowerCase().includes(search?.toLowerCase() || "");
    });
    


    if (loading) {
        return <div className="loading-style">
            <h1><Loading /></h1>
        </div>
    }

    if (error) {
        return <div className="error">
            <h1>{error.message}</h1>
        </div>
    }

    return (
        <>
            <section className="container">
                <header>
                    <h1>Lets Catch Pokemon</h1>
                </header>
                <div className="pokemon-search">
                    <input
                        type="text"
                        placeholder="search Pokemon..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div>
                    <ul className="cards">
                        {
                            searchData.map((curPokemon) => {
                                return <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}