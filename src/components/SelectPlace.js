import React, { useCallback, useRef } from 'react'
import AsyncSelect from 'react-select/async'
import { debounce } from 'lodash'

const Component = ({ onChange, value }) => {
  const autocomplete = useRef()

  if (!autocomplete.current) {
    autocomplete.current = new window.google.maps.places.AutocompleteService()
  }

  function getPlacePredictions(input, callback) {
    if (!input) return callback(null)
    autocomplete.current.getPlacePredictions(
      {
        input: input,
        types: ['(regions)'],
        componentRestrictions: { country: 'py' }
      },
      predictions => {
        if (!predictions) return callback(null)
        callback(
          predictions.map(prediction => {
            return { value: prediction.place_id, label: prediction.description }
          })
        )
      }
    )
  }

  const getColorPredictions = (inputValue, callback) => {
    setTimeout(() => {
      callback([{ value: 'red', label: 'red' }])
    }, 1000)
  }

  const debouncedGetPlacePredictions = useCallback(
    debounce(getPlacePredictions, 500),
    []
  )

  return (
    <AsyncSelect
      loadOptions={debouncedGetPlacePredictions}
      defaultOptions
      // onInputChange={i => console.log(i)}
      onChange={onChange}
      isClearable={true}
      noOptionsMessage={i =>
        !i.inputValue
          ? 'Por favor, escriba para encontrar su vecindario o ciudad.'
          : 'No hay coincidencias'
      }
      placeholder="Seleccionar ..."
      value={value}
    />
  )
}

export default Component
