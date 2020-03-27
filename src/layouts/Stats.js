import React, { Component } from 'react'

import AlignmentChart from '../components/AlignmentChart'
import PyChart from '../components/PyChart'

const Stats = () => {
  return (
    <section className="fdb-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12 col-xl-12">
            <h1>Estadísticas</h1>

            {/*<h2>Comparación de crecimiento</h2>
            <p>
              El siguiente gráfico muestra una estimación de cuántos días atrȧs
              del país con más infecciones (Brasil) se encuentran los demás
              países de la región. Para detalles de cómo se alinean estas curvas
              se utiliza{' '}
              <a href="https://github.com/torresmateo/covid19/blob/master/update_and_process_data.py#L101">
                este método
              </a>
              . Los datos se actualizan cada hora.
            </p>
            <div id="chart">
              <AlignmentChart></AlignmentChart>
            </div>*/}
            <h2>Modelo Predictivo</h2>
            <p>
              El siguiente gráfico muestra una estimación de los casos confirmados (acumulados) para los 
              siguientes dos días usando un modelo logístico.
              Detalles del modelo pueden estudiarse <a href="https://github.com/torresmateo/covidpy-rest/blob/4b6fc38811708a6762fd0c8d21357c23ad244ad6/app.py#L63">
                aquí
              </a>
            </p>
            <div id="chart2">
              <PyChart></PyChart>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
