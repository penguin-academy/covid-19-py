import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className="nav-container">
      <div>
        <div className="bar bar--sm visible-xs">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <h4>
                  CoronaVirus
                  <br /> Auto Reporte
                </h4>
              </div>
              <div className="col-8 text-right">
                <a
                  href="#"
                  className="hamburger-toggle"
                  data-toggle-class="#menu1;hidden-xs hidden-sm"
                >
                  <i className="icon icon--sm stack-interface stack-menu" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav
          id="menu1"
          className="bar bar-1 hidden-xs bar--absolute bar--transparent"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 hidden-xs">
                <h4 style={{ color: 'white' }}>CoronaVirus Auto Reporte</h4>
              </div>
              <div className="col-lg-9 col-md-9 text-right text-left-xs text-left-sm">
                <div className="bar__module">
                  <ul className="menu-horizontal text-left">
                    <li>
                      <Link to="/report">Autoreportarse</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavigationBar
