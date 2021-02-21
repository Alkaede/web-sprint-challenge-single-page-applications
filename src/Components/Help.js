import React from 'react';
import styled from 'styled-components';

const HelpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 15%;
  border: 1px black solid;
  padding: 8px;
`

export default function Help(){
  return(
    <HelpContainer>
      <div>
        <h1>There is no help</h1>
        <p>Only pain and suffering from those around us in the endless void that is</p>
        <p>know as our mortal coil flesh</p>
      </div>
    </HelpContainer>
  )
}