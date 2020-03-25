import React from 'react'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation('footer')
  return (
    <footer className="fdb-block footer-large bg-dark">
      <div className="container">
        <div className="row align-items-top text-center text-md-left">
          <div className="col-12 col-md-4 mt-4 mt-md-0 text-lg-left">
            <h2 className="h3">
              <strong>{t('followAndContribute')}</strong>
            </h2>
            <p>{t('shareText')}</p>
            <p className="lead">
              <a
                href="https://twitter.com/penguinstribe"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/penguin-academy/covid-19-py"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="GitHub"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
              <a
                href="mailto:hola@autoreporte.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                aria-label="E-mail"
              >
                <i className="fas fa-envelope" aria-hidden="true" />
              </a>
            </p>
          </div>

          <div className="col-12 col-md-5 offset-md-2 mt-5 mt-md-0 text-lg-left">
            <h2 className="h3">
              <strong>{t('aboutUs')}</strong>
            </h2>
            <p>{t('aboutUsText')}</p>
            <img
              src="/img/hippa.png"
              alt="Hippa Conform"
              style={{ maxHeight: 80 }}
            />
            <img
              src="/img/privacyshield.png"
              alt="Privacy Shield"
              style={{ maxHeight: 60, paddingLeft: 20 }}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            © CovPY 2020 -{' '}
            <Trans i18nKey="footer:madeWithLove">
              Hecho con amor
              <TranslatedImg
                src="/img/heart.svg"
                alt="Heart"
                style={{ padding: '0 10px', maxWidth: 45 }}
              >
              amor</TranslatedImg>
              en Paraguay
            </Trans>
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

// Simple wrapper over an image element to ease
// the Trans component interpolation for the
// "alt" attribute
const TranslatedImg = ({children, ...props}) => {
  return (
  <img {...props} alt={children} />
)}


export default Footer
