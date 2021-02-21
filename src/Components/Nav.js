import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styling = styled.div`
  color: red;
  font-size: 1.4rem;

  .navbar { 
    background-color: #27262d; 
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }

  span{
    color:white;
    &:hover{
      color:red;
    }
  }

  .brand{
    margin-top: 20px;
  }

  a, .navbar-nav, .nav-link {
    color: red;
    text-decoration: none;
    display: flex;
    margin: 10px 50px 10px 50px;
  }
`


export const Navigation = () => {
  return(
    <Styling>
      <Navbar expand="lg">
        <Navbar.Brand className='brand' href="/home">Lambda<span>Eats</span></Navbar.Brand>
          <Nav>
            <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/help">Help</Nav.Link></Nav.Item>
          </Nav>
      </Navbar>
    </Styling>
  )
}

