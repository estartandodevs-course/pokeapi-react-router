import { Route, Routes } from "react-router-dom";
import { CardPokemon } from "../components/CardPokemon";
import { Pokemons } from "../pages/Pokemons";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<div>olá 2</div>} />
      <Route path="pokemons" element={<Pokemons />} />
      <Route path="pokemons/:id" element={<CardPokemon />} />
    </Routes>
  );
};
