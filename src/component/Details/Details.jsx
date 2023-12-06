import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from '../../store/selectors/getPokemons'
import { fetchPokemon } from '../../store/reducers/pokemonReducer'

export default function Details() {
  const pokemon = useSelector(getPokemon)
  const { name, sprites, abilities, stats } = pokemon

  const dispatch = useDispatch()

  const status = useSelector((state) => state.pokemon.status)
  const { nameid } = useParams()

  useEffect(() => {
    dispatch(fetchPokemon(nameid))
  }, [dispatch, nameid])

  return (
    pokemon && (
      <Detail data-testid='detail-card'>
        {status === 'loading' ? (
          <h1>Загрузка...</h1>
        ) : (
          status === 'succeeded' && (
            <DetailWrapper>
              <CloseButton to={'/'}></CloseButton>
              <DetailTitle>{name}</DetailTitle>
              <DetailImage src={sprites?.other?.dream_world?.front_default} alt={pokemon.name} />
              <Abilities>
                <AbilitiesTitle>Abilities</AbilitiesTitle>
                <Ability>
                  {abilities?.map((poke, index) => {
                    return <AbilityTitle key={index}>{poke.ability?.name}</AbilityTitle>
                  })}
                </Ability>
              </Abilities>
              <Stats>
                {stats?.map((poke, index) => {
                  return (
                    <StatsItems key={index}>
                      <StatsItem>{poke.stat?.name}:</StatsItem>
                      <StatsItem>{poke.base_stat} points</StatsItem>
                    </StatsItems>
                  )
                })}
              </Stats>
            </DetailWrapper>
          )
        )}
      </Detail>
    )
  )
}
