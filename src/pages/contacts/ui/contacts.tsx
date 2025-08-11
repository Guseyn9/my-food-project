import React from 'react'
import { styled } from 'styled-components'
import { SectionTitle } from '../../../enteties/sectionTitle/ui/sectionTitle'
import { RecomBtn } from '../../../enteties/recombtn/ui/recomBtn'
import dawnImg from '../config/dawn.jpg'
import spiralImg from '../config/spiral.jpg'

type Props = {}

export const Contacts = (props: Props) => {
  return (
    <Styled.contacts>
        <Styled.container>
          <ContactsTitle name='Контакты' />
          <Styled.content>
            <Styled.contactsLeft>
                  <Styled.contactsForm>
                      <Styled.textArea placeholder='Комментарий' />
                      <Styled.input required placeholder='Email' />
                      <ContactsInput required placeholder='Имя' /> 
                      <ContactsBtn name='Отправить' />
                  </Styled.contactsForm>
              </Styled.contactsLeft>
            <Styled.contactsRight>
                  <Styled.rightTitle>Оставить заявку</Styled.rightTitle>
                  <Styled.rightDescr>
                      Оставьте ваши данные, указав в графе “Комментарий”  желаемую еду или продукт, который вы хотели бы видеть в нашем магазине 
                  </Styled.rightDescr>
                  <Styled.icons>
                      <img src={dawnImg} alt="" />
                      <img src={spiralImg} alt="" />
                  </Styled.icons>
            </Styled.contactsRight>
          </Styled.content>
        </Styled.container>
    </Styled.contacts>
  )
}

const Styled = {
  contacts: styled.section`
    padding: 60px 0;
  `,
  container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  `,
  content: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  contactsLeft: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  contactsForm: styled.form`
    display: grid;
    grid-template-columns: repeat(2, 335px);
    grid-template-rows: 300px;
    grid-auto-rows: 70px;
    grid-gap: 30px;
    margin-bottom: 25px;
  `,
  textArea: styled.textarea`
    grid-column: 1 / 3;
    border: none;
    background-color: #E9E9E9;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    padding-top: 17px;
    padding-left: 29px;
    resize: none;
  `,
  input: styled.input`
    grid-column: 2;
    grid-row: 2;
    background-color: #E9E9E9;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    padding-top: 22px;
    padding-left: 29px;
    padding-bottom: 22px;
    border: none;
  `,
  contactsRight: styled.div`
    display: flex;
    flex-direction: column;
  `,
  rightTitle: styled.h3`
    font-size: 28px;
    line-height: 34px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 16px;
  `,
  rightDescr: styled.p`
    max-width: 534px;
    font-size: 19px;
    line-height: 23px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 20px;
  `,
  icons: styled.div`
    display: flex;
    justify-content: space-between;
  `
}

const ContactsTitle = styled(SectionTitle)`
  margin-bottom: 28px;
`

const ContactsInput = styled(Styled.input)`
  grid-column: 1;
`

const ContactsBtn = styled(RecomBtn)`
  max-width: 190px;
`