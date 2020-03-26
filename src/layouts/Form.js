import React, { useState, useReducer } from 'react'

import Question from '../components/SelectQuestion'
import FormBox from '../components/FormBox'
import { useTranslation } from 'react-i18next'

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
    'professionalExposureWhileIll', // NEW
    'familyExposure',
    'familyExposureWhileIll', // NEW
    'confirmedExposure', // NEW
    'confirmedExposureWhileIll' // NEW
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

  const [errors, setErrors] = useState(createDefaultStates(sequence, false))

  const nextQuestion = (q, ...hide) => {
    const defaultState = { show: false, answer: '' }
    const i = sequence.indexOf(q)
    const valuesToReset = createDefaultStates(sequence.slice(i), defaultState)

    // if present: hide conditional question
    hide.map(key => (valuesToReset[key] = defaultState))

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
      setFormState({ ...form, ...status, progress: 2 })
    }
  }

  const { t } = useTranslation('form')

  return (
    <FormBox>
      <main tabIndex="-1">
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
            <hr className="mb-5 mt-5" aria-hidden={true} />
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
            <hr className="mb-5 mt-5" aria-hidden="true" />
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
            <hr className="mb-5 mt-5" aria-hidden={true} />
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
            <hr className="mb-5 mt-5" aria-hidden={true} />
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
            <hr className="mb-5 mt-5" aria-hidden={true} />
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
            <hr className="mb-5 mt-5" aria-hidden={true} />
            <Question
              title={t('riskGroup.question')}
              titleList={t('riskGroup.list').split(',')}
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
            <hr className="mb-5 mt-5" aria-hidden={true} />
            <Question
              title={t('healthProfessional.question')}
              subTitle={t('healthProfessional.subtitle')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
              ]}
              onChange={({ value }) => {
                handleQuestion('healthProfessional', value, () => {
                  if (value === 'yes') nextQuestion('professionalExposure')
                  else
                    nextQuestion(
                      'familyExposure',
                      'professionalExposure',
                      'professionalExposureWhileIll'
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
            <hr className="mb-5 mt-5" aria-hidden={true} />
            <Question
              title={t('professionalExposure.question')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
              ]}
              onChange={({ value }) => {
                handleQuestion('professionalExposure', value, () => {
                  if (value === 'yes')
                    nextQuestion('professionalExposureWhileIll')
                  else
                    nextQuestion(
                      'familyExposure',
                      'professionalExposureWhileIll'
                    )
                })
              }}
              value={status.professionalExposure.answer}
              error={errors.professionalExposure}
            />
          </>
        )}
        {status['professionalExposureWhileIll'].show && (
          <>
            <hr className="mb-5 mt-5" />
            <Question
              title={t('professionalExposureWhileIll.question')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
              ]}
              onChange={({ value }) => {
                handleQuestion(
                  'professionalExposureWhileIll',
                  value,
                  'familyExposure'
                )
              }}
              value={status.professionalExposureWhileIll.answer}
              error={errors.professionalExposureWhileIll}
            />
          </>
        )}
        {status['familyExposure'].show && (
          <>
            <hr className="mb-5 mt-5" aria-hidden={true} />
            <Question
              title={t('familyExposure.question')}
              subTitle={t('familyExposure.subtitle')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
              ]}
              onChange={({ value }) => {
                handleQuestion('familyExposure', value, () => {
                  if (value === 'yes') nextQuestion('familyExposureWhileIll')
                  else
                    nextQuestion('confirmedExposure', 'familyExposureWhileIll')
                })
              }}
              value={status.familyExposure.answer}
              error={errors.familyExposure}
            />
          </>
        )}
        {status['familyExposureWhileIll'].show && (
          <>
            <hr className="mb-5 mt-5" />
            <Question
              title={t('familyExposureWhileIll.question')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
              ]}
              onChange={({ value }) => {
                handleQuestion(
                  'familyExposureWhileIll',
                  value,
                  'confirmedExposure'
                )
              }}
              value={status.familyExposureWhileIll.answer}
              error={errors.familyExposureWhileIll}
            />
          </>
        )}
        {status['confirmedExposure'].show && (
          <>
            <hr className="mb-5 mt-5" />
            <Question
              title={t('confirmedExposure.question')}
              subTitle={t('confirmedExposure.subtitle')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
              ]}
              onChange={({ value }) => {
                handleQuestion('confirmedExposure', value, () => {
                  if (value === 'yes') nextQuestion('confirmedExposureWhileIll')
                  else
                    setStatus({
                      confirmedExposureWhileIll: { show: false, answer: '' }
                    })
                })
              }}
              value={status.confirmedExposure.answer}
              error={errors.confirmedExposure}
            />
          </>
        )}
        {status['confirmedExposureWhileIll'].show && (
          <>
            <hr className="mb-5 mt-5" />
            <Question
              title={t('confirmedExposureWhileIll.question')}
              options={[
                { value: 'yes', label: t('yes') },
                { value: 'no', label: t('no') }
              ]}
              onChange={({ value }) => {
                handleQuestion('confirmedExposureWhileIll', value)
              }}
              value={status.confirmedExposureWhileIll.answer}
              error={errors.confirmedExposureWhileIll}
            />
          </>
        )}
        <hr className="mb-5 mt-5" />
        <button className="btn btn-primary" type="submit">
          {t('submit')}
        </button>
      </form>
      </main>
    </FormBox>
  )
}

export default Form
