import * as yup from 'yup';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Foodform from './FoodForm';
import PayScreen from './PayScreen';
import schema from './Schema/Schema';

const initVal = {
  size: '',
  sauce: '',
  pep: false,
  ham: false,
  bacon: false,
  ckn: false,
  cbcn: false,
  ssg: false,
  spin: false,
  oni: false,
  instructions: '',
}

const initErr = {
  size: '',
  sauce: '',
  instructions: ''
}



export default function FormStuff(){
  const [dataInput, setDataInput] = useState([]);
  const [formVal, setFormVal] = useState(initVal);
  const [formErr, setFormErr] = useState(initErr);
  const [disabled, setDisabled] = useState(true);

  const newPizza = () => {
    const newInput = {
      size: formVal.size,
      sauce: formVal.sauce,
      pep: formVal.pep,
      ham: formVal.ham,
      bacon: formVal.bacon,
      ckn: formVal.ckn,
      cbcn: formVal.cbcn,
      ssg: formVal.ssg,
      spin: formVal.spin,
      oni: formVal.oni,
      instructions: formVal.instructions
    }
    postDataInput(newInput)
  }
  
  const postDataInput = (newDataInput) => {
    axios
      .get('https://reqres.in/', newDataInput)
      .then(res => {
        setDataInput([res.data, ...dataInput])
        setFormVal(initVal)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  const onChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErr({...formErr, [name]: '',})
      })
      .catch(err => {
        setFormErr({...formErr, [name]: err.errors[0]})
      })
    setFormVal({...formVal, [name]: value})
  }
  
  useEffect(() => {
    schema.isValid(formVal).then(valid => {
      setDisabled(!valid);
    });
  }, [formVal]);
  
  
  return(
    <div>
      <Foodform 
        values={formVal}
        newForm={newPizza}
        onChange={onChange}
        disabled={disabled}
        errors={formErr}
      />
    </div>
  )
}