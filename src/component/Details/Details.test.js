import React from 'react'
import { render, screen } from '@testing-library/react'
import Details from './Details'

describe('Details Component', () => {
  it('renders details correctly', () => {
    render(<Details />)

    expect(screen.getByText('Abilities')).toBeInTheDocument()
  })
})
