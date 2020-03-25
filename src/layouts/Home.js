import React from 'react'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

import styled from 'styled-components'

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

const Home = () => {
  const { t } = useTranslation('home')

  return (
    <main className="fdb-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <h2>{t('leadTitle')}</h2>
            <p>{t('leadSecondary')}</p>
            <ul style={{ color: '#8892a0' }}>
              <li>{t('listFirst')}</li>
              <li>
                <Trans i18nKey="home:listSecond">
                  Mirá los datos estadísticos que ya juntamos&nbsp;
                  <Link to="/stats">aquí</Link>.
                </Trans>
              </li>
            </ul>
            <p className="mt-4">
              <CTALink className="btn btn-secondary" to="/report">
                {t('ctaCheckSymptoms')}
                <i className="fas fa-arrow-right ml-1"></i>
              </CTALink>
            </p>
          </div>
          <div className="col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0 d-lg-block d-none">
          <img alt="" className="img-fluid" src="/img/hero.png" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
