import React from 'react'

import { useTranslation, Trans } from 'react-i18next'

import PyChart from '../components/PyChart'
import AlignmentChart from '../components/AlignmentChart'

const Stats = () => {
  const { t } = useTranslation('stats')
  return (
    <main className="fdb-block" tabIndex="-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12 col-xl-12">
            <h2 className="h1">{t('title')}</h2>
            <h3 className="h2">{t('align.subTitle')}</h3>
            <p>
              <Trans i18nKey="stats:align:description">
                El siguiente gráfico muestra una estimación de cuántos días
                atrȧs del país con más infecciones (Brasil) se encuentran los
                demás países de la región. Para detalles de cómo se alinean
                estas curvas se utiliza&nbsp;
                <a href="https://github.com/torresmateo/covid19/blob/master/update_and_process_data.py#L101" rel="noopener noreferrer" alt={t('align.repo')}>
                  este método
                </a>
                . Los datos se actualizan cada hora.
              </Trans>
            </p>
            <div className="row justify-content-center">
              <div id="chart" className="col-12 col-lg-8 col-xl-8 mb-5">
                <AlignmentChart />
              </div>
            </div>
            <h3 className="h2">{t('predictiveModel.subTitle')}</h3>
            <p>
              <Trans i18nKey="stats:predictiveModel:description">
                El siguiente gráfico muestra los casos confirmados.
              </Trans>
            </p>
            <div className="row justify-content-center">
              <div id="chart2" className="col-12 col-lg-8 col-xl-8">
                <PyChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Stats
