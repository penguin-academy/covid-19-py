import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  @media (max-width: 767px) {
    border-bottom-color: #0061f2;
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
`

const NavLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #bf215b !important;
  &.text-primary:hover {
    color: #9c1b4a !important;
  }
`

const NavigationBar = () => {
  const [show, setShow] = useState(false)
  return (
    <header>
      <div className="container">
        <Nav className="navbar navbar-expand-md no-gutters">
          <div className="col-2 text-left">
            <NavLink className="navbar-brand text-primary" to="/">
              <img
                src="/img/care.svg"
                style={{ width: 40, paddingRight: 15 }}
              />
              CovPY Auto Reporte
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
                  Inicio
                </Link>
              </li>
            </ul>
          </div>
        </Nav>
      </div>
    </header>
  )
}

export default NavigationBar
