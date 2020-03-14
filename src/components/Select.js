import React from 'react'
import { useReportContext } from '../layouts/Report';



const Select = (props) => {
  const { options, id } = props;



  const { onInputChange, } = useReportContext();



  const handleChange = (e) => {


    onInputChange(id, e.target.value, true)

  }



  return (
    <div className="form-group">
      <select type="text" className="form-control" placeholder="Tipo de Documento" onChange={handleChange} >
        {options.map(option => (<option key={option.value} value={option.value}> {option.label}</option>))}
      </select>
    </div>
  )
}

export default Select
