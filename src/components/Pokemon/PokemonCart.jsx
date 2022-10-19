import React, { useEffect } from "react";
import { useGetPokemonByIdQuery } from "../../redux/pokemonsApi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PokemonCart = ({ id, random }) => {
  const { data: pokemon, isLoading, isSuccess } = useGetPokemonByIdQuery(id);

  const bgColor = [
    {
      id: 1,
      color: "rgba(0, 128, 0, 0.3)",
    },
    {
      id: 2,
      color: "rgba(242, 106, 140, 0.3)",
    },
    {
      id: 3,
      color: "rgba(211, 241, 35, 0.3)",
    },
    {
      id: 4,
      color: "rgba(118, 182, 212, 0.3)",
    },
    {
      id: 5,
      color: "rgba(212, 71, 177, 0.3)",
    },
    {
      id: 6,
      color: "rgba(118, 107, 216, 0.3)",
    },
    {
      id: 7,
      color: "rgba(183, 233, 47, 0.3)",
    },
    {
      id: 8,
      color: "rgba(204, 143, 189, 0.3)",
    },
    {
      id: 9,
      color: "rgba(76, 240, 44, 0.3)",
    },
    {
      id: 10,
      color: "rgba(219, 123, 33, 0.3)",
    },
  ];

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        x: "0vw",
        transition: {
          type: "string",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "1rem" });
    }
  }, [inView]);

  if (isLoading) {
    return <h1>Cargando....</h1>;
  }

  if (isSuccess) {
    return (
      <motion.div
        animate={animation}
        className="w-80 md:w-72 text-center flex flex-col items-center rounded-lg cursor-pointer "
        style={{
          background: bgColor?.find((item) => item.id === random).color,
        }}
        ref={ref}>
        <h1 className="uppercase font-bold pt-1 ">{pokemon?.name}</h1>
        <h2>#{pokemon?.id}</h2>
        <div
          className="h-72 w-72 md:h-52 md:w-52  rounded-full flex items-center justify-center"
          style={{
            background: bgColor?.find((item) => item.id === random).color,
          }}>
          <motion.img
            initial={{ y: -2 }}
            animate={{ y: 2, scale: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={pokemon?.sprites.other["official-artwork"].front_default}
            className={"h-52"}
            alt="imagen"
          />
        </div>
        <div className="flex justify-between p-2 gap-3 ">
          <button className="w-20 bg-lime-400 p-1 rounded-sm">GRASS</button>

          <button className="w-20 bg-purple-400 p-1 rounded-sm ">POISON</button>
        </div>
      </motion.div>
    );
  }
};

export default PokemonCart;
