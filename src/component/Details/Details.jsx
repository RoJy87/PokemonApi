import React, { useEffect, useState } from 'react'
import { getCard } from '../../api/cardsApi'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import close_icon from '../../image/close_icon.svg'

const Detail = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  width: 40%;
  height: 100%;
  box-shadow: 1px 1px 5px #4a6b79;
  border-radius: 15px;
`

const CloseButton = styled(Link)`
  position: absolute;
  top: 25px;
  right: 25px;
  border: none;
  background: no-repeat url(${close_icon}) center/cover;
  width: 30px;
  height: 30px;
  background-color: transparent;
  font-size: 32px;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: black;
  &:hover {
    transform: scale(1.2);
  }
`

const DetailTitle = styled.h3`
  font-size: 28px;
  margin: 0 0 20px;
`

const DetailImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 0 20px;
`
const Abilities = styled.div``

const AbilitiesTitle = styled.h4`
  text-align: center;
  margin-bottom: 10px;
`

const Ability = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

const AbilityTitle = styled.p`
  background-color: #9952e5;
  padding: 10px;
  border-radius: 10px;
`

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: 60%;
`

const StatsItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StatsItem = styled.p``

export default function Details() {
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
          <>
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
          </>
        )}
      </Detail>
    )
  )
}
