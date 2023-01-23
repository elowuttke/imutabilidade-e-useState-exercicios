import React from 'react'
import {Card, PokemonName, PokemonType, PokemonImage, EvolveButton} from './styles'



export const PokemonCard = (props) => {

  const evoluirPokemon = () => {
    console.log("Cliquei no botão de evoluir")
    props.setPokemon(props.evolucao)
    }
    
  return (
    <Card color={props.color}>
        <PokemonImage src={props.image} alt={`Pokemon`}/>
        <PokemonName>{props.name}</PokemonName>
        <PokemonType>{props.type}</PokemonType>
        <p>{props.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}