import React, { useEffect, useState } from 'react'
import { getCard } from '../../api/cardsApi'
import { Link, useParams } from 'react-router-dom'
import { Card, Image, Divider, Row, Typography, List } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import Paragraph from 'antd/es/typography/Paragraph'

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
      <Divider>
        <Card title={pokemon.name} style={{ width: 400, position: 'relative' }} loading={isLoading}>
          <Link to={'/'} style={{ position: 'absolute', right: 15, top: 15 }}>
            <CloseOutlined />
          </Link>
          <Image
            src={pokemon.sprites?.other?.dream_world?.front_default}
            alt={pokemon.name}
            style={{ objectFit: 'contain' }}
            width={150}
          />
          <Row style={{ flexDirection: 'column' }}>
            <Typography.Title level={4}>Abilities</Typography.Title>
            <Row style={{ gap: 20, justifyContent: 'center' }}>
              {pokemon.abilities?.map((poke, index) => {
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
            dataSource={pokemon.stats}
            renderItem={(poke, index) => (
              <List.Item key={index}>
                <Paragraph>{poke.stat?.name}</Paragraph>
                <Paragraph>{`${poke.base_stat} points`}</Paragraph>
              </List.Item>
            )}
          />
        </Card>
      </Divider>
    )
  )
}
