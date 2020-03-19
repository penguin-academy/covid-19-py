import React, { useState, useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import {useTranslation} from 'react-i18next'

import 'firebase/firestore'

import Question from '../components/SelectQuestion'
import FormBox from '../components/FormBox'

const Form = ({ filledState = {}, setFormState, form }) => {
  const sequence = [
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
      [sequence[0]]: { show: true, answer: '' },
      ...createDefaultStates(sequence.slice(1), { show: false, answer: '' }),
      ...filledState
    }
  )

  // For Stoybook
  // if (filledState) setStatus({ ...status, ...filledState })

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
      postForm()
    } else {
      setDisabledButton(false)
    }
  }
  const history = useHistory()

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
      setFormState({ ...form, ...status })
      setDisabledButton(false)
      history.push('/success')
    } catch (error) {
      console.log(error)
      setDisabledButton(false)
      setSubmitError(true)
    }
  }

  const {t} = useTranslation('form')

  return (
    <FormBox>
      <form onSubmit={handleSubmit}>
        <>
          <Question
            title={t('gender.question')}
            options={[
              { value: 'male', label: t('gender.options.male') },
              { value: 'female', label: t('gender.options.female') }
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
        {status['pregnant'].show && (
          <>
            <hr className="mb-5 mt-5" />
            <Question
              title={t('pregnant.question')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
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
            {/* TODO: Pull from age range */}
            <Question
              title={t('age.question')}
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
              title={t('breath.question')}
              subTitle={t('breath.subtitle')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
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
              title={t('fever.question')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
              ]}
              onChange={({ value }) => {
                handleQuestion('fever', value, () => {
                  if (value === 'yes' && status.breath.answer === 'yes')
                    nextQuestion('alarmSigns')
                  else nextQuestion('riskGroup', 'alarmSigns')
                })
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
              title={t('alarmSigns.question')}
              subTitle={t('alarmSigns.subtitle')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
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
              title={t('riskGroup.question')}
              subTitle={t('riskGroup.subtitle')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
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
              title={t('healthProfessional.question')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
              ]}
              onChange={({ value }) => {
                handleQuestion('healthProfessional', value, () => {
                  if (value === 'yes') nextQuestion('professionalExposure')
                  else nextQuestion('familyExposure', 'professionalExposure')
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
              title={t('professionalExposure.question')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
              ]}
              onChange={({ value }) => {
                handleQuestion('professionalExposure', value, 'familyExposure')
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
              title={t('familyExposure.question')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
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
        <button
          className="btn btn-primary"
          type="submit"
          disabled={disabledButton}
        >
          {disabledButton && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              style={{ paddingRight: 10 }}
            ></span>
          )}
          {t('submit')}
        </button>
        {submitError && (
          <p style={{ color: 'red', padding: 5 }}>
            {t('errorSubmitting')}
          </p>
        )}
      </form>
    </FormBox>
  )
}

export default Form
