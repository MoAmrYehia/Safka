import { Button, Grid } from '@material-ui/core'
import { navigate } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import CustomMuiLink from '../../plugins/gatsby-plugin-top-layout/CustomMuiLink'
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
    <Container style={{ marginTop: '5vh'}}>
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
      <Grid container justify='center'>
        <GreenButton onClick={() => navigate('/restaurants')}>Create Account</GreenButton>
      </Grid>
      <GreyMessage>
        Already have a profile?
          <Button color='secondary' component={CustomMuiLink} to="/login">
              Sign in
          </Button>
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
