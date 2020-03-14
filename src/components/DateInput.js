import React, { useReducer, useEffect } from 'react'
import { useReportContext } from '../layouts/Report'

const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_BLUR = 'INPUT_BLUR'

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid
      }
    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      }
    default:
      return state
  }
}

const DateInput = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    touched: false
  })

  const { onInputChange } = useReportContext()

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(props.id, inputState.value, inputState.isValid)
    }
  }, [inputState, onInputChange, props.id])

  const textChangeHandler = textVal => {
    const text = textVal.target.value
    let isValid = true
    if (props.required && text.trim().length === 0) {
      isValid = false
    }
    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid })
  }

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR })
  }

  return (
    <div className="form-group mr-0 mr-lg-2">
      <label>{props.label}</label>
      <input
        type="date"
        placeholder="Fecha de Nacimiento"
        onChange={textChangeHandler}
        onBlur={lostFocusHandler}
        {...props}
      />
      {!inputState.isValid && inputState.touched && (
        <p style={{ color: 'red' }}>{props.errormessage}</p>
      )}
    </div>
  )
}

export default DateInput
