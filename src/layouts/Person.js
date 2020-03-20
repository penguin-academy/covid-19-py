import React, { useState, useReducer } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

import FormBox from '../components/FormBox'
import Question from '../components/SelectQuestion'
import SelectPlace from '../components/SelectPlace'

const Person = ({ setFormState, filledState = {}, form }) => {
  const sequence = ['serious', 'location', 'phone']
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
      [sequence[0]]: { show: true, answer: '' },
      ...createDefaultStates(sequence.slice(1), {
        show: false,
        answer: ''
      }),
      ...filledState
    }
  )

  const [errors, setErrors] = useState(createDefaultStates(sequence, false))
  const [disabledButton, setDisabledButton] = useState(false)
  const [submitError, setSubmitError] = useState(false)

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

  const handleCoords = geocode => setStatus({ geocode })

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
    setDisabledButton(true)

    const errorPresent = checkErrors()
    if (!errorPresent) {
      postForm()
    } else {
      setDisabledButton(false)
    }
  }

  const postForm = async () => {
    try {
      const firestoreDocument = {
        ...status,
        reportDate: firebase.firestore.Timestamp.now()
      }
      await firebase
        .firestore()
        .collection('self-reports')
        .add(firestoreDocument)
      setFormState({ ...form, ...status, progress: 3 })
    } catch (error) {
      console.log(error)
      setDisabledButton(false)
      setSubmitError(true)
    }
  }

  const checkErrors = () => {
    let errorPresent = false
    const newErrors = errors

    if (status.serious.answer === '') {
      newErrors.serious = true
      errorPresent = true
    } else newErrors.serious = false

    if (status.location.answer === '' && status.location.show === true) {
      newErrors.location = true
      errorPresent = true
    } else newErrors.location = false

    if (!(status.phone.answer === '' || status.phone.answer.length > 8)) {
      newErrors.phone = true
      errorPresent = true
    } else newErrors.phone = false

    setErrors({ ...errors, newErrors })

    return errorPresent
  }

  return (
    <FormBox>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h1>Últimas preguntas</h1>
            <p className="lead">Por favor, leé lo siguiente con atención:</p>
            <p>
              Te proporcionamos esta herramienta para ayudar a
              obtener información sobre tus síntomas.
            </p>
            <p>
              Al completar este formulario nos estas ayudando a generar datos. Por favor,llená la siguiente sección con cuidado.
              
            </p>
            <hr className="mb-5 mt-5" />
          </div>
        </div>

        <Question
          title="¿Contestaste todas las preguntas con tus síntomas verdaderos?"
          options={[
            {
              value: 'report',
              label: 'Sí. Esos son mis verdaderos síntomas.'
            },
            {
              value: 'tryout',
              label: 'No. Sólo estoy probando la aplicación.'
            }
          ]}
          onChange={({ value }) => {
            handleQuestion('serious', value, 'location')
          }}
          value={status.serious.answer}
          error={errors.serious}
        />

        {status['location'].show && (
          <>
            <hr className="mb-5 mt-5" />
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-lg-6">
                <p className="lead m-lg-0">¿En qué barrio vivís?</p>
                <p className="m-lg-0">
                  Por favor, escribí tu ciudad. Si no la encontrás, seleccioná la
                  opción más cercana.
                </p>
              </div>
              <div className="col-12 col-lg-5">
                <SelectPlace
                  onChange={value => {
                    handleCoords('loading or null')
                    handleQuestion('location', value, 'phone')
                  }}
                  onCoords={handleCoords}
                  value={status.location.answer}
                />
                {errors.location && (
                  <div
                    className="invalid-feedback"
                    style={{ display: 'block' }}
                  >
                    Por favor, seleccioná una opción.
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {status['phone'].show && (
          <>
            <hr className="mb-5 mt-5" />
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-lg-6">
                <p className="lead m-lg-0">Número de teléfono</p>
                <p className="m-lg-0">
                  Por favor, use el número de teléfono de la persona para la que
                  rellenó este formulario.
                </p>
              </div>
              <div className="col-12 col-lg-5">
                <input
                  className="form-control"
                  type="number"
                  placeholder="09xxxxxxxx"
                  value={status.phone.answer}
                  onChange={({ target }) => {
                    handleQuestion('phone', target.value)
                  }}
                  value={status.phone.answer}
                />
                {errors.phone && (
                  <div
                    className="invalid-feedback"
                    style={{ display: 'block' }}
                  >
                    Debes ingresar un numero de telefono.
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        <hr className="mb-5 mt-5" />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={disabledButton}
        >
          {disabledButton && <i className="fas fa-spinner fa-pulse mr-3"></i>}
          Enviar
        </button>
        {submitError && (
          <p style={{ color: 'red', padding: 5 }}>
            Se ha producido un error. Sus entradas no se han guardado. Por
            favor, inténtelo de nuevo o póngase en contacto con nosotros.
          </p>
        )}
      </form>
    </FormBox>
  )
}

export default Person
