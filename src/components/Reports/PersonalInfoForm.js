import React, { useState } from "react";
import Input from "../Input";
import IDInput from "../IDInput";
import IDDateInput from "../IDDateInput";
import DateInput from "../DateInput";
import Checkbox from "../Checkbox";
import Select from "../Select";
import { useReportContext } from "../../layouts/Report";

import "./style/PersonalInfoForm.scss";
import PlacesInput from "../PlacesInput";

const PersonalInfoForm = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { onSubmitForm, formState } = useReportContext();

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitForm();
  };

  const onGoToSymptomsPage = e => {
    e.preventDefault();
    setActiveIndex(2);
  };

  const onGoToSecondPage = e => {
    e.preventDefault();
    setActiveIndex(1)
  }

  const onGoBackToSecondPage = e => {
    e.preventDefault();
    setActiveIndex(1)
  }

  const onGoBackToInfoPage = e => {
    e.preventDefault();
    setActiveIndex(0);
  };

  return (
    <div className='container'>
      <div className='indicator-group'>
        <div className='row'>
          <div className={`indicator ${activeIndex === 0 ? "active" : ""}`}>
            <span>1</span>
          </div>
          <div className={`indicator ${activeIndex === 1 ? "active" : ""}`}>
            <span>2</span>
          </div>
          <div className={`indicator ${activeIndex === 2 ? "active" : ""}`}>
            <span>3</span>
          </div>
        </div>
        <div className='clearfix'></div>
      </div>
      <div className='col-md-10 offset-md-1'>
        <div className='row'>
          <form action='' className='col-md-12' onSubmit={handleSubmit}>
            <div
              className={`page col-md-12 ${activeIndex === 0 ? "active" : ""}`}
            >
              <h2>Información de Contacto</h2>
              <hr />

              <IDInput
                label='Numero de Cedula'
                id='document'
                type='text'
                className='form-control'
                placeholder='Cedula'
                required
              />
              <IDDateInput required />


              <button disabled={!formState.formIsValid || !formState.inputValues.dobCheck} className='btn btn-primary' onClick={onGoToSecondPage}>
                Continuar
              </button>
            </div>
            <div
              className={`page col-md-12 ${activeIndex === 1 ? "active" : ""}`}
            >
              <h2>Información Personal</h2>
              <hr />
              <label>Direccion</label>
              <PlacesInput id='home' placeholder='Direccion' errorMessage="Debes ingresar una direccion" required />
              <Input
                label='Numero de Telefono'
                id='phoneNumber'
                type='number'
                placeholder='Numero de Telefono'
                className='form-control'
                required
                errormessage="Debes ingresar un numero de telefono"
                minLength={10}
              />
              <button
                style={{ marginRight: "10px" }}
                onClick={onGoBackToInfoPage}
                className='btn btn-primary'
              >
                Volver Atras
                  </button>
              <button disabled={!formState.formIsValid || !formState.inputValues.address || !formState.inputValues.phoneNumber} className='btn btn-primary' onClick={onGoToSymptomsPage}>
                Continuar
              </button>
            </div>

            <div
              className={`page col-md-12 ${activeIndex === 2 ? "active" : ""}`}
            >
              <h2>Información Sintomática</h2>
              <hr></hr>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <h4>Síntomas</h4> <br />
                    <Checkbox id='hasFever' label='Fiebre' />
                    <br />
                    <Checkbox id='hasCough' label='Tos Seca' />
                    <br />
                    <Checkbox id='hasMucus' label='Flema (Amarillo Verdoso)' />
                    <br />
                    <Checkbox
                      id='hasTroubleBreathing'
                      label='Dificultad al respirar'
                    />
                    <br />
                    <Checkbox id='hasThroatPain' label='Dolor de garganta' />
                    <br />
                    <DateInput
                      required
                      errorMessage="Debes proveer una fecha de inicio de sintomas"
                      label='Inicio de Sintomas'
                      id='dateOfSymptomStart'
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <br />
                    <br />

                    <Checkbox
                      id='hasTraveledInLast14Days'
                      label='Viajo en los ultimos 14 dias?'
                    />
                    <br />
                    <div
                      className={`collapse-field-group ${
                        formState.inputValues.hasTraveledInLast14Days
                          ? "active"
                          : ""
                        }`}
                    >
                      <label>Ciudad donde estuvo</label>
                      <PlacesInput
                        placeholder='Ciudad'
                        id='cities'
                        options={{ types: ["(cities)"] }}
                      />
                      <DateInput label='Fecha de Retorno' id='dateOfReturn' />
                      <Select
                        id='returnType'
                        options={[
                          { value: "", label: "Seleccione la via" },
                          { value: "air", label: "Aerea" },
                          { value: "land", label: "Terrestre" },
                          { value: "water", label: "Fluvial" }
                        ]}
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <Checkbox
                      id='hadContactInLast14Days'
                      label='Tuvo Contacto en los ultimos 14 dias?'
                    />
                  </div>
                  <div
                    className={`collapse-field-group ${
                      formState.inputValues.hadContactInLast14Days
                        ? "active"
                        : ""
                      }`}
                  >
                    <div className='form-group'>
                      <DateInput
                        label='Fecha de ultimo contacto'
                        id='dateOfLastContact'
                      />
                    </div>
                    <div className='form-group'>
                      <Select
                        id='relationWithContact'
                        options={[
                          { value: "", label: "Relacion " },
                          { value: "family", label: "Familiar" },
                          { value: "work", label: "Trabajo" },
                          { value: "medical", label: "Asistencia Medica" },
                          { value: "other", label: "Otro" }
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <button
                    style={{ marginRight: "10px" }}
                    onClick={onGoBackToSecondPage}
                    className='btn btn-primary'
                  >
                    Volver Atras
                  </button>
                  <button disabled={!formState.formIsValid} type='submit' className='btn btn-primary'>
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
