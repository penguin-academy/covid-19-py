import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'react-feather'

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-marketing navbar-expand-lg bg-white navbar-light">
      <div className="container">
        <Link className="navbar-brand text-primary" to="/">
          CovPY Auto Reporte
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Menu />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-lg-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
          <Link
            className="btn-primary btn rounded-pill px-4 ml-lg-4"
            to="/report"
          >
            Autoreportarse
            <i className="fas fa-arrow-right ml-1" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
