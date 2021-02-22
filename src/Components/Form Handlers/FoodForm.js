import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';



export default function Foodform({values, onChange, newPizza, disabled, errors}){
  // don't think I need this now that the submit button is leading to another page w/ routing
  // keeping it just in case
  const onSubmit = e => {
    e.preventDefault()
    newPizza()
  }

  const changeHandler = e => {
    const { name, value, type, checked } = e.target;
    const values = type === 'checkbox' ? checked : value;
    onChange(name, values)
  }

  return(
    <Eats>
    <form onSubmit={onSubmit}>
      <h1>Set up your pizza. </h1>
      {/* Size Select */}
      <div>
        <h2>Choice of Size: {errors.size}</h2>
      </div>
        <select name='size' value={values.size} onChange={changeHandler}>
          <option value=''> Select option </option>
          <option value='Personal'>Personal 6"</option>
          <option value='Small'>Small 10"</option>
          <option value='Medium'>Medium 12"</option>
          <option value='Large'>Large 16"</option>
          <option value='XLarge'>X-Large 18"</option>
        </select>
      {/* Sauce Choices */}
      <div>
        <h2>Choice of Sauce: {errors.sauce}</h2>
      </div>

        <label>
          Red boi
          <input 
            type='radio' 
            name='sauce' 
            value='red' 
            checked={values.sauce === 'red'} 
            onChange={changeHandler}
          />
        </label>
        <label>
          Cheesy Alfredo
          <input 
            type='radio' 
            name='sauce' 
            value='cheese' 
            checked={values.sauce === 'cheese'} 
            onChange={changeHandler}
          />
        </label>
        <label>
          Spicy Cowboy on the Rodeo
          <input 
            type='radio' 
            name='sauce' 
            value='cowboy' 
            checked={values.sauce === 'cowboy'} 
            onChange={changeHandler}/>
        </label>
        <label>
          Plain Jane
          <input 
            type='radio' 
            name='sauce' 
            value='plain' 
            checked={values.sauce === 'plain'} 
            onChange={changeHandler}
          />
        </label>
      {/* Toppings! */}
      <h2>Add Some Toppings!</h2>
      <label>
        Pepperoni
        <input 
          type='checkbox' 
          name='pep'
          checked={values.pep}
          onChange={changeHandler}
        />
      </label>
      <label>
        Ham
        <input 
          type='checkbox' 
          name='ham'
          checked={values.ham}
          onChange={changeHandler}
        />
      </label>
      <label>
        Bacon
        <input 
        type='checkbox'
        name='bacon'
        checked={values.bacon}
          onChange={changeHandler}
        />
      </label>
      <label>
        Chicken
        <input 
        type='checkbox'
        name='ckn'
        checked={values.ckn}
        onChange={changeHandler}
        />
      </label>
      <label>
        Canadian Bacon
        <input 
          type='checkbox'
          name='cbcn'
          checked={values.cbcn}
          onChange={changeHandler}
          />
      </label>
      <label>
        Sausage
        <input 
          type='checkbox'
          name='ssg'
          checked={values.ssg}
          onChange={changeHandler}
          />
      </label>
      <label>
        Spinach
        <input 
          type='checkbox'
          name='spin'
          checked={values.spin}
          onChange={changeHandler}
          />
      </label>
      <label>
        Onion
        <input 
          type='checkbox'
          name='oni'
          checked={values.oni}
          onChange={changeHandler}
          />
      </label>
  {/* Instructions */}
  <label>
    <h2>Special Instructions: {errors.instructions}</h2>
    <label>
      <input 
        type='text'
        name='instructions' 
        placeholder='Please add any special requests to the restaurant here.' 
      />
    </label>
  </label>
      <Link to='/payment'>
        <button disabled={disabled}>Place Order!</button>
      </Link>
    </form>
    </Eats>
  )
}



const Eats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 10%;
  padding: 8px 0;
  line-height: 2;
  font-size: 15px;

  h1, h2{
    background-color: #797684;
    padding: 10px;
  }

  label {
    font-size: 20px;
    padding: 5px;
  }

  input{
    margin: 2px;
    padding: 5px;
    width: 100%;
  }

`