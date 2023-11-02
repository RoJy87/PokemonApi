import { Link } from 'react-router-dom'
import styled from 'styled-components'
import close_icon from '../../image/close_icon.svg'

export const Detail = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;
`

export const DetailWrapper = styled.div`
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

export const CloseButton = styled(Link)`
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

export const DetailTitle = styled.h3`
  font-size: 28px;
  margin: 0 0 20px;
`

export const DetailImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 0 20px;
`
export const Abilities = styled.div``

export const AbilitiesTitle = styled.h4`
  text-align: center;
  margin-bottom: 10px;
`

export const Ability = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

export const AbilityTitle = styled.p`
  background-color: #9952e5;
  padding: 10px;
  border-radius: 10px;
`

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: 60%;
`

export const StatsItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const StatsItem = styled.p``
