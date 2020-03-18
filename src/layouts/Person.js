import React from 'react'

import FormBox from '../components/FormBox'
import PlacesInput from '../components/PlacesInput'
import Input from '../components/Input'

const Person = ({ setFormState }) => {
  return (
    <FormBox>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          <h1>Final Quesion</h1>
          <p className="lead">
            Before your results are ready, we have a final question for you.
          </p>
          <p>
            We are using this tool to generate data to help forcasting and
            fighting the Corona Virus Crisis in Paraguay.
          </p>
          <p>
            We want to ask you to add your personal information below as this
            will give us important information about the real situation!
          </p>
          <hr className="mb-5 mt-5" />
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-lg-6">
          <p className="lead m-lg-0">Question</p>
          <p className="m-lg-0">Subtitle</p>
        </div>
        <div className="col-12 col-lg-5">
          <PlacesInput
            id="home"
            className="form-control form-control-solid rounded-pill"
            placeholder="Direccion"
            label="Direccion"
            errorMessage="Debes ingresar una direccion"
            required
          />
        </div>
      </div>
      <hr className="mb-5 mt-5" />
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-lg-6">
          <p className="lead m-lg-0">Question</p>
          <p className="m-lg-0">Subtitle</p>
        </div>
        <div className="col-12 col-lg-5">
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
        </div>
      </div>
    </FormBox>
  )
}

export default Person
