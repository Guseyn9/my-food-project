import React from 'react'
import { styled } from 'styled-components'
import cartSvg from '../config/cart.svg'

type Props = {
  onClick?: () => void;
  totalPrice: number;
}

export const HeaderCart = ({ onClick, totalPrice }: Props) => {
  return (
    <Styled.headerCart onClick={onClick}>
        <Styled.cartPrice>{totalPrice}р</Styled.cartPrice>
        <img src={cartSvg} alt="" />
    </Styled.headerCart>
  )
}

const Styled = {
  headerCart: styled.div`
    cursor: pointer;
    display: flex;
  `,
  cartPrice: styled.p`
    font-size: 17px;
    line-height: 21px;
    font-weight: 600;
    margin: 0;
    margin-right: 8px;
  `
}