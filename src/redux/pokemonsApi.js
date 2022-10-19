import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Api = "https://pokeapi.co/api/v2/pokemon/";

export const pokemonsApi = createApi({
  reducerPath: "prokemonsApi",
  baseQuery: fetchBaseQuery({ baseUrl: Api }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => "?offset=40&limit=20",
      transformResponse(returnValue, meta) {
        return returnValue.results;
      },
    }),
    getPokemonById: builder.query({
      query: (id) => id,
      keepUnusedDataFor: 3,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByIdQuery } = pokemonsApi;
