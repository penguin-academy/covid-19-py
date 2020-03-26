import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const NavLogoLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #bf215b !important;
  &.text-primary:hover {
    color: #9c1b4a !important;
  }
`

const NavLink = styled(Link)`
header .navbar-nav &.nav-link {
  color: #555555;
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
            <NavLogoLink className="navbar-brand text-primary" to="/">
              <img
                src="/img/care.svg"
                alt=""
                style={{ width: 40, paddingRight: 15 }}
              />
              CovPY <TitleHide>{t('selfReportingTitle')}</TitleHide>
            </NavLogoLink>
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
                <NavLink
                  className="nav-link"
                  to="/"
                  onClick={() => setShow(false)}
                >
                  {t('home')}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/report"
                  onClick={() => setShow(false)}
                >
                  {t('selfReporting')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/quizz"
                  onClick={() => setShow(false)}
                >
                  {t('trivia')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/stats"
                  onClick={() => setShow(false)}
                >
                  {t('stats')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  onClick={() => setShow(false)}
                >
                  {t('aboutUs')}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavigationBar
