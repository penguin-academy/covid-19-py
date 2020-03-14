import React, { useState } from 'react'
import { useReportContext } from '../layouts/Report';

const Checkbox = ({ id, label }) => {
  const [checked, setChecked] = useState(false)

  const { onCheckboxChange } = useReportContext()

  const handleChange = () => {
    let newValue = !checked
    onCheckboxChange(id, newValue)
    setChecked(newValue)
  }

  return (
    <div onClick={handleChange}>
      <input type='checkbox' checked={checked} name={id} /> &nbsp; {label} <br />
    </div>
  )
}

export default Checkbox
