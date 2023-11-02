import React, { useEffect, useState } from 'react'
import { getCard } from '../../api/cardsApi'
import { useParams } from 'react-router-dom'
import {
  Abilities,
  AbilitiesTitle,
  Ability,
  AbilityTitle,
  CloseButton,
  Detail,
  DetailImage,
  DetailTitle,
  DetailWrapper,
  Stats,
  StatsItem,
  StatsItems,
} from './styled'

export default function Details() {
  console.log('Details', 'rerender')

  const [pokemon, setPokemon] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { nameid } = useParams()

  async function getPokemon(name) {
    setIsLoading(true)
    try {
      const newPoke = await getCard(name)
      setPokemon(newPoke)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getPokemon(nameid)
  }, [nameid])

  return (
    pokemon && (
      <Detail>
        {isLoading ? (
          <h1>Загрузка...</h1>
        ) : (
          <DetailWrapper>
            <CloseButton to={'/'}></CloseButton>
            <DetailTitle>{pokemon.name}</DetailTitle>
            <DetailImage src={pokemon.sprites?.other?.dream_world?.front_default} alt={pokemon.name} />
            <Abilities>
              <AbilitiesTitle>Abilities</AbilitiesTitle>
              <Ability>
                {pokemon.abilities?.map((poke, index) => {
                  return <AbilityTitle key={index}>{poke.ability?.name}</AbilityTitle>
                })}
              </Ability>
            </Abilities>
            <Stats>
              {pokemon.stats?.map((poke, index) => {
                return (
                  <StatsItems key={index}>
                    <StatsItem>{poke.stat?.name}:</StatsItem>
                    <StatsItem>{poke.base_stat} points</StatsItem>
                  </StatsItems>
                )
              })}
            </Stats>
          </DetailWrapper>
        )}
      </Detail>
    )
  )
}
