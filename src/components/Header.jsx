import React from "react";
import Pokemon from "../images/Pokemon.png";
const Header = () => {
  return (
    <div className="bg-orange-500 h-20 flex justify-center items-center">
      <img src={Pokemon} alt="logo" className="h-20" />
    </div>
  );
};

export default Header;
