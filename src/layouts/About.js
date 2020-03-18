import React from 'react'

const Legal = () => {
  return (
    <>
      <header className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-8 text-center">
              <img alt="image" className="fdb-icon mb-4" src="/img/care.svg" />
              <p className="lead">
                Este proyecto es un sistema de notificación automática, que
                permite a cualquier persona acceder a él e informar de sus
                síntomas y obtener una rápida retroalimentación de los pasos a
                seguir, además de permitir generar datos sobre la situación.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section
        className="fdb-block"
        style={{
          backgroundImage:
            'url(https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/shapes/8.svg)'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-5">
              <img
                alt="image"
                className="fdb-icon"
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/icons/github.svg"
              />
              <h1>Contribuir a CovPy</h1>
              <p className="lead">
                CovPy es libre y de código abierto. Puedes encontrar el código
                en GitHub. Las contribuciones son bienvenidas! También puedes
                simplemente{' '}
                <a href="https://www.github.com/penguin-academy/covid-19-py/issues">
                  informar de un error
                </a>{' '}
                o solicitar una característica allí. report a bug or request a
                feature there.
              </p>
              <p className="h3 mt-4">
                <a href="https://www.github.com/penguin-academy/covid-19-py">
                  Aprende más <i className="fas fa-angle-right" />
                </a>
              </p>
            </div>
            <div className="col-10 col-sm-6 m-auto col-md-4 pt-4 pt-md-0">
              <img
                alt="image"
                className="img-fluid rounded-0"
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/draws/chat.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="fdb-block">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-lg-8">
              <h2>You are in good company</h2>
              <p className="lead">
                Este proyecto fue creado como una iniciativa de Penguin Academy
                para crear tecnología para suavizar el impacto máximo de la
                pandemia COVID-19 en el Sistema de Salud de Paraguay.
              </p>
              <p className="lead">
                CovPy es desarrollado y mantenido por Penguin Academy, UCOM, la
                Facultad Politécnica UNA, the Product Lab, Web Paraguay, Okimo,
                y otras organizaciones así como muchos otros contribuyentes
                asombrosos ❤️.
              </p>
              <div className="mt-5 justify-content-center">
                <img
                  alt="image"
                  height={30}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/penguin.png"
                />
                <img
                  alt="image"
                  height={30}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/ucom.png"
                />
                <img
                  alt="image"
                  height={30}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/una.png"
                />
                <img
                  alt="image"
                  height={30}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/productlab.png"
                />
                <img
                  alt="image"
                  height={30}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/webparaguay.png"
                />
                <img
                  alt="image"
                  height={20}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/okimo.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Legal
