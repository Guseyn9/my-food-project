import React from 'react'
import { styled } from 'styled-components'
import { CustomLogo } from '../../../shared/customLogo/ui/customLogo'
import { Search } from '../../../shared/search/ui/search'
import { useNavigate } from 'react-router-dom'
import { HeaderLink } from '../../../enteties/headerLink/ui/headerLink'
import { HeaderCart } from '../../../enteties/headerCart/ui/headerCart'
import { useSelector } from 'react-redux'

type Props = {
  searchValue?: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({ searchValue, setSearchValue }: Props) => {
  // @ts-ignore
  const {items, totalPrice} = useSelector((state) => state.cart)
  const headerLinks = ['Главная', 'О нас', 'Ассортимент', 'Контакты', 'Акции']
  const [activeLink, setActiveLink] = React.useState<string>('Главная');
  const isMounted = React.useRef(false);

  const handleLinkClick = (name: string) => {
    setActiveLink(name)
  }

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      localStorage.setItem('card', json)
    }
    isMounted.current = true;
  }, [items])

  const pathname = window.location.pathname;

  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }
  const goBasket = () => {
    navigate('/emptybasket')
  }
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
    <Styled.header>
      <Styled.content>
        <CustomLogo onClick={goHome} />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Styled.headerNav>
            <Styled.headerList>
            {headerLinks.map((name, i) => (
            <HeaderLink
              key={i}
              nameLink={name}
              onClick={() => {
                handleLinkClick(name);
                switch (name) {
                  case 'Главная':
                    goHome();
                    break;
                  case 'О нас':
                    goAbout();
                    break;
                  case 'Ассортимент':
                    goAssortment();
                    break;
                  case 'Контакты':
                    goContacts();
                    break;
                  case 'Акции':
                    goStocks();
                    break;
                  default:
                    break;
                }
              }}
              selected={activeLink === name}
            />
          ))}
            </Styled.headerList>
        </Styled.headerNav>
        <HeaderCart totalPrice={totalPrice} onClick={goBasket} />
      </Styled.content>
    </Styled.header>
  )
}

const Styled = {
  header: styled.header`
    position: relative;
    z-index: 2;
    padding: 18px 0;
    border-radius: 0 0 20px 20px;
    background-color: #ffffff;
    box-shadow: 0px 4px 20px -10px;
  `,
  content: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  `,
  headerNav: styled.nav`
    margin-right: auto;
  `,
  headerList: styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  `
}