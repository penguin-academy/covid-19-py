import React, { useState } from 'react'
import { useReportContext } from '../layouts/Report'

const Checkbox = props => {
  const { id, label, name } = props
  const [checked, setChecked] = useState(false)

  const { onCheckboxChange } = useReportContext()

  const handleChange = () => {
    let newValue = !checked
    onCheckboxChange(id, newValue)
    setChecked(newValue)
  }

  return (
    <div onClick={handleChange} style={{ cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={checked}
        id={name}
        {...props}
        style={{ cursor: 'pointer' }}
      />
      <label style={{ paddingLeft: 10, cursor: 'pointer' }}>{label}</label>
    </div>
  )
}

export default Checkbox
