import React from 'react'
import { CustomLogo } from '../../../shared/customLogo/ui/customLogo'
import { styled } from 'styled-components'
import { FooterLink } from '../../../enteties/footerLink/ui/footerLink'
import { FooterSocial } from '../../../enteties/footerSocial/ui/footerSocial'
import { useNavigate } from 'react-router-dom'

import instSvg from '../../../enteties/footerSocial/config/inst.svg'
import vkSvg from '../../../enteties/footerSocial/config/vk.svg'
import twitterSvg from '../../../enteties/footerSocial/config/twitter.svg' 

type Props = {}

export const Footer = (props: Props) => {
  const footerLink = ['Ассортимент', 'Контакты', 'О нас', 'Акции',]
  const footerSocial = [instSvg, vkSvg, twitterSvg]
  const navigate = useNavigate()

  const goAssortment = () => {
    navigate('/assortment')
  }
  const goAbout = () => {
    navigate('/about')
  }
  const goContacts = () => {
    navigate('/contacts')
  }
  const goStocks = () => {
    navigate('/stocks')
  }
  return (
    <Styled.footer>
        <Styled.container>
            <CustomLogo />
            <Styled.listLinks>
                <FooterLink onClick={goAssortment} nameLink='Ассортимент' />
                <FooterLink onClick={goContacts} nameLink='Контакты' />
                <FooterLink onClick={goAbout} nameLink='О нас' />
                <FooterLink onClick={goStocks} nameLink='Акции' />
            </Styled.listLinks>
            <Styled.listSocial>
                {
                  footerSocial.map((social) => {
                    return (
                      <FooterSocial imageUrl={social} />
                    )
                  })
                }
            </Styled.listSocial>
        </Styled.container>
        <Styled.footerYear>food ® 2023</Styled.footerYear>
    </Styled.footer>
  )
}

const Styled = {
  footer: styled.footer`
    position: relative;
    padding-top: 40px;
    padding-bottom: 84px;
  `,
  container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  `,
  listLinks: styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  `,
  listSocial: styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  `,
  footerYear: styled.div`
    position: absolute;
    bottom: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid #7E7E7E;
    font-size: 30px;
    line-height: 37px;
    font-weight: 600;
    color: #7E7E7E;
  `
}