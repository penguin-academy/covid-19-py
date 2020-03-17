import React from 'react'
import styled from 'styled-components'

const FdbBox = styled.div`
  @media (max-width: 991px) {
    padding: 0;
  }
`

const FdbBlock = styled.section`
  background-image: url(/img/red.svg);
  padding: 5rem 0 7.5rem 0;
`

const FormBox = ({ children }) => {
  return (
    <FdbBlock className="fdb-block">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <FdbBox className="fdb-box" style={{ overflow: 'visible' }}>
              {children}
            </FdbBox>
          </div>
        </div>
      </div>
    </FdbBlock>
  )
}

export default FormBox
