import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className="nav-container">
      <div>
        <div className="bar bar--sm visible-xs">
          <div className="container">
            <div className="row">
              <div className="col-3 col-md-2">
                <a href="index.html">
                  {' '}
                  <img
                    className="logo logo-dark"
                    alt="logo"
                    src="img/logo-dark.png"
                  />{' '}
                  <img
                    className="logo logo-light"
                    alt="logo"
                    src="img/logo-light.png"
                  />{' '}
                </a>
              </div>
              <div className="col-9 col-md-10 text-right">
                <a
                  href="#"
                  className="hamburger-toggle"
                  data-toggle-class="#menu1;hidden-xs hidden-sm"
                >
                  {' '}
                  <i className="icon icon--sm stack-interface stack-menu" />{' '}
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
              <div className="col-lg-1 col-md-2 hidden-xs">
                <div className="bar__module">
                  <a href="index.html">
                    {' '}
                    <img
                      className="logo logo-dark"
                      alt="logo"
                      src="img/logo-dark.png"
                    />{' '}
                    <img
                      className="logo logo-light"
                      alt="logo"
                      src="img/logo-light.png"
                    />{' '}
                  </a>
                </div>
              </div>
              <div className="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
                <div className="bar__module">
                  <ul className="menu-horizontal text-left">
                    <li>
                      {' '}
                      <a href="#">Single Link</a>{' '}
                    </li>
                    <li className="dropdown">
                      {' '}
                      <span className="dropdown__trigger">Dropdown Slim</span>
                      <div className="dropdown__container">
                        <div className="container">
                          <div className="row">
                            <div className="dropdown__content col-lg-2">
                              <ul className="menu-vertical">
                                <li>
                                  {' '}
                                  <a href="#">Single Link</a>{' '}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown">
                      {' '}
                      <span className="dropdown__trigger">Dropdown Wide</span>
                      <div className="dropdown__container">
                        <div className="container">
                          <div className="row">
                            <div className="dropdown__content row w-100">
                              <div className="col-lg-3">
                                <h5>Menu Title</h5>
                                <ul className="menu-vertical">
                                  <li>
                                    {' '}
                                    <a href="#">Single Link</a>{' '}
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <h5>Menu Title</h5>
                                <ul className="menu-vertical">
                                  <li>
                                    {' '}
                                    <a href="#">Single Link</a>{' '}
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <h5>Menu Title</h5>
                                <ul className="menu-vertical">
                                  <li>
                                    {' '}
                                    <a href="#">Single Link</a>{' '}
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <h5>Menu Title</h5>
                                <ul className="menu-vertical">
                                  <li>
                                    {' '}
                                    <a href="#">Single Link</a>{' '}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bar__module">
                  <a
                    className="btn btn--sm type--uppercase"
                    href="#customise-template"
                  >
                    {' '}
                    <span className="btn__text">Try Builder</span>{' '}
                  </a>
                  <a
                    className="btn btn--sm btn--primary type--uppercase"
                    href="#purchase-template"
                  >
                    {' '}
                    <span className="btn__text">Buy Now</span>{' '}
                  </a>
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
