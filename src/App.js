import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PokemonsList from "./components/Pokemon/PokemonsList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="pt-10 w-[90%] mx-auto">
          <PokemonsList />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
