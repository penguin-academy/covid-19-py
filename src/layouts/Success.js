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
  // THE ANSWER IS CALCULATED HERE
  //
  let msg = {}

  //
  // Protect the success route if form is empty
  //

  const isYes = key => {
    try {
      return form[key].answer === 'yes'
    } catch (e) {
      return false
    }
  }

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
            <h2>{t('evaluationResult.title')}</h2>
            <p className="">
              <Trans i18nKey="warnDisclaimer" />
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
                  <h2>{t('workAdvice')}:</h2>
                  <p>{msg.medical}</p>
                </>
              )}
              <h2>{t('tips.title')}</h2>
              <p>{t('tips.measures')}</p>
              <ul>
                <li>{t('tips.travel')}</li>
                <li>{t('tips.distancing')}</li>
                <li>{t('tips.publicTransportation')}</li>
                <li>{t('tips.mask')}</li>
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
