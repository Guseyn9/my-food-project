import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { RecommendLink } from '../../../enteties/recommendLink/ui/recommendLink'
import { Sort } from '../../../features/sort/ui/sort'
import { axiosInastanse } from '../../../shared/common/api/axiosInstance'

type Props = {
  value?: number;
  onClickCategory: (id: number) => void;
}

export const RecommendHeader = ({ value, onClickCategory }: Props) => {

  const nameLink = ['Все', 'Бургеры', 'Пиццы', 'Роллы', 'Напитки', 'Салаты']
  const [selectedLink, setSelectedLink] = React.useState<string>('')

  const handleLinkClick = (name: string) => {
    setSelectedLink(name)
  }
  return (
    <Styled.content>
        <Styled.list>
            {nameLink.map((name, i) => {
              return (
                <RecommendLink
                  key={i}
                  nameBtn={name} 
                  onClick={() => onClickCategory(i)}
                  selected={value === i}
                 />
              )
            })}
        </Styled.list>
    </Styled.content>
  )
}

const Styled = {
  content: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    padding: 10px 80px 10px 25px;
    margin-bottom: 30px;
  `,
  list: styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  `
}

// export const RecommendHeader = ({ value, onClickCategory }: Props) => {
//   const [sortType, setSortType] = React.useState(0)
//   const [items, setItems] = React.useState([])
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const resp = await axiosInastanse.get(`/items`)
//         .then((resp) => {
//           setItems(resp.data)
//         })
//         console.log(items)
//       } catch (error) {}
//     }
//     getProducts()
//   }, [])

//   console.log(value)
//   const nameLink = ['Все', 'Бургеры', 'Пиццы', 'Роллы', 'Напитки', 'Салаты']
//   const [selectedLink, setSelectedLink] = React.useState<string>('')

//   const handleLinkClick = (name: string) => {
//     setSelectedLink(name)
//   }
//   return (
//     <Styled.content>
//         <Styled.list>
//             {nameLink.map((name, i) => {
//               return (
//                 <RecommendLink
//                   key={i}
//                   nameBtn={name} 
//                   onClick={() => onClickCategory(i)}
//                   selected={value === i}
//                  />
//               )
//             })}
//         </Styled.list>
//               <Sort value={sortType} onChangeSort={(i: number) => setSortType(i)} />
//     </Styled.content>
//   )
// }