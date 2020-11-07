import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// import { Grid } from '@material-ui/core'
import { GatsbyImage } from '../types/childImageSharp'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { Container } from '../components/Primitives'
import TopLayout from '../../plugins/gatsby-plugin-top-layout/TopLayout';

interface Props {
  data: {
    hero_image: GatsbyImage
  }
}

const Index = ({ data }: Props) => {
  const { hero_image } = data

  return (
    <TopLayout>
      <Container>
        <Image
          fluid={hero_image?.childImageSharp.fluid}
          style={{ width: '200px' }}
        />

        <ButtonContainer>
          <Button variant="contained" color="primary">
            Let's eat!
          </Button>
          <Button variant="contained" color="primary">
            Enter Code
          </Button>
        </ButtonContainer>
      </Container>
    </TopLayout>
  )
}

export default Index

export const indexPageQuery = graphql`
  query IndexPageQuery {
    hero_image: file(name: { eq: "hero_image" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Image = styled(Img)`
  margin: auto;
  width: 200px;
`
const ButtonContainer = styled.div`
  display: flex;
`
