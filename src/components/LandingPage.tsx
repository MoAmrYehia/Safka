import React from 'react'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from './Layout'
import styled from 'styled-components'
import { Container } from './Primitives'
import {
  GreenButton,
  WhiteButton,
  GreyMessage,
} from '../components/StyledComponents'
import CustomMuiLink from '../../plugins/gatsby-plugin-top-layout/CustomMuiLink'
import { Button, Grid } from '@material-ui/core'

const LandingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hero_image: file(name: { eq: "hero_image" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { hero_image } = data

  return (
    <Layout>
      <Container style={{ marginTop: '35vh' }}>
        <Image
          fluid={hero_image?.childImageSharp.fluid}
          style={{ width: '200px' }}
        />

        <ButtonContainer>
        <Grid container justify='center'>
          <GreenButton onClick={() => navigate('/restaurants')}>Let's eat!</GreenButton>
          {/* later separate "enter code" handling */}
          <WhiteButton onClick={() => navigate('/restaurants')}>Enter Code</WhiteButton>
        </Grid>

          <GreyMessage>
            Already have a profile? 
            <Button color='secondary' component={CustomMuiLink} to="/login">
              Sign in
            </Button>
          </GreyMessage>
        </ButtonContainer>
      </Container>
    </Layout>
  )
}

export default LandingPage

const Image = styled(Img)`
  margin: 150px auto 100px;
  // width: 200px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`
