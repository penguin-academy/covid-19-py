import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="fdb-block footer-large bg-dark">
      <div className="container">
        <div className="row align-items-top text-center text-md-left">
          <div className="col-12 col-sm-6 col-md-4">
            <h3>
              <strong>Country A</strong>
            </h3>
            <p>
              Street Address 52
              <br />
              Contact Name
            </p>
            <p>+44 827 312 5002</p>
            <p>
              <a href="https://www.froala.com">countrya@amazing.com</a>
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-lg-left">
            <h3>
              <strong>Follow Us & Contribute</strong>
            </h3>
            <p className="lead">
              <a
                href="https://twitter.com/penguinstribe"
                target="_blank"
                className="mx-2"
              >
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/penguin-academy/covid-19-py"
                target="_blank"
                className="mx-2"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
              <a
                href="mailto:hello@penguin.academy"
                target="_blank"
                className="mx-2"
              >
                <i className="fas fa-envelope" aria-hidden="true" />
              </a>
            </p>
          </div>

          <div className="col-12 col-md-4 mt-5 mt-md-0 text-md-left">
            <h3>
              <strong>About Us</strong>
            </h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <img src="/img/hippa.png" style={{ maxHeight: 80 }} />
            <img
              src="/img/privacyshield.png"
              style={{ maxHeight: 60, paddingLeft: 20 }}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            © CovPY 2020 - Hecho con
            <img
              src="/img/heart.svg"
              alt="Heart"
              style={{ padding: '0 10px', maxWidth: 45 }}
            />
            en Paraguay
          </div>
        </div>
      </div>
    </footer>
  )
}

export const FooterSmall = () => {
  return (
    <footer className="fdb-block footer-small bg-dark">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <p>
              {' '}
              © CovPY 2020 - Hecho con
              <img
                src="/img/heart.svg"
                alt="Heart"
                style={{ padding: '0 10px', maxWidth: 45 }}
              />
              en Paraguay
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
