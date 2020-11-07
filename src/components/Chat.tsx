import React from 'react'
import styled from 'styled-components'
import { Container } from './Primitives'
import { Icon } from './Icons'

const Chat = () => {
  const chatData = [
    {
      date: 'Monday・11:11 AM',
      message: 'Are you available now?',
      status: '',
      color: 'var(--lightGrey)',
      position: 'right',
    },
    {
      date: 'Monday・3:15 PM',
      message: 'We need to discuss the meal choices.  I’m so hangry.',
      status: 'Delivered',
      color: 'var(--lightGrey)',
      position: 'right',
    },
    {
      date: '',
      message:
        'Hey, What’s up? I am alright. What about you? Yeah, sure! We can seat together. Give me 10 mins.',
      status: '',
      color: 'var(--lightGreen)',
      position: 'left',
    },
  ]

  return (
    <ChatContainer>
      {chatData.map(({ date, message, status, color, position }) => {
        return (
          <BubbleContainer>
            <Date>{date}</Date>
            <Bubble color={color} position={position}>
              {message}
            </Bubble>
            <Status>{status}</Status>
          </BubbleContainer>
        )
      })}

      <Placeholder>Write a message...</Placeholder>

      <BottomContainer>
        <Icon
          name="smileyFace"
          height="24px"
          width="24px"
          stroke="var(--svg)"
          viewBox="0 0 24 24"
        />
        <SendButton>Send</SendButton>
      </BottomContainer>
    </ChatContainer>
  )
}

export default Chat

const BubbleContainer = styled.div`
  margin-bottom: 30px;
`

const Bubble = styled.div`
  background-color: ${props => props.color};
  padding: var(--padding);
  border-radius: 24px;
  color: var(--black);
  width: max-content;
  max-width: 250px;
  margin-left: ${props => (props.position === 'right' ? 'auto' : '0')};
`
const Date = styled.small`
  text-align: center;
  margin: 15px auto;
  display: block;
`
const Status = styled.small`
  text-align: right;
  display: block;
  margin-top: 15px;
`

const Placeholder = styled.p`
  margin-top: 100px;
  color: var(--lightGrey);
  border-top: 1px solid var(--lightGrey);
  padding: var(--padding);
`
const BottomContainer = styled.div`
  background-color: var(--lightGrey);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--padding);
`

const SendButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--grey);
  font-size: 16px;
`
const ChatContainer = styled(Container)`
  margin-top: 100px;
`
