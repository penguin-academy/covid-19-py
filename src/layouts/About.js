import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import styled from "styled-components"
import ColoredA from '../components/ColoredA'

const LeadParagraph = styled.p`
color: #6a7889;
`

const Legal = () => {
  const { t } = useTranslation('about')
  return (
    <main>
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-8 text-center">
              <img alt="" className="fdb-icon mb-4" src="/img/care.svg" />
              <LeadParagraph className="lead">{t('leadText')}</LeadParagraph>
            </div>
          </div>
        </div>
      </section>
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
              <h2 className="h1">{t('contributeTitle')}</h2>
              <LeadParagraph className="lead">
                <Trans i18nKey="about:contributeText">
                  CovPy es libre y de código abierto. Puedes encontrar el código
                  en GitHub. Las contribuciones son bienvenidas! También puedes
                  simplemente
                  <ColoredA href="https://www.github.com/penguin-academy/covid-19-py/issues" rel="noopener noreferrer">
                    informar de un error
                  </ColoredA>
                  o solicitar una característica allí. report a bug or request a
                  feature there.
                </Trans>
              </LeadParagraph>
              <p className="h3 mt-4">
                <ColoredA href="https://www.github.com/penguin-academy/covid-19-py" rel="noopener noreferrer" alt={t("repo")}>
                  {t('learnMore')} <i className="fas fa-angle-right" aria-hidden="true" />
                </ColoredA>
              </p>
            </div>
            <div className="col-10 col-sm-6 m-auto col-md-4 pt-4 pt-md-0">
              <img
                alt=""
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
              <h3 className="h2">{t('goodCompanyTitle')}</h3>
              <LeadParagraph className="lead">{t('goodCompanyText1')}</LeadParagraph>
              <LeadParagraph className="lead">{t('goodCompanyText2')} <span aria-hidden="true">❤️</span>.</LeadParagraph>
              <div className="mt-5 justify-content-center">
                <img
                  alt="Penguin Academy"
                  height={30}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/penguin.png"
                />
                <img
                  alt="Universidad Comunera"
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
                  alt="Web Paraguay"
                  height={30}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/webparaguay.png"
                />
                <img
                  alt="Okimo"
                  height={20}
                  className="ml-3 mr-3 mb-2 mt-2"
                  src="/img/logos/okimo.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Legal
