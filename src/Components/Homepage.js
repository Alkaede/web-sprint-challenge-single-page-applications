import React from 'react'
import styled from 'styled-components'

const FoodContainer = styled.div`

  .pizza{
    width: auto;
    height: 500px;
    margin: 0 50px;
    
    .pizza-child{
      width: 100%;
      height: 100%;
      background: url('https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg');
      position: center; 
      background-size: cover;
      
      div{
        display: flex;
        justify-content: center;
        flex-flow: column wrap;
        align-content: center;
        align-items: center;
        color: blue;
        width: 100px;
        margin: 10px auto;
        padding: 150px;
      }
    }
  }


  .food{
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  color: blue;
  margin: 5%;
  }

  .test{
    background: url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*') 50% 50% no-repeat;
    width: 50vh;
    height: 25vh;
  }

  hr{
    margin: 5%;
  }
`

export const Homepg = () => {
  return(
    <FoodContainer>
      <div className='pizza'>
        <div className='pizza-child'>
          <div>
            <h1>Pizza</h1>
            <button href='/order'>Order Now!</button>
          </div>
        </div>
      </div>
      <div className='food'>
        <div>
          <div className='test'>
          </div>
          <h3>Food place1</h3>
          <p>wow this place expensive?</p>
        </div>
        <div>
          <div className='test'>
          </div>
          <h3>Food place2</h3>
          <p>wow this place expensive?</p>
        </div>
        <div>
          <div className='test'>
          </div>
          <h3>Food place3</h3>
          <p>wow this place expensive?</p>
        </div>
      </div>
    <hr />
  {/*                            Disabled for now                                          */}
      {/* <div className='food'>
          <div>
            <div className='test'>
            </div>
            <h3>Food place1</h3>
            <p>wow this place expensive?</p>
          </div>
          <div>
            <div className='test'>
            </div>
            <h3>Food place2</h3>
            <p>wow this place expensive?</p>
          </div>
          <div>
            <div className='test'>
            </div>
            <h3>Food place3</h3>
            <p>wow this place expensive?</p>
          </div>
      </div> */}
    </FoodContainer>
  )
}