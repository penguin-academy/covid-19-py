import React from 'react'
import { Lottie } from '@crello/react-lottie'
import * as checkData from '../lottie/check.json'
import styled from 'styled-components'
import { useTranslation, Trans } from 'react-i18next'

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
  const { t } = useTranslation('formSuccess')
  //
  // TEXT
  //

  const text = {
    alarm: t('alarm.message'),
    alarmTitle: t('alarm.title'),
    symptoms: t('symptoms.message'),
    symptomsTitle: '',
    exposure: t('exposure.message'),
    exposureTitle: '',
    noSymptoms: t('noSymptoms.message'),
    noSymptomsTitle: '',
    medical: t('medical.message'),
    medicalTitle: ''
  }

  //
  // Calculate the different states
  // 1. symptoms
  // 2. risk
  // 4. exposure (contact)
  //

  const isYes = key => {
    try {
      return form[key].answer === 'yes'
    } catch (e) {
      return false
    }
  }

  let symptoms = false
  if (isYes('breath') || isYes('fever')) symptoms = true

  let risk = false
  if (isYes('riskGroup') || form.age.answer > 59) risk = true

  let exposure = false
  if (
    isYes('professionalExposureWhileIll') ||
    isYes('familyExposureWhileIll') ||
    isYes('confirmedExposureWhileIll')
  )
    exposure = true

  //
  // THE ANSWER IS CALCULATED HERE
  //
  let msg = { others: [] }

  if (isYes('alarmSigns')) {
    msg.title = t('alarm.title')
    msg.result = 'formSuccess:alarm:message'
    msg.bar = 90
  } else if (symptoms) {
    if (form.age.answer > 59) msg.title = t('symptoms.title60')
    else msg.title = t('symptoms.title')
    msg.result = 'formSuccess:symptoms:message'
    msg.bar = 65
    if (risk) msg.others.push(<strong>{t('symptoms.risk')}</strong>)
    else msg.others.push(t('symptoms.noRisk'))
  } else {
    msg.title = t('noSymptoms.title')
    if (exposure) {
      msg.result = 'formSuccess:noSymptoms:exposure'
    } else {
      msg.result = 'formSuccess:noSymptoms:message'
    }
    msg.bar = 30
    if (risk) msg.others.push(<strong>{t('noSymptoms.risk')}</strong>)
  }

  if (isYes('healthProfessional')) msg.medical = true
  if (risk) msg.risk = true

  return (
    <>
      <Header className="fdb-block">
        <div className="container">
          <Disclaimer>
            <h2>{t('evaluationResult.title')}</h2>
            <p className="">
              <Trans i18nKey="warnDisclaimer" />
            </p>
          </Disclaimer>
          <div className="row text-left">
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
                <div className="col-12">
                  <h2>
                    <strong>{msg.title}</strong>
                  </h2>
                  <Justify>
                    <div className="pb-3">
                      <Progress
                        value={msg.bar}
                        style={msg.bar > 30 ? 'danger' : 'warning'}
                      />
                    </div>
                    <div>
                      <Trans i18nKey={msg.result}>
                        <p className="lead"></p>
                        <p></p>
                        <p></p>
                        <p></p>
                      </Trans>
                    </div>
                    {/* <p className="lead">{msg.result}</p> */}
                  </Justify>

                  {msg.others.map(m => (
                    <p>{m}</p>
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {risk && (
                    <>
                      <p className="mb-0">{t('risk.message')}</p>
                      <ul>
                        <li>{t('risk.list1')}</li>
                        <li>{t('risk.list2')}</li>
                      </ul>
                    </>
                  )}
                  {isYes('pregnant') && symptoms && (
                    <p>{t('symptoms.pregnant')}</p>
                  )}
                  {isYes('pregnant') && !symptoms && (
                    <>
                      <p className="mb-0">{t('noSymptoms.pregnant.message')}</p>
                      <ul>
                        <li>{t('noSymptoms.pregnant.list1')}</li>
                        <li>{t('noSymptoms.pregnant.list2')}</li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col text-left">
                  {msg.medical && (
                    <>
                      <h2>{t('medical.title')}</h2>
                      <p className="mb-0">{t('medical.message')}</p>

                      <ul>
                        <li>{t('medical.list1')}</li>
                        <li>{t('medical.list2')}</li>
                      </ul>
                      <p>{msg.medical}</p>
                    </>
                  )}
                  <h2>{t('general.title')}</h2>
                  <ul>
                    <li>{t('general.list1')}</li>
                    <li>{t('general.list2')}</li>
                    <li>{t('general.list3')}</li>
                    <li>{t('general.list4')}</li>
                    <li>{t('general.list5')}</li>
                    <li>{t('general.list6')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>

      <section className="fdb-block pt-0">
        <div className="container"></div>
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
