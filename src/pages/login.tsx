import { Button, Grid, Container } from '@material-ui/core';
import { navigate } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import CustomMuiLink from '../../plugins/gatsby-plugin-top-layout/CustomMuiLink'
import TopLayout from '../../plugins/gatsby-plugin-top-layout/TopLayout';
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
    <TopLayout> 
      <Container style={{ marginTop: '15vh' }}>
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
        <Grid container justify='center'>
          <GreenButton onClick={() => navigate('/restaurants')}>Login</GreenButton>
        </Grid>
        <GreyMessage>
          Don't have a profile?
            <Button color='secondary' component={CustomMuiLink} to="/register">
              Register
            </Button>
        </GreyMessage>
      </Container>
    </TopLayout>
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
