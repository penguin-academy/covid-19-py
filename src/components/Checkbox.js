import React, { useState } from 'react'
import { useReportContext } from '../layouts/Report'

const Checkbox = props => {
  const { label, name } = props
  const [checked, setChecked] = useState(false)

  const { onCheckboxChange } = useReportContext()

  const handleChange = () => {
    let newValue = !checked
    onCheckboxChange(name, newValue)
    setChecked(newValue)
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        id={name}
        {...props}
        style={{ cursor: 'pointer' }}
      />
      <label style={{ paddingLeft: 10 }} htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
