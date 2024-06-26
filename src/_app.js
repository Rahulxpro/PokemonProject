import React, { useState, useEffect } from "react";
import PokeThumbnail from "./PokeThumbnail.js";
import "./App.css";
export function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState({});
  const getAllPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await res.json();
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((prev) => [...prev, data]);
      });
    }
    createPokemonObject(data.results);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <div id="parent">
      <div id="section">
        <div className="content">
          <h2>PokeMon</h2>
          <h2>PokeMon</h2>
        </div>
        <div className="content2">
          <h2>KingDom</h2>
          <h2>KingDom</h2>
        </div>
      </div>
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.map((pokemon, index) => (
              <PokeThumbnail
                height={pokemon.height}
                weight={pokemon.weight}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                image={pokemon.sprites.other.dream_world.front_default}
                stat1={pokemon.stats[0].stat.name}
                stat2={pokemon.stats[1].stat.name}
                stat3={pokemon.stats[2].stat.name}
                stat4={pokemon.stats[3].stat.name}
                stat5={pokemon.stats[4].stat.name}
                stat6={pokemon.stats[5].stat.name}
                bs1={pokemon.stats[0].base_stat}
                bs2={pokemon.stats[1].base_stat}
                bs3={pokemon.stats[2].base_stat}
                bs4={pokemon.stats[3].base_stat}
                bs5={pokemon.stats[4].base_stat}
                bs6={pokemon.stats[5].base_stat}
              />
            ))}
          </div>
          <button className="load-more" onClick={() => getAllPokemons()}>
            More PokeMons
          </button>
        </div>
      </div>
    </div>
  );
}
