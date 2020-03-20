import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const CTALink = styled(Link)`
  &:hover i {
    padding-left: 20px;
  }
  & i {
    padding-left: 5px;
    transition: all 0.5s ease;
  }
  background-color: #bf215b;
  border-color: #bf215b;
`

const Home = () => {
  return (
    <header className="fdb-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <h2>
              Autoreporte de Coronavirus en Paraguay ¿Tenés síntomas de COVID19? 
            </h2>
            <p className="lead">
              Ayudanos a tener datos estadisticos de la situación real del COVID19 en Paraguay 
              llenando este formulario si tenes o tuviste sintomas.
            </p>
            <ul>
              <li>Tu información personal es opcional, ¡no te preocupes!</li>
              <li>Mirá los datos estadísticos que ya juntamos <Link to="/stats">aquí</Link>.</li>
            </ul>   
            <p className="mt-4">
              <CTALink className="btn btn-secondary" to="/report">
                Revisar mis síntomas<i className="fas fa-arrow-right ml-1"></i>
              </CTALink>
            </p>

            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Versión de Prueba</h4>
              <p>
                Esta no es la versión oficial de la app. Esta app se encuentra
                en <strong>modo de prueba</strong> para ajustar los últimos
                detalles. Apenas esté lista, todos los colaboradores lo
                estaremos lanzando por nuestros canales oficiales. ¡Muchas
                gracias por ayudar a hacerla mejor!
              </p>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0 d-lg-block d-none">
            <img alt="Hero Graphic" className="img-fluid" src="/img/hero.png" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home
