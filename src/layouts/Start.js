import React, { useState, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import FormBox from '../components/FormBox'

const Start = ({}) => {
  return (
    <FormBox>
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h1>Antes de empezar</h1>
              <p className="lead">
                Esta herramienta es utilizada meramente con fines informativos.
                No provee una asesoría médica. No la uses para reemplazar a una
                consulta, diagnóstico o tratamiento con un profesional.
              </p>
              <hr className="mb-5 mt-5" />
              <p className="mt-5 mt-sm-4">
                <h3 className="pb-4">
                  ¿Cómo está su salud en general en este momento?
                </h3>
                <a
                  className="btn btn-lg btn-success"
                  href="https://www.froala.com"
                >
                  <i
                    className="fas fa-smile-beam"
                    style={{ paddingRight: 10 }}
                  />
                  Buena
                </a>

                <a
                  className="btn btn-lg btn-danger ml-5"
                  href="https://www.froala.com"
                >
                  <i
                    className="fas fa-frown-open"
                    style={{ paddingRight: 10 }}
                  />
                  Mala
                </a>
              </p>
            </div>
          </div>
          <div className="text-center">
            <a className="btn btn-link ml-4" href="https://www.froala.com">
              I'm just testing
            </a>
          </div>
          <div className="row pt-5 pb-3">
            <div className="col-12 text-center">
              <p>
                By continuing, you agree to our&nbsp;
                <Link to="/legal" target="_blank">
                  terms of service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </FormBox>
  )
}

export default Start
