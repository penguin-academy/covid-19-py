import React, { useState } from 'react'
import ToggleTag from '../components/Toggle'
import SelectQuestionTag from '../components/SelectQuestion'
import SelectPlace from '../components/SelectPlace'

export default {
  title: 'Inputs'
}

export const Toggle = () => (
  <div style={{ maxWidth: 250, margin: 15 }}>
    <ToggleTag>Symptom</ToggleTag>
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

export const Places = () => (
  <>
    <div style={{ maxWidth: 350, margin: 30 }}>
      <SelectPlace onChange={console.log} />
    </div>
  </>
)
