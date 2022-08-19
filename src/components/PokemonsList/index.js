import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemons } from "../../services/pokemonService";
import { ListContainer, Item } from "./styles";
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
    <ListContainer>
      {listPokemons.map((pokemon) => (
        <Item key={pokemon.id}>
          <span>{pokemon.name}</span>
          <Link to={`${pokemon.id}`} title={pokemon.name}>
            Ir ao Pokémon
          </Link>
        </Item>
      ))}
    </ListContainer>
  );
};
