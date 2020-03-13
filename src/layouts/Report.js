import React, { useReducer, useCallback } from 'react'
import Container from 'react-bootstrap/Container'
import firebase from 'firebase/app'
import 'firebase/firestore';
import PersonalInfoForm from '../components/Reports/PersonalInfoForm';

const INITIAL_STATE = {
  inputValues: {
    email: '',
    phoneNumber: '',
    name: '',
    documentType: '',
    document: '',
    nationality: '',
    dob: '',
    sex: '',
    region: '',
    city: '',
    neighborhood: '',
    hasFever: '',
    hasCough: '',
    hasTroubleBreathing: '',
    hasThroatPain: '',
    dateOfSymptomStart: '',
    hasTraveledInLast14Days: '',
    cityTheyTraveledTo: '',
    countryTheyTraveledTo: '',
    dateOfReturn: '',
    returnType: '',
    hadContactInLast14Days: '',
    dateOfLastContact: '',
    relationWithContact: ''
  },
  inputValidities: {
    email: false,
    phoneNumber: false,
    name: true,
    documentType: true,
    nationality: true,
    dob: true,
    sex: true,
    region: true,
    city: true,
    neighborhood: true,

  },
  formIsValid: false
}

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};



const ReportContext = React.createContext()

export const useReportContext = () => React.useContext(ReportContext)

const Report = () => {
  const [formState, dispatchFormState] = useReducer(formReducer, INITIAL_STATE)

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );


  return (
    <ReportContext.Provider value={{ formState, onInputChange: inputChangeHandler }}>
      <Container style={{ paddingTop: '20px' }}>



        <PersonalInfoForm></PersonalInfoForm>
      </Container >
    </ReportContext.Provider>
  )
}

export default Report
