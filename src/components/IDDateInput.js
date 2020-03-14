import React, { useState, useReducer, useEffect } from 'react'
import { useReportContext } from '../layouts/Report'

const INPUT_CHANGE = 'INPUT_CHANGE'

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid
      }
    default:
      return state
  }
}

const IDDateInput = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    touched: false
  })
  const [error, setError] = useState(null)

  const {
    onInputChange,
    formState,
    onDobError,
    onDobSuccess
  } = useReportContext()

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
    setError(null)
    let dobDate = new Date(formState.inputValues.dob)
    let userDate = new Date(inputState.value)
    dobDate = `${dobDate.getFullYear()}-${dobDate.getMonth() +
      1}-${dobDate.getUTCDate()}`
    userDate = `${userDate.getFullYear()}-${userDate.getMonth() +
      1}-${userDate.getUTCDate()}`
    if (!(dobDate === userDate)) {
      onDobError()
      setError('La informacion no coincide')
      console.log(error)
      return
    } else {
      onDobSuccess()
    }
  }

  return (
    <div className="form-group mr-0 mr-lg-2">
      <label htmlFor={props.id}>Fecha de Nacimiento</label>
      <input
        type="date"
        onChange={textChangeHandler}
        onBlur={lostFocusHandler}
        {...props}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default IDDateInput
