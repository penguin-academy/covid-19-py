import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import AlignmentChart from '../components/AlignmentChart'
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



const Stats = () => {
  return (
    <section className="fdb-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12 col-xl-12">
            <h2>
              Estadísticas
            </h2>

            <h3>Comparación de crecimiento</h3>
            <p>
              El siguiente gráfico muestra una estimación de cuántos días atrȧs del país con más infecciones (Brasil) 
              se encuentran los demás países de la región.

              Para detalles de cómo se alinean estas curvas se utiliza <a href="https://github.com/torresmateo/covid19/blob/master/update_and_process_data.py#L101">este método</a>.

            </p> 
            <div id="chart">
              <AlignmentChart></AlignmentChart>
            </div>

            {/* <div className="row pt-4 pt-xl-5">
              <div className="col-12 col-md-5">
                <h4>
                  <strong>Feature One</strong>
                </h4>
                <p>A small river named Duden flows</p>
              </div>
              <div className="col-12 col-md-5 m-auto pt-3 pt-md-0">
                <h4>
                  <strong>Feature Two</strong>
                </h4>
                <p>Separated they live in Bookmarksgrove</p>
              </div>
            </div> */}
          </div>
          {/*<div className="col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0 d-lg-block d-none">
            <img alt="Hero Graphic" className="img-fluid" src="/img/hero.png" />
          </div>*/}
        </div>
      </div>
    </section>
  );
}

export default Stats
