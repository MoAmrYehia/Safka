import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from './Layout'
import styled from 'styled-components'
import { Container } from './Primitives'
import {
  GreenButton,
  WhiteButton,
  GreyMessage,
} from '../components/StyledComponents'

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
      <Container>
        <Image
          fluid={hero_image?.childImageSharp.fluid}
          style={{ width: '200px' }}
        />

        <ButtonContainer>
          <GreenButton>Let's eat!</GreenButton>
          <WhiteButton>Enter Code</WhiteButton>

          <GreyMessage>
            Already have a profile? <a href="/">Sign in</a>
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
