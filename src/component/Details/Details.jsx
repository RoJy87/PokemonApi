import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPokemon } from '../../slice/pokemonSlice'
import { getCard } from '../../api/cardsApi'
import { Link, useParams } from 'react-router-dom'
import { Card, Image, Divider, Row, Typography, List } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import Paragraph from 'antd/es/typography/Paragraph'

export default React.memo(function Details() {
  const pokemon = useSelector((state) => state.pokemon.pokemon)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const { nameid } = useParams()

  const { name, sprites, abilities, stats } = pokemon || {}

  const getPokemon = useCallback(
    async (name) => {
      setIsLoading(true)
      try {
        const newPoke = await getCard(name)
        dispatch(setPokemon(newPoke))
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    },
    [dispatch],
  )

  useEffect(() => {
    getPokemon(nameid)
  }, [getPokemon, nameid])

  return useMemo(() => {
    if (!pokemon) {
      return null
    }

    return (
      <Divider>
        {name && (
          <Card title={name} style={{ width: 400, position: 'relative' }} loading={isLoading}>
            <Link to={'/'} style={{ position: 'absolute', right: 15, top: 15 }}>
              <CloseOutlined />
            </Link>
            <Image
              src={sprites?.other?.dream_world?.front_default}
              alt={name}
              style={{ objectFit: 'contain' }}
              width={150}
              loading='lazy'
            />
            <Row style={{ flexDirection: 'column' }}>
              <Typography.Title level={4}>Abilities</Typography.Title>
              <Row style={{ gap: 20, justifyContent: 'center' }}>
                {abilities?.map((poke, index) => {
                  return (
                    <Paragraph style={{ padding: 10, backgroundColor: ' #aa4ce9', borderRadius: 15 }} key={index}>
                      {poke.ability?.name}
                    </Paragraph>
                  )
                })}
              </Row>
            </Row>
            <List
              itemLayout='horizntal'
              size='small'
              bordered={true}
              width={200}
              dataSource={stats}
              renderItem={(poke, index) => (
                <List.Item key={index}>
                  <Paragraph>{poke.stat?.name}</Paragraph>
                  <Paragraph>{`${poke.base_stat} points`}</Paragraph>
                </List.Item>
              )}
            />
          </Card>
        )}
      </Divider>
    )
  }, [pokemon, name, isLoading, sprites?.other?.dream_world?.front_default, abilities, stats])
})
