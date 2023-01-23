import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { PokemonCard } from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon1, setPokemon1] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  })

  const evolved1 = {
    ...pokemon1,
    name: "Raichu",
    evolved: true,
    weight: 30,
    image: "https://archives.bulbagarden.net/media/upload/thumb/b/b0/0026Raichu.png/600px-0026Raichu.png",
    id:1
  }


  const [pokemon2,setPokemon2] = useState({
    name: "Bulbasaur",
    type: "Grass, Poison",
    evolved: false,
    weight: 7,
    color: 'green',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/600px-0001Bulbasaur.png',
    id: 2
  })

  const evolved2 = {
    ...pokemon2,
    name: "Ivysaur",
    evolved: true,
    weight: 13,
    image: "https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/600px-0002Ivysaur.png",
    id:3
  }


  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
        name={pokemon1.name}
        type={pokemon1.type}
        evolved={pokemon1.evolved}
        weight={pokemon1.weight}
        color={pokemon1.color}
        image={pokemon1.image}
        id={pokemon1.id}
        setPokemon={setPokemon1}
        evolucao={evolved1}
      />
      <PokemonCard
        name={pokemon2.name}
        type={pokemon2.type}
        evolved={pokemon2.evolved}
        weight={pokemon2.weight}
        color={pokemon2.color}
        image={pokemon2.image}
        id={pokemon2.id}
        setPokemon={setPokemon2}
        evolucao={evolved2}
      />

      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
