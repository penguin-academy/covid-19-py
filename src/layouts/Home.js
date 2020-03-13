import React from 'react'

const Home = ({ history }) => {
  const onGoToReportPage = () => {
    history.push('report')
  }

  return (
    <div>
      <div>
        <div className="main-container">
          <section
            className="cover cover-features imagebg space--lg"
            data-overlay={4}
          >
            <div
              className="background-image-holder"
              style={{ backgroundImage: 'url(./img/header.jpg)', opacity: 1 }}
            >
              <img alt="background" src={'./img/header.jpg'} />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-7">
                  <h1> CoronaVirus Auto Reporte en Paraguay </h1>
                  <p className="lead">
                    Si sospecha que está infectado por el virus que causa el
                    COVID-19, por favor notifique al DGVS clickando en el botón
                    Autoreporte
                  </p>
                  <button
                    className="btn--primary btn-lg"
                    onClick={onGoToReportPage}
                  >
                    <span className="btn__text">Autoreportarse</span>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="feature feature-2 boxed boxed--border bg--white">
                    <h1 style={{ marginBottom: 5 }}>6</h1>
                    <h4 style={{ display: 'inline' }}>Casos confirmados</h4>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="feature feature-2 boxed boxed--border bg--white">
                    <h1 style={{ marginBottom: 5 }}>17</h1>
                    <h4 style={{ display: 'inline' }}>Casos sospechosos</h4>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="feature feature-2 boxed boxed--border bg--white">
                    <h1 style={{ marginBottom: 5 }}>6</h1>
                    <h4 style={{ display: 'inline' }}>Casos descartados</h4>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="feature feature-2 boxed boxed--border bg--white">
                    <h1 style={{ marginBottom: 5 }}>125</h1>
                    <h4 style={{ display: 'inline' }}>En vigilancia</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="imageblock switchable feature-large">
            <div className="imageblock__content col-lg-6 col-md-4 pos-right">
              <div className="background-image-holder">
                <img alt="image" src="img/education-5.jpg" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-7">
                  <h2>Acerca de este sitio</h2>
                  <p className="lead">
                    El DGVS-MSPyBS está vigilando de cerca los brotes de la
                    enfermedad respiratoria causada por un nuevo coronavirus que
                    se identificó por primera vez en Wuhan, en la provincia de
                    Hubei, en China. Esta es una situación emergente que está
                    cambiando rápidamente y el MSPyBS continuará brindando
                    información actualizada a medida que esté disponible.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
