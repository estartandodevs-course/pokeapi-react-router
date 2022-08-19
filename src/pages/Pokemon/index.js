import { CardPokemon } from "../../components/CardPokemon";
import { MainWrapper, Title } from "./styles";

export const Pokemon = () => {
  return (
    <MainWrapper>
      <Title>Informações sobre o Pokémon</Title>
      <CardPokemon />
    </MainWrapper>
  );
};
