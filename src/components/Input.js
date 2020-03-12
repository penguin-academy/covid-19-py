import React, { useReducer, useEffect } from 'react'
import { useReportContext } from '../layouts/Report';

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    touched: false
  });


  const { onInputChange, formState } = useReportContext();



  useEffect(() => {
    if (inputState.touched) {
      console.log('hello');

      onInputChange(props.id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, props.id]);

  const textChangeHandler = textVal => {
    const text = textVal.target.value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const numberRegex = /^(0|[1-9]\d*)$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.isHeight && !numberRegex.test(text.toLowerCase())) {
      isValid = false;
    }

    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }



    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  return (
    <div>
      <input value={inputState.value} onChange={textChangeHandler} onBlur={lostFocusHandler} />
    </div>
  )
}

export default Input
