import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import AlignmentChart from '../components/AlignmentChart'
import ColoredA from '../components/ColoredA'

const Stats = ({location}) => {
  console.log(location)
  const { t } = useTranslation('stats')
  return (
    <main className="fdb-block" tabIndex="-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12 col-xl-12">
            <h2>{t('title')}</h2>

            <h3>{t('subTitle')}</h3>
            <Trans i18nKey="stats:alignDescription">
              El siguiente gráfico muestra una estimación de cuántos días atrȧs
              del país con más infecciones (Brasil) se encuentran los demás
              países de la región. Para detalles de cómo se alinean estas curvas
              se utiliza&nbsp
              <ColoredA href="https://github.com/torresmateo/covid19/blob/master/update_and_process_data.py#L101" rel="noopener noreferrer" alt={t('repo')}>
                este método
              </ColoredA>
              . Los datos se actualizan cada hora.
            </Trans>
            <div id="chart">
              <AlignmentChart />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Stats
