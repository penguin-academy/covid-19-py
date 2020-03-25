import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const NavLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #bf215b !important;
  &.text-primary:hover {
    color: #9c1b4a !important;
  }
`

const TitleHide = styled.span`
  @media (max-width: 375px) {
    display: none;
  }
`

const NavigationBar = () => {
  const [show, setShow] = useState(false)
  const { t } = useTranslation('navbar')
  return (
    <header>
      <h1 className="sr-only">CovPY Auto Reporte</h1>
      <div className="container">
        <nav className="navbar navbar-expand-lg no-gutters">
          <div className="col-3 text-left">
            <NavLink className="navbar-brand text-primary" to="/">
              <img
                src="/img/care.svg"
                alt="CovPY Auto Reporte"
                style={{ width: 40, paddingRight: 15 }}
              />
              CovPY <TitleHide>{t('selfReportingTitle')}</TitleHide>
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav4"
            aria-controls="navbarNav4"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse justify-content-center col-md-8 ${
              show ? 'show' : ''
            }`}
            id="navbarNav4"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setShow(false)}
                >
                  {t('home')}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/report"
                  onClick={() => setShow(false)}
                >
                  {t('selfReporting')}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/quizz"
                  onClick={() => setShow(false)}
                >
                  {t('trivia')}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/stats"
                  onClick={() => setShow(false)}
                >
                  {t('stats')}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => setShow(false)}
                >
                  {t('aboutUs')}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavigationBar
