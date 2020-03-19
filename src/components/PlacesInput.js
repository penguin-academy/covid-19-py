import React, { useState, useReducer, useEffect } from 'react'
// import { useReportContext } from '../layouts/Report'
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete'

const INPUT_BLUR = 'INPUT_BLUR'
const INPUT_CHANGE = 'INPUT_CHANGE'

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

const PlacesInput = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    touched: false
  })

  const [gps, setGps] = useState(null)

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        setGps(latLng)
        dispatch({ type: INPUT_BLUR })
        dispatch({
          type: INPUT_CHANGE,
          value: address,
          isValid: inputState.isValid
        })
      })
      .catch(error => console.error('Error', error))
  }

  // const { onAddressChange } = useReportContext()

  // useEffect(() => {
  //   if (inputState.touched) {
  //      onAddressChange(props.id, inputState.value, gps)
  //   }
  // }, [props.id, inputState, onAddressChange, gps])

  const textChangeHandler = text => {
    let isValid = true
    if (props.required && text.trim().length === 0) {
      isValid = false
    }

    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid })
  }

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR })
  }

  const lineStyle = {
    cursor: 'pointer',
    display: 'block',
    width: '100%',
    padding: '.25rem 1.5rem',
    clear: 'both',
    fontWeight: 400,
    color: '#212529',
    textAlign: 'inherit',
    whiteSpace: 'nowrap',
    border: 0
  }

  return (
    <PlacesAutoComplete
      value={inputState.value}
      onChange={textChangeHandler}
      searchOptions={props.options}
      onSelect={handleSelect}
    >
      {autoCompleteProps => {
        const {
          getInputProps,
          suggestions,
          getSuggestionItemProps,
          loading,
          errorMessage
        } = autoCompleteProps

        return (
          <div
            className="form-group mr-0 mr-lg-2"
            style={{ position: 'relative' }}
          >
            <label htmlFor={props.id}>{props.label}</label>
            <input
              className={props.className}
              style={{ width: '100%' }}
              placeholder={props.placeholder}
              onBlur={lostFocusHandler}
              id={props.id}
              {...getInputProps()}
            />
            {!inputState.isValid && inputState.touched && (
              <p style={{ color: 'red' }}>{errorMessage}</p>
            )}
            <div
              style={{
                maxHeight: '564px',
                overflow: 'hidden',
                minHeight: '0px',
                position: 'absolute',
                willChange: 'transform',
                top: '0px',
                left: '0px',
                transform: 'translate3d(0px, 75px, 0px)',
                minWidth: '100%',
                WebkitBoxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                boxSizing: 'border-box',
                border: '1px solid rgba(0,0,0,.15)',
                borderRadius: '.25rem',
                padding: '.5rem 0',
                margin: '.125rem 0 0',
                backgroundColor: 'white',
                zIndex: 1000,
                display: loading || suggestions.length > 0 ? 'block' : 'none'
              }}
            >
              {loading && <div style={lineStyle}>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item'
                // inline style for demonstration purpose

                const style = {
                  backgroundColor: suggestion.active
                    ? '#fafafa'
                    : 'transparent',
                  ...lineStyle
                }
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      }}
    </PlacesAutoComplete>
  )
}

export default PlacesInput
