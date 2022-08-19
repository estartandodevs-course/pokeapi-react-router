import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemons } from "../../services/pokemonService";
import {
  Card,
  Abilities,
  AbilitiesTitle,
  AbilitiesContainer,
  CardTitle,
  WrapperImage,
  LoadingWrapper,
  ErrorMessage,
  TypesTitle,
} from "./styles";

const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));

export const CardPokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        await delay();
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
    return <ErrorMessage>Ooops! Algo de errado aconteceu!</ErrorMessage>;
  }

  if (isLoading) {
    return (
      <LoadingWrapper>
        <div class="ball"></div>
        <div class="half-ball"></div>
        <div class="big-button"></div>
        <div class="small-button"></div>
        <div class="horizon"></div>
      </LoadingWrapper>
    );
  }

  const pokemonType = pokemon.types.map(({ type }) => type.name);

  return (
    <Card bgColor={pokemonType[0]}>
      <CardTitle>{pokemon.name}</CardTitle>
      <WrapperImage>
        <img src={pokemon.sprites.back_default} alt={pokemon.name} />
      </WrapperImage>
      <TypesTitle>Tipos:</TypesTitle>
      {pokemonType.map((type) => (
        <p key={`type-${type}`}>{type}</p>
      ))}
      <AbilitiesContainer>
        <AbilitiesTitle>Habilidades:</AbilitiesTitle>
        {pokemon.abilities.map(({ ability }) => (
          <Abilities key={ability.name}>{ability.name}</Abilities>
        ))}
      </AbilitiesContainer>
    </Card>
  );
};
