import React, { useReducer, useEffect } from 'react'
import { useReportContext } from '../layouts/Report';



const Select = (props) => {
  const { options } = props;



  const { onInputChange, formState } = useReportContext();



  const handleChange = (e) => {
    console.log(e);

  }



  return (
    <div className="form-group">
      <select type="text" className="form-control" placeholder="Tipo de Documernto" onChange={handleChange} >
        {options.map(option => (<option key={option.value} value={option.value}> {option.label}</option>))}
      </select>
    </div>
  )
}

export default Select
