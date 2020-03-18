import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import ToggleTag from '../components/Toggle'
import SelectQuestionTag from '../components/SelectQuestion'
import IDInput from '../components/IDInput'
import PlacesInput from '../components/PlacesInput'
import SelectPlace from '../components/SelectPlace'

export default {
  title: 'Inputs'
}

export const Toggle = () => (
  <div style={{ maxWidth: 250, margin: 15 }}>
    <ToggleTag />
  </div>
)

export const SelectQuestion = () => {
  const [selected, setSelected] = useState('')
  return (
    <div style={{ maxWidth: 250, margin: 15 }}>
      <SelectQuestionTag
        options={[
          { value: 'yes', label: 'Sí' },
          { value: 'no', label: 'No' }
        ]}
        isSearchable={false}
        value={selected}
        onChange={({ value }) => setSelected(value)}
      />
      <pre>{JSON.stringify(selected, null, 2)}</pre>
    </div>
  )
}

export const ID = () => (
  <div style={{ maxWidth: 250, margin: 30 }}>
    <IDInput
      label="Numero de Cedula"
      id="document"
      type="text"
      className="form-control form-control-solid rounded-pill"
      placeholder="Cedula"
      required
    />
  </div>
)

export const Places = () => (
  <>
    <div style={{ maxWidth: 350, margin: 30 }}>
      <PlacesInput
        id="home"
        className="form-control form-control-solid rounded-pill"
        placeholder="Direccion"
        label="Direccion"
        errorMessage="Debes ingresar una direccion"
        required
        options={{
          types: ['(regions)'],
          componentRestrictions: { country: 'py' }
        }}
      />
    </div>
    <div style={{ maxWidth: 350, margin: 30 }}>
      <SelectPlace />
    </div>
  </>
)
