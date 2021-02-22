import React from 'react';
import styled from 'styled-components';

const Payment = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`

export default function PayScreen(props){
  // const {}
  return (
    <Payment>
      <h1>Thank you for your purchase!</h1>
      <h2>Your pizza shall be with your shortly.</h2>
      <img src='https://media4.giphy.com/media/3o6vXQIj1UkV8FZ7VK/giphy-downsized-large.gif' />
    </Payment>
  )
}
