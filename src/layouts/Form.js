import React, { useState, useReducer } from 'react'
import Question from '../components/SelectQuestion'

import styled from 'styled-components'

const Container100 = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #329ef7;
  background: linear-gradient(-220deg, #329ef7, #4158d0);
`
const Wrap100 = styled.div`
  width: 960px;
  background: #fff;
  border-radius: 5px;
`

const Form = () => {
  const sequence = [
    'generalHealth',
    'gender',
    'pregnant',
    'age',
    'breath',
    'fever',
    'alarmSigns',
    'riskGroup',
    'healthProfessional',
    'professionalExposure',
    'familyExposure'
  ]

  // takes an array of keys returns an object with keys and defaultStates
  const createDefaultStates = (list, defaultState) =>
    list.reduce((obj, item) => {
      obj[item] = defaultState
      return obj
    }, {})

  const [status, setStatus] = useReducer(
    (state, newState) => {
      return { ...state, ...newState }
    },
    {
      generalHealth: { show: true, answer: '' },
      ...createDefaultStates(sequence.slice(1), { show: false, answer: '' })
    }
  )

  const [errors, setErrors] = useState(createDefaultStates(sequence, false))

  const nextQuestion = (q, hide) => {
    const defaultState = { show: false, answer: '' }
    const i = sequence.indexOf(q)
    const valuesToReset = createDefaultStates(sequence.slice(i), defaultState)

    // if present: hide conditional question
    if (hide) valuesToReset[hide] = defaultState

    setStatus({
      ...valuesToReset,
      [q]: { show: true, answer: '' }
    })
  }

  const handleQuestion = (q, value, cbOrNextQ) => {
    if (value === null) return nextQuestion(q)
    setErrors({ ...errors, [q]: false })
    setStatus({
      [q]: { show: true, answer: value }
    })
    if (cbOrNextQ == null) return
    else if (typeof cbOrNextQ === 'function') cbOrNextQ()
    else nextQuestion(cbOrNextQ)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const newErrors = errors
    let errorPresent = false
    Object.entries(status).map(([key, value]) => {
      if (value.show === true && value.answer === '') {
        newErrors[key] = true
        errorPresent = true
      } else newErrors[key] = false
    })
    setErrors({ ...errors, newErrors })

    if (!errorPresent) {
      console.log('Submit')
    }
  }

  return (
    <section
      className="fdb-block"
      style={{
        backgroundImage:
          'url(https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/hero/red.svg)',
        padding: '5rem 0'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="fdb-box" style={{ overflow: 'visible' }}>
              <form onSubmit={handleSubmit}>
                <Question
                  title="¿Cómo está su salud en general en este momento?"
                  options={[
                    { value: 'good', label: 'Buena' },
                    { value: 'bad', label: 'Mala' },
                    {
                      value: 'testing',
                      label: 'Sólo estoy probando la aplicación'
                    }
                  ]}
                  onChange={({ value }) => {
                    handleQuestion('generalHealth', value, 'gender')
                  }}
                  value={status.generalHealth.answer}
                  error={errors.generalHealth}
                />
                {status['gender'].show && (
                  <>
                    <hr className="mb-5 mt-5" />
                    <Question
                      title="¿Qué sexo tiene?"
                      options={[
                        { value: 'male', label: 'Hombre' },
                        { value: 'female', label: 'Mujer' }
                      ]}
                      onChange={({ value }) => {
                        handleQuestion('gender', value, () => {
                          if (value === 'female') nextQuestion('pregnant')
                          else nextQuestion('age', 'pregnant')
                        })
                      }}
                      value={status.gender.answer}
                      error={errors.gender}
                    />
                  </>
                )}
                {status['pregnant'].show && (
                  <>
                    <hr className="mb-5 mt-5" />
                    <Question
                      title="¿Estás embarazada?"
                      options={[
                        { value: 'yes', label: 'Sí' },
                        { value: 'no', label: 'No' }
                      ]}
                      onChange={({ value }) => {
                        handleQuestion('pregnant', value, 'age')
                      }}
                      value={status.pregnant.answer}
                      error={errors.pregnant}
                    />
                  </>
                )}
                {status['age'].show && (
                  <>
                    <hr className="mb-5 mt-5" />
                    <Question
                      title="¿Cuántos años tienes?"
                      options={Array.from(Array(100)).map((_, i) => {
                        return {
                          value: i,
                          label: i + (i > 1 ? ' años' : ' año')
                        }
                      })}
                      onChange={({ value }) => {
                        handleQuestion('age', value, 'breath')
                      }}
                      value={status.age.answer}
                      error={errors.age}
                    />
                  </>
                )}
                {status['breath'].show && (
                  <>
                    <hr className="mb-5 mt-5" />
                    <Question
                      title="¿Tienen síntomas respiratorios como tos o dificultades respiratorias?"
                      subTitle="Un resfriado no es suficiente."
                      options={[
                        { value: 'yes', label: 'Sí' },
                        { value: 'no', label: 'No' }
                      ]}
                      onChange={({ value }) => {
                        handleQuestion('breath', value, 'fever')
                      }}
                      value={status.breath.answer}
                      error={errors.breath}
                    />
                  </>
                )}
                {status['fever'].show && (
                  <>
                    <hr className="mb-5 mt-5" />
                    <Question
                      title="¿Tienes fiebre?"
                      subTitle="Temperatura de 38°C o más."
                      options={[
                        { value: 'yes', label: 'Sí' },
                        { value: 'no', label: 'No' }
                      ]}
                      onChange={({ value }) => {
                        handleQuestion('fever', value, 'alarmSigns')
                      }}
                      value={status.fever.answer}
                      error={errors.fever}
                    />
                  </>
                )}
                {status['alarmSigns'].show && (
                  <>
                    <hr className="mb-5 mt-5" />
                    <Question
                      title="¿Tienes alguno de estos signos?"
                      subTitle="Grave dificultad respiratoria, sensación de ahogo, dolor de pecho, fiebre persistente mas de 72 horas, confusión o somnolencia, dolor de cabeza intenso, visión borrosa."
                      options={[
                        { value: 'yes', label: 'Sí' },
                        { value: 'no', label: 'No' }
                      ]}
                      onChange={({ value }) => {
                        handleQuestion('alarmSigns', value, 'riskGroup')
                      }}
                      value={status.alarmSigns.answer}
                      error={errors.alarmSigns}
                    />
                  </>
                )}
                {status['riskGroup'].show && (
                  <>
                    <hr className="mb-5 mt-5" />
                    <Question
                      title="¿Pertenece a un grupo de riesgo?"
                      subTitle="Mayores de 65 años, hipertensión, diabetes, enfermedades cardiovasculares, enfermedades pulmonares crónicas, inmunosupresión como resultado de una enfermedad o tratamiento, cáncer."
                      options={[
                        { value: 'yes', label: 'Sí' },
                        { value: 'no', label: 'No' }
                      ]}
                      onChange={({ value }) => {
                        handleQuestion('riskGroup', value, 'healthProfessional')
                      }}
                      value={status.riskGroup.answer}
                      error={errors.riskGroup}
                    />
                  </>
                )}
                {status['healthProfessional'].show && (
                  <>
                    <hr className="mb-5 mt-5" />
                    <Question
                      title="¿Es usted un profesional de la salud y tiene contacto con pacientes o residentes de asilos?"
                      options={[
                        { value: 'yes', label: 'Sí' },
                        { value: 'no', label: 'No' }
                      ]}
                      onChange={({ value }) => {
                        handleQuestion('healthProfessional', value, () => {
                          if (value === 'yes')
                            nextQuestion('professionalExposure')
                          else
                            nextQuestion(
                              'familyExposure',
                              'professionalExposure'
                            )
                        })
                      }}
                      value={status.healthProfessional.answer}
                      error={errors.healthProfessional}
                    />
                  </>
                )}
                {status['professionalExposure'].show && (
                  <>
                    <hr className="mb-5 mt-5" />
                    <Question
                      title="En el curso de su trabajo sin equipo de protección, ¿ha tenido contacto directo con uno en el caso confirmado?"
                      options={[
                        { value: 'yes', label: 'Sí' },
                        { value: 'no', label: 'No' }
                      ]}
                      onChange={({ value }) => {
                        handleQuestion(
                          'professionalExposure',
                          value,
                          'familyExposure'
                        )
                      }}
                      value={status.professionalExposure.answer}
                      error={errors.professionalExposure}
                    />
                  </>
                )}
                {status['familyExposure'].show && (
                  <>
                    <hr className="mb-5 mt-5" />
                    <Question
                      title="¿Hay algún caso confirmado en su entorno cercano (familia o personas del mismo hogar)?"
                      options={[
                        { value: 'yes', label: 'Sí' },
                        { value: 'no', label: 'No' }
                      ]}
                      onChange={({ value }) => {
                        handleQuestion('familyExposure', value)
                      }}
                      value={status.familyExposure.answer}
                      error={errors.familyExposure}
                    />
                  </>
                )}
                <hr className="mb-5 mt-5" />
                <button className="btn btn-primary" type="submit">
                  Envía
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
