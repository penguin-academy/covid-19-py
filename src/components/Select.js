import React from 'react'
import { useReportContext } from '../layouts/Report'

const Select = props => {
  const { options, id } = props

  const { onInputChange } = useReportContext()

  const handleChange = e => {
    onInputChange(id, e.target.value, true)
  }

  return (
    <div className="form-group mr-0 mr-lg-2">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        type="text"
        className="form-control"
        placeholder="Tipo de Documento"
        onChange={handleChange}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {' '}
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
