import React from 'react'
import { styled, css } from 'styled-components'
import { ProductBtn } from '../../productBtn/ui/productBtn'
import CloseIcon from '../../basketCard/config/delete.svg'
import { ProductCardFeatures } from '../../productCardFeatures/ui/productCardFeatures'

type Props = {
  id: number;
  imageUrl?: string;
  title?: string;
  price?: number;
  onClose: () => void;
  sizes: number[];
  types: number[];
}

export const ProductCardProperty = ({ id, imageUrl, title, price, onClose, sizes, types }: Props) => {
  const [typeNames, setTypeNames] = React.useState<string[]>(['среднее', 'большое']);
  const [activeType, setActiveType] = React.useState(0);

  const handleTypeChange = (newTypeNames: string[], newActiveType: number) => {
    setTypeNames(newTypeNames);
    setActiveType(newActiveType);
  };

  const [activeSize, setActiveSize] = React.useState(0);

  const handleSizeChange = (newActiveSize: number) => {
    setActiveSize(newActiveSize);
  };
  console.log(sizes)

  return (
    <Styled.content>
        <Styled.cardImage src={imageUrl} />
        <Styled.cardContent>

            <Styled.cardTitle>{title}</Styled.cardTitle>
            <ProductCardFeatures sizes={sizes} types={types} onTypeChange={handleTypeChange} onSizeChange={handleSizeChange} />
            <Styled.cardBottom>
                <Styled.cardPrice>цена: {price}р</Styled.cardPrice>
                <ProductBtn id={id} title={title} imageUrl={imageUrl} price={price} sizes={sizes && sizes.length > 0 ? sizes[activeSize] : undefined} types={typeNames[activeType]} />
            </Styled.cardBottom>
            <Styled.cardClose onClick={onClose}>
                <Styled.cardCloseIcon src={CloseIcon} />
            </Styled.cardClose>
        </Styled.cardContent>
    </Styled.content>
  )
}

const Styled = {
  content: styled.div`
    width: 808px;
    position: absolute;
    top: 30%;
    left: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px;
    background-color: #fff;
    border-radius: 20px;
    z-index: 3;
  `,
  cardImage: styled.img`
    width: 245px;
    height: 264px;
  `,
  cardContent: styled.div`
    width: 493px;
    display: flex;
    flex-direction: column;
  `,
  cardTitle: styled.div`
    font-size: 28px;
    line-height: 34px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 27px;
  `,
  cardProperty: styled.div`
    margin-bottom: 20px;
    background-color: #E7E7E7;
    padding: 20px;
    border-radius: 10px;
  `,
  cardBottom: styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
  `,
  cardPrice: styled.p`
    font-size: 22px;
    line-height: 27px;
    font-weight: 400;
    margin: 0;
  `,
  cardClose: styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background-color: #8f8f8f;
    border-radius: 100%;
    padding: 4.5px 5px;
  `,
  cardCloseIcon: styled.img`
    width: 20px;
    height: 22px;
  `
}