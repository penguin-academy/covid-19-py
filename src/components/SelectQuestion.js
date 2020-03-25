import React from 'react'
import Select from 'react-select'
import { useTranslation } from 'react-i18next'

const Component = ({
  title,
  titleList = [],
  subTitle,
  options,
  onChange,
  value,
  error
}) => {
  let selectedValue = options.find(option => option.value === value)
  if (!selectedValue) selectedValue = null
  const { t } = useTranslation('SelectQuestion')

  const customStyles = {
    control: (base, { selectProps }) => {
      const boxShadow = selectProps.error
        ? { boxShadow: '0 0 0 2px #bf215b' }
        : {}
      return {
        ...base,
        ...boxShadow,
        transition: ' 0.25s linear',
        transitionProperty: 'box-shadow'
      }
    }
  }

  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-12 col-lg-6">
        <p className="lead m-lg-0">{title}</p>
        {titleList.length ? (
          <>
            <ul>
              {titleList.map(e => (
                <li>{e}</li>
              ))}
            </ul>

            <small className="m-lg-0">{subTitle}</small>
          </>
        ) : (
          <p className="m-lg-0">{subTitle}</p>
        )}
      </div>
      <div className="col-12 col-lg-5">
        <Select
          options={[{ value: null, label: `- ${t('default')} -` }, ...options]}
          isSearchable={false}
          onChange={onChange}
          value={selectedValue}
          styles={customStyles}
          error={error}
          placeholder={t('placeholder')}
        />
        {error && (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            {t('pleaseChoose')}
          </div>
        )}
        {/* <p>selected value: {JSON.stringify(selectedValue, null, 2)}</p> */}
      </div>
    </div>
  )
}

export default Component
