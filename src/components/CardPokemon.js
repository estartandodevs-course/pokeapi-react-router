import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemons } from "../services/pokemonService";

export const CardPokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await getPokemons(id);
        setPokemon(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  if (isError) {
    return <div>Ooops! Algo de errado aconteceu!</div>;
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return <div>{pokemon.name}</div>;
};
