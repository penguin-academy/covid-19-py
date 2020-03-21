import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import FormBox from '../components/FormBox'

const Start = ({ setFormState, form }) => {
  const clickHandler = feeling => {
    setFormState({ ...form, generalHealth: feeling, progress: 1 })
  }

  const { t } = useTranslation('formStart')
  return (
    <FormBox>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          <h1>{t('Antes de empezar')}</h1>
          <p className="lead">
            <Trans i18nKey="warnDisclaimer" />
          </p>
          <p>
            <Trans i18nKey="formStart:agreeTOSMessage">
              Al continuar, usted está de acuerdo con nuestros
              <Link to="/legal" target="_blank">
                términos de servicio
              </Link>
            </Trans>
          </p>
          <hr className="mb-5 mt-5" />
          <h3 className="pb-4">{t('howDoYouFeel')}</h3>
          <p className="mt-5 mt-sm-4">
            <button
              className="btn btn-lg btn-success"
              onClick={() => clickHandler('good')}
            >
              <i className="fas fa-smile-beam" style={{ paddingRight: 10 }} />
              {t('good')}
            </button>

            <button
              className="btn btn-lg btn-danger ml-sm-5 mt-sm-0 mt-3 d-block mx-auto d-sm-inline"
              onClick={() => clickHandler('bad')}
            >
              <i className="fas fa-frown-open" style={{ paddingRight: 10 }} />
              {t('bad')}
            </button>
          </p>
        </div>
      </div>
    </FormBox>
  )
}

export default Start
