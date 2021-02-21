import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';



export default function Foodform(){
  // don't think I need this now that the submit button is leading to another page w/ routing
  // keeping it just in case
  const onSubmit = e => {
    e.preventDefault()
  }

  return(
    <form>
      <h1>Make the fucking pizza bill</h1>
      {/* Size Select */}
      <h2>Choice of Size:</h2>
        <select name='size'>
          <option value=''> Select option </option>
          <option value='Personal'>Personal 6"</option>
          <option value='Small'>Small 10"</option>
          <option value='Medium'>Medium 12"</option>
          <option value='Large'>Large 16"</option>
          <option value='XLarge'>X-Large 18"</option>
        </select>
      {/* Sauce Choices */}
      <h2>Choice of Sauce:</h2>
        <label>
          Red boi
          <input type='radio' name='sauce'/>
        </label>
        <label>
          Cheesy Alfredo
          <input type='radio' name='sauce'/>
        </label>
        <label>
          Spicy Cowboy on the Rodeo
          <input type='radio' name='sauce'/>
        </label>
        <label>
          Plain Jane
          <input type='radio' name='sauce'/>
        </label>
      {/* Toppings! */}
      <h2>Add Some Toppings!</h2>
      <label>
        Pepperoni
        <input type='checkbox' name='pep'/>
      </label>
      <label>
        Ham
        <input type='checkbox' name='ham'/>
      </label>
      <label>
        Bacon
        <input type='checkbox'name='bacon'/>
      </label>
      <label>
        Chicken
        <input type='checkbox'name='ckn'/>
      </label>
      <label>
        Canadian Bacon
        <input type='checkbox'name='cbcn'/>
      </label>
      <label>
        Sausage
        <input type='checkbox'name='ssg'/>
      </label>
      <label>
        Spinach
        <input type='checkbox'name='spin'/>
      </label>
      <label>
        Onion
        <input type='checkbox'name='oni'/>
      </label>
  {/* Instructions */}
  <label>
    <h2>Special Instructions</h2>
    <label>
      <input 
        type='text'
        name='instructions' 
        placeholder='Please add any special requests to the restaurant here.' 
      />
    </label>
  </label>
      <Link to='/payment'>
        <button onChange={onSubmit}>Place Order!</button>
      </Link>
    </form>
  )
}