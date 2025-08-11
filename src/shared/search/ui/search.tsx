import React from 'react'
import { styled } from 'styled-components'

type Props = {
  searchValue?: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Search = ({searchValue, setSearchValue}: Props) => {
  return (
    <Styled.search>
        <Styled.searchInput value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder='Поиск товаров' />
        <Styled.searchSvg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="16.6428" y1="15.234" x2="22.7711" y2="20.3763" stroke="#969696" stroke-width="2"/><circle cx="10" cy="10" r="9" stroke="#969696" stroke-width="2"/></Styled.searchSvg>
    </Styled.search>
  )
}

const Styled = {
  searchInput: styled.input`
    width: 459px;
    background-color: inherit;
    padding: 11px 36px;
    border: 1px solid #e7e7e7;
    font-size: 16px;
    line-height: 20px;
    border-radius: 10px;
    transition: border .2s ease-in-out;

    &:focus {
      outline: none;
    }
  `,
  search: styled.div`
    position: relative;
    margin-right: 40px;
  `,
  searchSvg: styled.svg`
    cursor: pointer;
    position: absolute;
    right: 36px; 
    top: 11px;

    line {
      transition: stroke .2s ease-in-out;
    }

    circle {
      transition: stroke .2s ease-in-out;
    }

    &:hover line {
      stroke: #000;
    }

    &:hover circle {
      stroke: #000;
    }
  `
}