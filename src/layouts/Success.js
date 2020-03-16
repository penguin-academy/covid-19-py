import React from 'react'
import { Link } from 'react-router-dom'
import { Lottie } from '@crello/react-lottie'
import * as checkData from '../lottie/check.json'
import styled from 'styled-components'

const Success = ({ history }) => {
  return (
    <>
      <section className="fdb-block">
        <div className="container">
          <div className="row text-left align-items-center">
            <div className="col-10 col-sm-6 m-auto m-lg-0 col-lg-4">
              <Lottie
                width={'15rem'}
                height={'15rem'}
                config={{ animationData: checkData.default }}
                style={{ margin: '0 auto' }}
                speed="0.3"
              />
            </div>
            <div className="col-12 col-lg-7 offset-lg-1 pt-4 pt-lg-0">
              <h1>Los resultados de tu evaluación</h1>
              <p className="lead">
                Esta herramienta es utilizada meramente con fines informativos.
                No provee una asesoría médica. No la uses para reemplazar a una
                consulta, diagnóstico o tratamiento con un profesional.
              </p>
              <div className="row mt-5">
                <div className="col-12 col-sm-6">
                  <Progress value={30} style="success" />
                  <h3>
                    <strong>No es probable que tengas el virus</strong>
                  </h3>
                  <p className="lead"></p>
                </div>
                <div className="col-12 col-sm-6 pt-3 pt-sm-0">
                  <Progress value={60} style="danger" />
                  <h3>
                    <strong>
                      Como usted es parte de un grupo con riesgo de
                      complicaciones
                    </strong>
                  </h3>
                  <p className="lead">
                    Le recomendamos que se ponga en contacto, primero por
                    teléfono, con su médico o un centro de salud y considere el
                    auto-aislamiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fdb-block pt-0">
        <div className="container">
          <div className="row">
            <div className="col text-left">
              <h2>Consejos generales a seguir en todo momento</h2>
              <p>
                Respetar las medidas de higiene. Limitar las visitas a conocidos
                en el hospital o que residan en residencias de ancianos/cuidados
                tanto como sea posible. Si no se puede evitar esta visita,
                póngase en contacto con el personal de enfermería y siga sus
                recomendaciones. Cuando espere en la parada del bús, manténgase
                lo más alejado posible de otras personas
              </p>
              <ul>
                <li>
                  Reduzca sus viajes de placer. Si es posible, evite viajar
                  durante la hora pico.
                </li>
                <li>
                  Manténgase lo más alejado posible de otras personas en el
                  transporte público y aplique las normas de higiene y las
                  recomendaciones de comportamiento mencionadas anteriormente.
                </li>
                <li>
                  Si tiene síntomas de enfermedades respiratorias (por ejemplo,
                  una tos leve), evite utilizar el transporte público si es
                  posible.
                </li>
                <li>
                  Se utilizan mascarillas para proteger a los trabajadores
                  sanitarios que tratan los casos sospechosos, así como a las
                  personas especialmente vulnerables.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const ProgressBar = styled.div`
  width: 20px;
  min-height: 100%;
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
  float: left;
  & .progress-bar {
    width: 100%;
    height: 0;
    -webkit-transition: height 0.6s ease;
    -o-transition: height 0.6s ease;
    transition: height 0.6s ease;
  }
`

const Progress = ({ value, style }) => {
  return (
    <ProgressBar className="progress progress-bar-vertical">
      <div
        className={`progress-bar bg-${style}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ height: `${value}%` }}
      >
        <span className="sr-only">{value}% Complete</span>
      </div>
    </ProgressBar>
  )
}
export default Success
