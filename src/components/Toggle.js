import React, { useState } from 'react'

const Toggle = ({ children }) => {
  const [checked, setChecked] = useState(false)

  return (
    <button
      className={`m-2 btn ${checked ? 'btn-success' : 'btn-light'}`}
      onClick={() => setChecked(!checked)}
    >
      {children}
    </button>
  )
}

export default Toggle
