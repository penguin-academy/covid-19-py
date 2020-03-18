import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'

const Quizz = () => {
  return (
    <section
      className="fdb-block"
      style={{
        backgroundImage: 'url(/img/1.svg)',
        paddingTop: '4.5rem'
      }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-lg-10">
            <div className="fdb-box fdb-touch" style={{ padding: 0 }}>
              <ReactTypeformEmbed
                style={{ position: 'static', height: '90vh' }}
                url="https://innovapy.typeform.com/to/BGCKFv"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quizz
