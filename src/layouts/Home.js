import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.scss'
const Stats = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-6 col-lg-3 mb-5">
        <a className="card z-1 lift" href="#!">
          <h2
            className="page-header-title"
            style={{ color: '#e81500', textAlign: 'center' }}
          >
            7
          </h2>
          <div className="card-body text-center py-3">
            <h6 className="card-title mb-0">Casos confirmados</h6>
          </div>
        </a>
      </div>
      <div className="col-6 col-lg-3 mb-5">
        <a className="card z-1 lift" href="#!">
          <h2
            className="page-header-title"
            style={{ color: '#f4a100', textAlign: 'center' }}
          >
            17
          </h2>
          <div className="card-body text-center py-3">
            <h6 className="card-title mb-0">Casos sospechosos</h6>
          </div>
        </a>
      </div>
      <div className="col-6 col-lg-3 mb-5">
        <a className="card z-1 lift" href="#!">
          <h2
            className="page-header-title"
            style={{ color: '#00ac69', textAlign: 'center' }}
          >
            6
          </h2>
          <div className="card-body text-center py-3">
            <h6 className="card-title mb-0">Casos descartados</h6>
          </div>
        </a>
      </div>
      <div className="col-6 col-lg-3 mb-5">
        <a className="card z-1 lift" href="#!">
          <h2
            className="page-header-title"
            style={{ color: 'black', textAlign: 'center' }}
          >
            125
          </h2>
          <div className="card-body text-center py-3">
            <h6 className="card-title mb-0">En vigilancia</h6>
          </div>
        </a>
      </div>
    </div>
  )
}

const Home = ({ history }) => {
  return (
    <div>
      <header className="page-header page-header-dark bg-gradient-primary-to-secondary">
        <div className="page-header-content pt-10">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-up">
                <h1 className="page-header-title">
                  CoronaVirus Auto Reporte en Paraguay
                </h1>
                <p className="page-header-text mb-5">
                  Si sospecha que está infectado por el virus que causa el
                  COVID-19, por favor notifique al DGVS clickando en el botón
                  Autoreporte
                </p>
                <Link
                  className="btn btn-teal btn-marketing rounded-pill lift lift-sm"
                  to="/report"
                >
                  Autoreportarse<i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
              <div
                className="col-lg-6 d-none d-lg-block"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <img
                  className="img-fluid"
                  src="assets/img/drawkit/color/drawkit-content-man-color.svg"
                />
              </div>
            </div>
            <Stats />
          </div>
        </div>
        <div className="svg-border-rounded text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
          </svg>
        </div>
      </header>

      <section className="bg-white py-10">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                <i data-feather="layers"></i>
              </div>
              <h3>Built for developers</h3>
              <p className="mb-0">
                Our customizable, block-based build system makes creating your
                next project fast and easy!
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                <i data-feather="smartphone"></i>
              </div>
              <h3>Modern responsive design</h3>
              <p className="mb-0">
                Featuring carefully crafted, mobile-first components, your end
                product will function beautifully on any device!
              </p>
            </div>
            <div className="col-lg-4">
              <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                <i data-feather="code"></i>
              </div>
              <h3>Complete documentation</h3>
              <p className="mb-0">
                All of the layouts, page sections, components, and utilities are
                fully covered in this products docs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />
    </div>
  )
}

export default Home
