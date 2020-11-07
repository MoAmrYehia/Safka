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
    { label: 'Name', placeholder: 'Lea Smith', id: 'name' },
    { label: 'Email', placeholder: 'email@email.com', id: 'email' },
    { label: 'Password', placeholder: 'Enter your password', id: 'password' },
    {
      label: 'Confirm Password',
      placeholder: 'Confirm your password',
      id: 'confirmPassword',
    },
  ]
  return (
    <Container>
      <h1>Register</h1>

      <GreyMessage>Create your profile!</GreyMessage>

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

      <GreenButton>Create Account</GreenButton>
      <GreyMessage>
        Already have a profile? <a href="/">Sign in</a>
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
