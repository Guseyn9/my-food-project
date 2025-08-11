import React from 'react'
import logoSvg from '../config/logoSvg.svg'
import { styled } from 'styled-components'

type Props = {
  onClick?: () => void; 
}

export const CustomLogo = ({ onClick }: Props) => {
  return (
    <Styled.headerLogo src={logoSvg} alt="" onClick={onClick} />
  )
}

const Styled = {
  headerLogo: styled.img`
    cursor: pointer;
    margin-right: 40px;
  `
}