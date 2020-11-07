import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Primitives'
import {
  GreyMessage,
  TextInput,
  GreenButton,
} from '../components/StyledComponents'

const Register = () => {
  const inputs = [
    { label: 'Email', placeholder: 'email@email.com', id: 'email' },
    { label: 'Password', placeholder: 'Enter your password', id: 'password' },
  ]
  return (
    <Container>
      <h1>Log in</h1>

      <GreyMessage>Please enter your details.</GreyMessage>

      <Form>
        {inputs.map(({ label, placeholder, id }) => {
          return (
            <InputContainer>
              <label>{label}</label>
              <TextInput id={id} placeholder={placeholder} />
            </InputContainer>
          )
        })}
      </Form>

      <GreenButton>Login</GreenButton>
      <GreyMessage>
        <a href="/">Forgot password?</a>
      </GreyMessage>
      <GreyMessage>
        Don't have a profile? <a href="/">Register</a>
      </GreyMessage>
    </Container>
  )
}

export default Register

const Form = styled.form`
  margin: 75px auto 50px;
  display: flex;
  flex-direction: column;
`
const InputContainer = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;
`
