import styled from 'styled-components'

export const GreenButton = styled.button`
  background-color: var(--green);
  color: var(--white);
  padding: var(--padding);
  border-radius: 24px;
  border: none;
  margin-bottom: 15px;
  width: 100%;
  max-width: 80vw;
  font-size: 16px;

`

export const WhiteButton = styled.button`
  background-color: var(--white);
  border: 1px solid var(--green);
  color: var(--green);
  padding: var(--padding);
  border-radius: 24px;
  width: 100%;
  max-width: 80vw;
  margin-bottom: 15px;
`
export const GreyMessage = styled.p`
  color: var(--grey);
  margin: 20px auto;
  text-align: center;
`
export const TextInput = styled.input`
  border-bottom: 1px solid var(--grey);
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  padding: var(--padding) 0px;
  margin: 0px auto 15px;
`
