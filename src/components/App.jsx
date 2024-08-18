import { useState, useEffect } from "react";
import "../styles/App.scss";
import CharactersList from "./characters/CharactersList";
import { getCharacters } from "../services/charactersApi";

function App() {
  // VARIABLES DE ESTADO

  const [characters, setCharacters] = useState([]);

  // USEEFFECT

  useEffect(() => {
    getCharacters()
      .then((responseData) => {
        setCharacters(responseData);
      });
  }, []);

  // EVENTOS

  return (
    <div className="page">
      <header>
        <h1>Buscador de personajes</h1>
      </header>

      <main className="main">
        <form>
          <div>
            <label>House</label>
            <div>
              <select name="house" id="house">
                <option value="all">All houses</option>
                <option value="gryffindor">Gryffindor</option>
                <option value="slytherin">Slytherin</option>
                <option value="hufelpuff">Hufelpuff</option>
                <option value="ravenclaw">Ravenclaw</option>
              </select>
            </div>
          </div>
        </form>

        <section>
          <h2>Lista de personajes</h2>

          <CharactersList characters={characters} />
        </section>
      </main>

      <footer>
        <small>&copy;2024 Adalabers 🥒 promo Betty</small>
      </footer>
    </div>
  );
}

export default App;
