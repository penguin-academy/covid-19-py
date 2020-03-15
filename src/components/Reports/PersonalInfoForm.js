import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Input from '../Input'
import IDInput from '../IDInput'
import IDDateInput from '../IDDateInput'
import DateInput from '../DateInput'
import Checkbox from '../Checkbox'
import Select from '../Select'
import { useReportContext } from '../../layouts/Report'

import './style/PersonalInfoForm.scss'
import PlacesInput from '../PlacesInput'

const PersonalInfoForm = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const [isLoading, setIsLoading] = useState(false)

  const { onSubmitForm, formState } = useReportContext()

  const handleSubmit = e => {
    setIsLoading(true)

    e.preventDefault()
    onSubmitForm()
  }

  const onGoToSymptomsPage = e => {
    e.preventDefault()
    setActiveIndex(2)
  }

  const onGoToSecondPage = e => {
    e.preventDefault()
    setActiveIndex(1)
  }

  const onGoBackToSecondPage = e => {
    e.preventDefault()
    setActiveIndex(1)
  }

  const onGoBackToInfoPage = e => {
    e.preventDefault()
    setActiveIndex(0)
  }

  return (
    <div>
      <div className="indicator-group" style={{ marginBottom: '4rem' }}>
        <div className="row">
          <div className={`indicator ${activeIndex === 0 ? 'active' : ''}`}>
            <span>1</span>
          </div>
          <div className={`indicator ${activeIndex === 1 ? 'active' : ''}`}>
            <span>2</span>
          </div>
          <div className={`indicator ${activeIndex === 2 ? 'active' : ''}`}>
            <span>3</span>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

      <form action="" onSubmit={handleSubmit}>
        {/* Page 1 */}
        <div
          className={`row align-items-center page ${
            activeIndex === 0 ? 'active' : ''
          }`}
        >
          <div className="col-lg-7">
            <h1 className="page-header-title">Información de Contacto</h1>
            <p className="page-header-text mb-5">
              Use your cedula and your birthdate to register to this service.
            </p>
            <div className="form-row justify-content-center">
              <div className="col-md-8">
                <IDInput
                  label="Numero de Cedula"
                  id="document"
                  type="text"
                  className="form-control form-control-solid rounded-pill"
                  placeholder="Cedula"
                  required
                />
                <IDDateInput
                  required
                  placeholder="Fecha de Nacimiento"
                  className="form-control form-control-solid rounded-pill"
                  id="birthdate"
                />
                <button
                  disabled={
                    !formState.formIsValid || !formState.inputValues.dobCheck
                  }
                  className="btn btn-primary btn-block btn-marketing rounded-pill"
                  onClick={onGoToSecondPage}
                >
                  Continuar
                </button>
                <p className="page-header-text text-center small mb-0 mt-4">
                  By continuing, you agree to our&nbsp;
                  <Link to="/legal" target="_blank">
                    terms of service
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <img
              className="img-fluid"
              src="assets/img/drawkit/color/drawkit-user-mobile-color.svg"
            />
          </div>
        </div>

        {/* Page 2 */}
        <div
          className={`row align-items-center page ${
            activeIndex === 1 ? 'active' : ''
          }`}
        >
          <div className="col-lg-7">
            <h1 className="page-header-title">Información Personal</h1>
            <p className="page-header-text mb-5">
              Use your cedula and your birthdate to register to this service.
            </p>
            <div className="form-row justify-content-center">
              <div className="col-md-8">
                <PlacesInput
                  id="home"
                  className="form-control form-control-solid rounded-pill"
                  placeholder="Direccion"
                  label="Direccion"
                  errorMessage="Debes ingresar una direccion"
                  required
                />
                <Input
                  label="Numero de Telefono"
                  id="phoneNumber"
                  type="number"
                  placeholder="09xxxxxxxx"
                  className="form-control form-control-solid rounded-pill"
                  required
                  errormessage="Debes ingresar un numero de telefono"
                  minLength={9}
                />

                <button
                  disabled={
                    !formState.formIsValid ||
                    !formState.inputValues.address ||
                    !formState.inputValues.phoneNumber
                  }
                  className="btn btn-primary btn-block btn-marketing rounded-pill"
                  onClick={onGoToSymptomsPage}
                >
                  Continuar
                </button>

                <button
                  style={{ marginRight: '10px' }}
                  onClick={onGoBackToInfoPage}
                  className="btn btn-block btn-marketing rounded-pill"
                >
                  Volver Atras
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <img
              className="img-fluid"
              src="assets/img/drawkit/color/drawkit-user-mobile-color.svg"
            />
          </div>
        </div>
        {/* Page 3 */}
        <div
          className={`row align-items-center page ${
            activeIndex === 2 ? 'active' : ''
          }`}
        >
          <div className="col-lg-12">
            <h1 className="page-header-title">Información Sintomática</h1>
            <p className="page-header-text mb-5">
              Use your cedula and your birthdate to register to this service.
            </p>
            <div className="form-row justify-content-center">
              <div className="col-lg-5">
                <div className="form-group">
                  <Checkbox name="hasFever" label="Fiebre" />
                  <br />
                  <Checkbox name="hasCough" label="Tos Seca" />
                  <br />
                  <Checkbox name="hasMucus" label="Flema (Amarillo Verdoso)" />
                  <br />
                  <Checkbox
                    name="hasTroubleBreathing"
                    label="Dificultad al respirar"
                  />
                  <br />
                  <Checkbox name="hasThroatPain" label="Dolor de garganta" />
                  <br />
                  <DateInput
                    required
                    className="form-control form-control-solid rounded-pill"
                    errormessage="Debes proveer una fecha de inicio de sintomas"
                    label="Inicio de Sintomas"
                    id="dateOfSymptomStart"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-group">
                  <Checkbox
                    name="hasTraveledInLast14Days"
                    label="Viajo en los ultimos 14 dias?"
                  />
                  <div
                    className={`collapse-field-group card ${
                      formState.inputValues.hasTraveledInLast14Days
                        ? 'active'
                        : ''
                    }`}
                    style={{ marginLeft: 25 }}
                  >
                    <div className="card-body">
                      <PlacesInput
                        placeholder="Ciudad"
                        label="Ciudad donde estuvo"
                        className="form-control form-control-solid rounded-pill"
                        id="cities"
                        options={{ types: ['(cities)'] }}
                      />
                      <DateInput
                        label="Fecha de Retorno"
                        id="dateOfReturn"
                        className="form-control form-control-solid rounded-pill"
                      />
                      <Select
                        label="Seleccione la via"
                        id="returnType"
                        options={[
                          { value: '', label: 'Seleccione la via' },
                          { value: 'air', label: 'Aerea' },
                          { value: 'land', label: 'Terrestre' },
                          { value: 'water', label: 'Fluvial' }
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <Checkbox
                    name="hadContactInLast14Days"
                    label="Tuvo Contacto en los ultimos 14 dias?"
                  />
                </div>
                <div
                  className={`collapse-field-group card ${
                    formState.inputValues.hadContactInLast14Days ? 'active' : ''
                  }`}
                  style={{ marginLeft: 25 }}
                >
                  <div className="card-body">
                    <div className="form-group">
                      <DateInput
                        className="form-control form-control-solid rounded-pill"
                        label="Fecha de ultimo contacto"
                        id="dateOfLastContact"
                      />
                    </div>
                    <div className="form-group">
                      <Select
                        label="Relacion"
                        id="relationWithContact"
                        options={[
                          { value: '', label: 'Relacion ' },
                          { value: 'family', label: 'Familiar' },
                          { value: 'work', label: 'Trabajo' },
                          { value: 'medical', label: 'Asistencia Medica' },
                          { value: 'other', label: 'Otro' }
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-4">
                {isLoading ? (
                  <button
                    className="btn btn-primary btn-block btn-marketing rounded-pill"
                    type="submit"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                      style={{ paddingRight: 10 }}
                    ></span>
                    Loading...
                  </button>
                ) : (
                  <button
                    disabled={!formState.formIsValid}
                    type="submit"
                    className="btn btn-primary btn-block btn-marketing rounded-pill"
                  >
                    Enviar
                  </button>
                )}

                <button
                  style={{ marginRight: '10px' }}
                  onClick={onGoBackToSecondPage}
                  className="btn btn-block btn-marketing rounded-pill"
                >
                  Volver Atras
                </button>

                {formState.errors.submit ? (
                  <div className="alert alert-danger" role="alert">
                    {formState.errors.submit}
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PersonalInfoForm
