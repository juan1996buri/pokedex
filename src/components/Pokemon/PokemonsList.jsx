import React from "react";
import { useGetPokemonsQuery } from "../../redux/pokemonsApi";
import PokemonCart from "./PokemonCart";

const PokemonsList = () => {
  const { data: pokemons, isLoading, isSuccess } = useGetPokemonsQuery();

  if (isLoading) {
    return <h2>...cargando</h2>;
  }

  if (isSuccess) {
    return (
      <div>
        <div className="grid gap-3  items-center justify-center  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   ">
          {pokemons.map((item) => (
            <PokemonCart
              key={item.name}
              id={item.url.split("/")[6]}
              random={Math.floor(Math.random() * (9 - 1) + 1)}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default PokemonsList;
