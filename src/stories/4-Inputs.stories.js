import React, { useState } from 'react'
import ToggleTag from '../components/Toggle'
import SelectQuestionTag from '../components/SelectQuestion'

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
        options={options}
        isSearchable={false}
        value={selected}
        onChange={({ value }) => setSelected(value)}
      />
      <pre>{JSON.stringify(selected, null, 2)}</pre>
    </div>
  )
}
