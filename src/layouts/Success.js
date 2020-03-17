import React from 'react'
import { Lottie } from '@crello/react-lottie'
import * as checkData from '../lottie/check.json'
import styled from 'styled-components'

const Header = styled.header`
  padding: 4.5rem 0px;
  @media (max-width: 991px) {
    padding-top: 1rem;
  }
`

const Justify = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
`

const Success = ({ form }) => {
  console.log(form)
  //
  // TEXT
  //

  const text = {
    alarm:
      'Signos de alarma, llame al 911 inmediatamente y pida ayuda. Si está en condiciones vaya al hospital para atención médica inmediata.',
    alarmTitle: 'Busque atención médica inmediatamente.',
    symptoms:
      '¿Fiebre y Dificultades Respiratorias? Usted tiene síntomas y puede ser contagioso. Aislate e informa a tu entorno para que tomen las precauciones necesarias. Por favor llama al 154 para informar que cuentas con estos síntomas.',
    symptomsTitle: '',
    exposure:
      'Estuviste expuesto/a o tuviste contacto con un caso confirmado de COVID19, el protocolo recomendado es que te aisles por 7 a 14 días.',
    exposureTitle: '',
    noSymptoms:
      'Sin síntomas. En este momento no muestras síntomas de COVID19, sin embargo, existen casos asintomáticos. Lo ideal es que mantengas tus contactos al mínimo y tengas todas las precauciones durante esta etapa de emergencia sanitaria.',
    noSymptomsTitle: '',
    medical:
      'Una mascarilla quirúrgica (tipo II o IIR) está indicada para el personal médico: Examinar a un paciente con tos o fiebre si el cuidador experimenta síntomas respiratorios o generales como fatiga, dolor muscular o dolores de cabeza. Una mascarilla de ultrafiltración (FFP2 3) sólo se requiere para el personal hospitalario expuesto a actividades de alto riesgo.',
    medicalTitle: ''
  }

  //
  // THE ANSWER IS CALCULATED HERE
  //
  let msg = {}

  //
  // Protect the success route if form is empty
  //

  const isYes = key => form[key].answer === 'yes'

  let exposure = false
  if (isYes('professionalExposure') || isYes('familyExposure')) exposure = true

  let symptoms = false
  if (isYes('breath') && isYes('fever')) symptoms = true

  if (isYes('alarmSigns')) {
    msg.result = text.alarm
    msg.title = text.alarmTitle
    msg.bar = 90
  } else if (symptoms) {
    msg.result = text.symptoms
    msg.bar = 60
  } else if (exposure) {
    msg.result = text.exposure
    msg.bar = 40
  } else {
    msg.result = text.noSymptoms
    msg.bar = 30
  }

  if (isYes('healthProfessional')) msg.medical = text.medical

  return (
    <>
      <Header className="fdb-block">
        <div className="container">
          <Disclaimer>
            <h2>Los resultados de tu evaluación</h2>
            <p className="">
              Esta herramienta es utilizada meramente con fines informativos.
              <br />
              No provee una asesoría médica.
              <br />
              No la uses para reemplazar a una consulta, diagnóstico o
              tratamiento con un profesional.
            </p>
          </Disclaimer>
          <div className="row text-left align-items-center">
            <div className="col-10 col-sm-6 m-auto m-lg-0 col-lg-2">
              <Lottie
                width={'15rem'}
                height={'15rem'}
                config={{
                  animationData: checkData.default
                }}
                className="d-none d-lg-block"
                style={{ margin: '0 auto' }}
                speed="0.3"
              />
            </div>
            <div className="col-12 col-lg-8 offset-lg-1">
              <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2">
                  <h2>
                    <strong>{msg.title}</strong>
                  </h2>
                  <Justify>
                    <div>
                      <Progress
                        value={msg.bar}
                        style={msg.bar > 30 ? 'danger' : 'warning'}
                      />
                    </div>
                    <p className="lead">{msg.result}</p>
                  </Justify>
                </div>
                {/* <div className="col-12 col-sm-6 pt-3 pt-sm-0">
                  <h3>
                    <strong>
                      Como usted es parte de un grupo con riesgo de
                      complicaciones
                    </strong>
                  </h3>
                  <Progress value={60} style="danger" />
                  <p className="lead">
                    Le recomendamos que se ponga en contacto, primero por
                    teléfono, con su médico o un centro de salud y considere el
                    auto-aislamiento.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Header>

      <section className="fdb-block pt-0">
        <div className="container">
          <div className="row">
            <div className="col text-left">
              {msg.medical && (
                <>
                  <h2>Consejos para su práctica profesional:</h2>
                  <p>{msg.medical}</p>
                </>
              )}
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

const RedBox = styled.div`
  border-top: solid 0.3125rem red;
  z-index: 2;
  padding: 0.75rem 0.5rem !important;
`

const Disclaimer = ({ children }) => {
  return (
    <div className="row pb-5">
      <div className="col">
        <RedBox className="fdb-box">
          <div className="row text-center justify-content-center">
            <div className="col-12 col-md-9 col-lg-7">{children}</div>
          </div>
        </RedBox>
      </div>
    </div>
  )
}
export default Success
