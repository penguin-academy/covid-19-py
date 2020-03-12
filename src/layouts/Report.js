import React, { useState, useReducer, useContext } from 'react'
import PersonaInfoForm from '../components/Reports/PersonalInfoForm';
import SymptomsForm from '../components/Reports/SymptomsForm';
import Container from 'react-bootstrap/Container'
import { Formik } from 'formik';

const INITIAL_STATE = {
  email: null,
  phoneNumber: null,
  firstName: null,
  lastName: null,
  documentType: null,
  nationality: null,
  dob: null,
  sex: null,
  region: null,
  city: null,
  neighborhood: null,
  hasFever: null,
  hasCough: null,
  hasTroubleBreathing: null,
  hasThroatPain: null,
  dateOfSymptomStart: null,
  hasTraveledInLast14Days: null,
  cityTheyTraveledTo: null,
  countryTheyTraveledTo: null,
  dateOfReturn: null,
  returnType: null,
  hadContactInLast14Days: null,
  dateOfLastContact: null,
  relationWithContact: null
}

const Report = () => {


  return (
    <Container style={{ paddingTop: '20px' }}>
      <Formik>

      </Formik>

    </Container >
  )
}

export default Report
