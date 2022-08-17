import { pokeApi } from "./pokeApi";

export const getPokemons = (id) => {
  return pokeApi.get(`pokemon/${id}`);
};
