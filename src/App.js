import React from 'react';
import './App.css';

const App = () => {

  const [pokemon, setPokemon] = React.useState(null);
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const [num, setNum] = React.useState(randomNumber);
  const [link, setLink] = React.useState("https://pokeapi.co/api/v2/pokemon/1")

  React.useEffect(() => {
    fetch(link)
    .then((response) => response.json())
    .then((json) => setPokemon(json));
  }, [link]);

  function nextPokemon(){
    setNum(randomNumber);
    setLink("https://pokeapi.co/api/v2/pokemon/" + num);
  }

  return (
    <div>
      {pokemon && (
        <div>

      <header className="App-header">

        <div className="dex">
          <img src="https://wallpaperaccess.com/full/5818315.png"/>
        </div>

        <div className="logo">
        <img src="https://www.pinclipart.com/picdir/big/379-3791327_pokemon-logos-png-vector-pokemon-logo-transparent-background.png"
        width="750" height="300"/>
        </div>

        <div className="poke">
        <img src={pokemon.sprites.front_default} width="650" height="650" alt="front" />
        </div>
   
         <h3>Name: {pokemon.name} </h3>
         <h5>{pokemon.types[0].type.name} type Pokemon</h5>
         <button className="next-pokemon" onClick={nextPokemon}> Next Pokemon </button>
         

       
      </header>

          

      </div>

      )}

    </div>

  );
}

export default App;
