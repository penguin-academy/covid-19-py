import React, { useState } from 'react'

const Toggle = () => {
  const [checked, setChecked] = useState(false)

  return (
    <button
      className={`btn ${checked ? 'btn-success' : 'btn-light'}`}
      onClick={() => setChecked(!checked)}
    >
      Symptom
    </button>
  )
}

export default Toggle
