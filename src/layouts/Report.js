import React, { useReducer, useCallback } from "react";
import Container from "react-bootstrap/Container";
import firebase from "firebase/app";
import "firebase/firestore";
import PersonalInfoForm from "../components/Reports/PersonalInfoForm";

const INITIAL_STATE = {
  inputValues: {
    phoneNumber: "",
    firstName: "",
    lastName: "",
    documentType: "",
    document: "",
    nationality: "",
    dob: "",
    sex: "",
    address: "",
    coords: "",
    hasFever: "",
    hasCough: "",
    hasTroubleBreathing: "",
    hasThroatPain: "",
    dateOfSymptomStart: "",
    hasTraveledInLast14Days: "",
    cityTheyTraveledTo: "",
    countryTheyTraveledTo: "",
    dateOfReturn: "",
    returnType: "",
    hadContactInLast14Days: "",
    dateOfLastContact: "",
    relationWithContact: ""
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
    neighborhood: true
  },
  formIsValid: false
};

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
const REPORT_ID_UPDATE = "REPORT_ID_UPDATE";
const ADDRESS_UPDATE = "ADDRESS_UPDATE";

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_INPUT_UPDATE: {
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
    case REPORT_ID_UPDATE:
      let userInfo = action.data;
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          document: userInfo.nroCedula,
          firstName: userInfo.nombres,
          lastName: userInfo.apellido,
          dob: userInfo.fechNacim,
          nationality: userInfo.nacionalidadBean,
          sex: userInfo.sexo
        }
      };
    case ADDRESS_UPDATE:
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          address: action.address,
          coords: action.coords
        }
      };
    default:
      return state;
  }
};

const ReportContext = React.createContext();

export const useReportContext = () => React.useContext(ReportContext);

const Report = () => {
  const [formState, dispatchFormState] = useReducer(formReducer, INITIAL_STATE);

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

  const idResponseHandler = useCallback(
    userData => {
      dispatchFormState({
        type: REPORT_ID_UPDATE,
        data: userData
      });
    },
    [dispatchFormState]
  );

  const addressChangeHandler = useCallback(
    (address, coords) => {
      dispatchFormState({
        type: ADDRESS_UPDATE,
        address,
        coords
      });
    },
    [dispatchFormState]
  );

  return (
    <ReportContext.Provider
      value={{
        formState,
        onInputChange: inputChangeHandler,
        onIdChange: idResponseHandler,
        onAddressChange: addressChangeHandler
      }}
    >
      <Container style={{ paddingTop: "20px" }}>
        <PersonalInfoForm></PersonalInfoForm>
      </Container>
    </ReportContext.Provider>
  );
};

export default Report;
