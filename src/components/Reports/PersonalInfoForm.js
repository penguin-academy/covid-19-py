import React from "react";
import Input from "../Input";
import IDInput from "../IDInput";
import IDDateInput from "../IDDateInput";
import DateInput from "../DateInput";
import Checkbox from "../Checkbox";
import Select from '../Select'
import { useReportContext } from '../../layouts/Report'

import "./style/PersonalInfoForm.scss";
import PlacesInput from "../PlacesInput";

const PersonalInfoForm = () => {
  const { onSubmitForm } = useReportContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm()
  }

  return (
    <div className='container'>
      <div className='col-md-10 offset-md-1'>
        <div className='row'>
          <form action='' className='col-md-12' onSubmit={handleSubmit}>
            <div className='page active col-md-12'>
              <h2>Información de Contacto</h2>
              <hr />

              <IDInput
                id='document'
                type='text'
                className='form-control'
                placeholder='Cedula'
              />
              <IDDateInput />
              <PlacesInput id='home' placeholder='Direccion' />
              <Input
                id='phoneNumber'
                type='number'
                placeholder='Numero de Telefono'
                className='form-control'
              />
            </div>

            <div className='page active col-md-12'>
              <h2>Información Sintomática</h2>
              <hr></hr>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <h4>Síntomas</h4> <br />
                    <Checkbox id='hasFever' label='Fiebre' />
                    <br />
                    <Checkbox id='hasCough' label='Tos' />
                    <br />
                    <Checkbox
                      id='hasTroubleBreathing'
                      label='Dificultad al respirar'
                    />
                    <br />
                    <Checkbox id='hasThroatPain' label='Dolor de garganta' />
                    <br />
                    <DateInput id='dateOfSymptomStart' />
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
                    <PlacesInput
                      placeholder='Ciudad'
                      id='cities'
                      options={{ types: ["(cities)"] }}
                    />
                    <DateInput id='dateOfReturn' />
                  </div>
                  <div className='collapse-field-group'>
                    <Select id="returnType" options={[
                      { value: '', label: 'Seleccione la via' },
                      { value: 'air', label: 'Aerea' },
                      { value: 'land', label: 'Terrestre' },
                      { value: 'water', label: 'Fluvial' },
                    ]
                    } />

                  </div>
                  <div className='form-group'>
                    <Checkbox
                      id='hadContactInLast14Days'
                      label='Tuvo Contacto en los ultimos 14 dias?'
                    />
                  </div>
                  <div className='collapse-field-group'>
                    <div className='form-group'>
                      <DateInput id='dateOfLastContact' />
                    </div>
                    <div className='form-group'>
                      <Select id="relationWithContact" options={[
                        { value: '', label: 'Relacion ' },
                        { value: 'family', label: 'Familiar' },
                        { value: 'work', label: 'Trabajo' },
                        { value: 'medical', label: 'Asistencia Medica' },
                        { value: 'other', label: 'Otro' },
                      ]
                      } />

                    </div>
                  </div>
                </div>
              </div>
              <button type='submit' className='btn btn-primary'>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
