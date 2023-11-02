import React, { useEffect, useState } from 'react'
import { getCard } from '../../api/cardsApi'
import { Link, useParams } from 'react-router-dom'
import { Card, Image, Flex, Space, Divider } from 'antd'

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
      <Divider>
        {isLoading ? (
          <h1>Загрузка...</h1>
        ) : (
          <Flex vertical justify='center' align='center' style={{ width: 300 }}>
            <Link to={'/'}></Link>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites?.other?.dream_world?.front_default} alt={pokemon.name} />
            <div>
              <p>Abilities</p>
              <div>
                {pokemon.abilities?.map((poke, index) => {
                  return <p key={index}>{poke.ability?.name}</p>
                })}
              </div>
            </div>
            <div>
              {pokemon.stats?.map((poke, index) => {
                return (
                  <div key={index}>
                    <p>{poke.stat?.name}:</p>
                    <p>{poke.base_stat} points</p>
                  </div>
                )
              })}
            </div>
          </Flex>
        )}
      </Divider>
    )
  )
}
