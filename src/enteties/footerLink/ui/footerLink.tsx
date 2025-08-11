import React from 'react'
import { styled } from 'styled-components'

type Props = {
  nameLink?: string;
  onClick?: () => void;
}

export const FooterLink = ({ nameLink, onClick }: Props) => {
  return (
    <Styled.item>
        <Styled.link onClick={onClick}>{nameLink}</Styled.link>
    </Styled.item>
  )
}

const Styled = {
  item: styled.li`
    &:not(:last-child) {
      margin-right: 75px;
    }
  `,
  link: styled.a`
    cursor: pointer;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: #7E7E7E;
    transition: color .2s ease-in-out;

    &:hover {
      color: #FFB258;
    }
  `
}