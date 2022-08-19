import { Route, Routes } from "react-router-dom";
import { Pokemon } from "../pages/Pokemon";
import { Pokemons } from "../pages/Pokemons";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokemons />} />
      <Route path=":id" element={<Pokemon />} />
    </Routes>
  );
};
