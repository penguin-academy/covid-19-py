import React, { useCallback, useRef } from 'react'
import AsyncSelect from 'react-select/async'
import { debounce } from 'lodash'

const Component = ({ onChange, value, onCoords }) => {
  const autocomplete = useRef()
  const geocoder = useRef()

  if (!autocomplete.current) {
    autocomplete.current = new window.google.maps.places.AutocompleteService()
  }
  if (!geocoder.current) {
    geocoder.current = new window.google.maps.Geocoder()
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

  const onChangeWithCoords = selected => {
    onChange(selected)

    if (selected) {
      function callback(places, status) {
        onCoords({
          bounds: places[0].geometry.bounds.toJSON(),
          location: places[0].geometry.location.toJSON()
        })
      }

      geocoder.current.geocode({ placeId: selected.value }, callback)
    }
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
      onChange={onChangeWithCoords}
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
