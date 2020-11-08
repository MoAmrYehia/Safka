import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {
  GreyMessage
} from '../components/StyledComponents'

const Invite = () => {
  const data = useStaticQuery(graphql`
    query {
      group: file(name: { eq: "group" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { group } = data

  return (
    <div>
      <h2>Invite your friends</h2>
      <Image fluid={group?.childImageSharp.fluid} style={{ width: '200px' }} />

      <Message>
        Share the code or link with your friends and connect for an
        unforgettable lunch together!
      </Message>

      <ShareContainer>
        <Left color="var(--pink)">
          <input placeholder="Code" value="eatsafka" disabled />
        </Left>
        <Right color="var(--pink)">Share the code</Right>
      </ShareContainer>

      <ShareContainer>
        <Left color="var(--green)">
          <input placeholder="Code" value="safka.fi/GDdffsDf" disabled />
        </Left>
        <Right color="var(--green)">Share the link</Right>
      </ShareContainer>
    </div>
  )
}

export default Invite

const Image: any = styled(Img)`
  margin: 30px auto;
`
const Message = styled(GreyMessage)`
  width: 80%;
  margin-bottom: 75px;
`

const ShareContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: 0px auto 15px;
`
const Left = styled.div`
  width: 45%;
  background-color: var(--white);

  input {
    padding: var(--padding);
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    border: 1px solid ${props => props.color};
  }
`

const Right = styled.div`
  width: 45%;
  word-wrap: normal;
  font-size: 14px;
  background-color: ${props => props.color};
  padding: var(--padding);
  color: var(--white);
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  text-align: center;
`
