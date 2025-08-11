import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

type Props = {
  title?: string;
  descr?: string;
}

export const EmptyBasketPage = ({title, descr}: Props) => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <Styled.container>
        <Styled.content>
            <Styled.basketTitle>{title}</Styled.basketTitle>
            <Styled.basketDescr>{descr}</Styled.basketDescr>
            <Styled.basketBtn onClick={goHome}>Вернуться на главную</Styled.basketBtn>
        </Styled.content>
    </Styled.container>
  )
}

const Styled = {
  container: styled.div`
    padding: 60px 0;
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #E7E7E7;
  `,
  content: styled.div`
    display: flex;
    max-height: 286px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 20px;
    padding: 0 124px;
  `,
  basketTitle: styled.h2`
    font-size: 30px;
    line-height: 37px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 30px;
    color: #000;
  `,
  basketDescr: styled.p`
    max-width: 627px;
    text-align: center;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 30px;
    color: #8D8D8D;
  `,
  basketBtn: styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: #FF6B00;
    font-size: 22px;
    line-height: 27px;
    font-weight: 600;
    padding: 18px 23px;
    border-radius: 36px;
    color: #fff;
    transition: background-color .2s ease-in-out;

    &:hover {
      background-color: #ff852d;
    }

    &:active {
      background-color: #e56000;
    }
  `
}