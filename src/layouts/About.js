import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Link } from 'react-feather'

const Legal = () => {
  const { t } = useTranslation('about')
  return (
    <>
      <header className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-8 text-center">
              <img alt="logo" className="fdb-icon mb-4" src="/img/care.svg" />
              <p className="lead">{t('leadText')}</p>
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
                alt="github"
                className="fdb-icon"
                src="https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/imgs/icons/github.svg"
              />
              <h1>{t('contributeTitle')}</h1>
              <p className="lead">
                <Trans i18nKey="about:contributeText">
                  CovPy es libre y de código abierto. Puedes encontrar el código
                  en GitHub. Las contribuciones son bienvenidas! También puedes
                  simplemente
                  <a href="https://www.github.com/penguin-academy/covid-19-py/issues">
                    informar de un error
                  </a>
                  o solicitar una característica allí. report a bug or request a
                  feature there.
                </Trans>
              </p>
              <p className="h3 mt-4">
                <a href="https://www.github.com/penguin-academy/covid-19-py">
                  {t('learnMore')} <i className="fas fa-angle-right" />
                </a>
              </p>
            </div>
            <div className="col-10 col-sm-6 m-auto col-md-4 pt-4 pt-md-0">
              <img
                alt="chat"
                className="img-fluid rounded-0"
                src="/img/chat.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="fdb-block">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-lg-8">
              <h2>{t('goodCompanyTitle')}</h2>
              <p className="lead">{t('goodCompanyText1')}</p>
              <p className="lead">{t('goodCompanyText2')} ❤️.</p>
              <div className="mt-5 justify-content-center">
                <img
                  alt="penguin academy logo"
                  height={30}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/penguin.png"
                />
                <img
                  alt="ucom logo"
                  height={30}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/ucom.png"
                />
                <img
                  alt="product lab logo"
                  height={30}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/productlab.png"
                />
                <img
                  alt="web paraguay logo"
                  height={30}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/webparaguay.png"
                />
                <img
                  alt="okimo logo"
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
