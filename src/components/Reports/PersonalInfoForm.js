import React from "react";
import Input from '../Input';
import Select from '../Select';

import './style/PersonalInfoForm.scss';

const PersonalInfoForm = () => {

  return (
    <div className="container">
      <div className="col-md-10 offset-md-1">
        <div className="row">
          <form action="" className="col-md-12">
            <div className="indicator-group">
              <div className="row">
                <div className="indicator active">
                  <span>1</span>
                </div>
                <div className="indicator active">
                  <span>2</span>
                </div>
                <div className="indicator active">
                  <span>3</span>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="page col-md-12">
              <h2>Información de Contacto</h2>
              <hr />
              <Input id="email" type="email" className="form-control" placeholder="Correo Electrónico" />
              <Input id="phoneNumber" type="text" className="form-control" placeholder="Número de Teléfono" />

              <button type="submit" className="btn btn-primary">Siguente</button>
            </div>
            <div className="page col-md-12 active">
              <h2>Información Personal</h2>
              <hr></hr>
              <div className="row">
                <div className="col-md-6">
                  <Input id="name" type="text" className="form-control" placeholder="Nombre y Apellido" />
                  <div className="form-group">
                    <select type="text" className="form-control" placeholder="Tipo de Documernto">
                      <option value="">Seleccione un tipo de documento</option>
                      <option value="">Cedula de Identidad</option>
                      <option value="">Pasaporte</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" placeholder="Nro. de Documento" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nacionalidad" />
                  </div>
                  <div className="form-group">
                    <input type="date" className="form-control" placeholder="Fecha de Nacimiento" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <select type="text" className="form-control" placeholder="Sexo">
                      <option value="">Seleccione su sexo</option>
                      <option value="">Masculino</option>
                      <option value="">Femenino</option>
                    </select>
                  </div>
                  <Select options={[
                    { value: '', label: 'Selecione un sexo' },
                    { value: 'male', label: 'Hombre' },
                    { value: 'female', label: 'Mujer' }
                  ]} />
                  <div className="form-group">
                    <select type="text" className="form-control" placeholder="Departamento">
                      <option value="">Seleccione su Departamento</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select type="text" className="form-control" placeholder="Ciudad">
                      <option value="">Seleccione su Ciudad</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select type="text" className="form-control" placeholder="Barrio">
                      <option value="">Seleccione su Barrio</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Siguente</button>

            </div>
            <div className="page col-md-12">
              <h2>Información Sintomática</h2>
              <hr></hr>
              <div className="row">

                <div className="col-md-6">
                  <div className="form-group">
                    <h4>Síntomas</h4> <br />
                    <input type="checkbox" /> &nbsp; Fiebre <br /><br />
                    <input type="checkbox" /> &nbsp; Tos  <br /><br />
                    <input type="checkbox" /> &nbsp; Dificultad para respirar <br /><br />
                    <input type="checkbox" /> &nbsp; Dolor de garganta <br /><br />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <br />
                    <br />
                    <input type="checkbox" /> &nbsp; <b>¿Viajó en los ultimos 14 días?</b> <br /><br />
                  </div>
                  <div className="collapse-field-group">
                    <div className="form-group">
                      <input type="text" placeholder="Ciudad y País donde viajo" className="form-control" />
                    </div>
                    <div className="form-group">
                      <input type="date" placeholder="Fecha de Regreso" className="form-control" />
                    </div>
                    <div className="form-group">
                      <select type="text" className="form-control">
                        <option value="">Seleccione la vía</option>
                        <option value="">Aereo</option>
                        <option value="">Terrestre</option>
                        <option value="">Marítimo</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="checkbox" /> &nbsp; <b>¿Tuvo contacto con un infectado?</b> <br /><br />
                  </div>
                  <div className="collapse-field-group">
                    <div className="form-group">
                      <input type="date" placeholder="Fecha de Ultimo contacto" className="form-control" />
                    </div>
                    <div className="form-group">
                      <select type="text" className="form-control">
                        <option value="">Seleccione la relación con el infectado</option>
                        <option value="">Familiar</option>
                        <option value="">Trabajo</option>
                        <option value="">Asistencia Médica</option>
                        <option value="">Otro</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
