import React, { useState, useReducer } from 'react'
// import { useReportContext } from '../layouts/Report'

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

const IDInput = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false
  })
  const [error, setError] = useState(null)
  // const { onIdChange, onIdChangeError } = useReportContext()

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
    if (!inputState.value) {
      setError('Debes ingresar una cedula')
      // onIdChangeError()
      return
    }
    const cedula = inputState.value.replace(/\s/g, '')

    if (cedula) {
      fetch(
        `https://postulacion.juventud.gov.py/api/sii/identificaciones/${cedula}`
      )
        .then(res => res.json())
        .then(data => {
          let { obtenerPersonaPorNroCedulaResponse: res } = data
          if (res) {
            // onIdChangeError()
            throw new Error('La Cedula no es valida')
          }
          // onIdChange(data)
        })
        .catch(err => setError(err.message))
    }
  }

  return (
    <div className="form-group mr-0 mr-lg-2">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        value={inputState.value}
        onChange={textChangeHandler}
        onBlur={lostFocusHandler}
        {...props}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default IDInput
