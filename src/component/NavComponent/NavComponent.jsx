import React, { memo } from 'react'
import { Flex, Input, Space, Button } from 'antd'

const boxStyle = {
  boxSizing: 'border-box',
  width: '100%',
  height: 40,
  marginTop: 20,
  marginBottom: 20,
}

const CARDS_ON_PAGE = [20, 40, 60]

const Search = memo(function Search({ onSearchHandler, onClickFilter }) {
  return (
    <Flex justify='space-around' align='flex-end' style={boxStyle}>
      <Input.Search
        data-testid='search input'
        style={{ width: '50%' }}
        allowClear
        enterButton='Search'
        size='large'
        placeholder='Введите имя покемона'
        onSearch={onSearchHandler}
      />
      <Space>
        {CARDS_ON_PAGE.map((button, index) => {
          return (
            <Button
              data-testid='btn-theme'
              size='medium'
              type='primary'
              shape='circle'
              key={index}
              onClick={() => onClickFilter(button)}>
              {button}
            </Button>
          )
        })}
      </Space>
    </Flex>
  )
})

export default Search
