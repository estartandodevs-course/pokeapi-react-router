import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemons } from "../services/pokemonService";

export const PokemonList = () => {
  const [listPokemons, setListPokemons] = useState([]);

  useEffect(() => {
    const generatePokemonPromises = () =>
      Array(150)
        .fill()
        .map((_, index) =>
          getPokemons(index + 1).then((response) => response.data)
        );

    const pokemonPromises = generatePokemonPromises();

    Promise.all(pokemonPromises).then((pokemon) => setListPokemons(pokemon));
  }, []);

  return (
    <ul>
      {listPokemons.map((pokemon) => (
        <li key={pokemon.id}>
          {pokemon.name}
          <Link to={`/pokemons/${pokemon.id}`}>Clique aqui</Link>
        </li>
      ))}
    </ul>
  );
};
