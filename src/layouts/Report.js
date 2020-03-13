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
    coords: null,
    hasFever: false,
    hasCough: false,
    hasTroubleBreathing: false,
    hasThroatPain: false,
    dateOfSymptomStart: "",
    hasTraveledInLast14Days: false,
    cityTheyTraveledTo: "",
    cityCoords: null,
    dateOfReturn: "",
    returnType: "",
    hadContactInLast14Days: false,
    dateOfLastContact: "",
    relationWithContact: ""
  },
  // inputValidities: {
  //   email: false,
  //   phoneNumber: false,
  //   name: true,
  //   documentType: true,
  //   nationality: true,
  //   dob: true,
  //   sex: true,
  //   region: true,
  //   city: true,
  //   neighborhood: true
  // },
  // formIsValid: false
};

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
const REPORT_ID_UPDATE = "REPORT_ID_UPDATE";
const ADDRESS_UPDATE = "ADDRESS_UPDATE";
const CHECKBOX_UPDATE = 'CHECKBOX_UPDATE';

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_INPUT_UPDATE: {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value
      };
      // const updatedValidities = {
      //   ...state.inputValidities,
      //   [action.input]: action.isValid
      // };
      // let updatedFormIsValid = true;
      // for (const key in updatedValidities) {
      //   updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      // }
      return {
        // formIsValid: updatedFormIsValid,
        // inputValidities: updatedValidities,
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
      const label = action.id
      if (label === 'home') {
        return {
          ...state,
          inputValues: {
            ...state.inputValues,
            address: action.address,
            coords: action.coords
          }
        };
      } else {
        return {
          ...state,
          inputValues: {
            ...state.inputValues,
            cityTheyTraveledTo: action.address,
            cityCoords: action.coords
          }
        };
      }

    case CHECKBOX_UPDATE:

      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.input]: action.value
        }
      }
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
    (id, address, coords) => {
      dispatchFormState({
        type: ADDRESS_UPDATE,
        address,
        coords,
        id
      });
    },
    [dispatchFormState]
  );

  const checkboxChangeHandler = useCallback(
    (inputIdentifier, inputValue) => {
      dispatchFormState({
        type: CHECKBOX_UPDATE,
        input: inputIdentifier,
        value: inputValue
      })
    },
    [dispatchFormState]
  )

  const postForm = async () => {
    try {
      await firebase.firestore().collection('self-reports').add(formState.inputValues)
      console.log(formState)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ReportContext.Provider
      value={{
        formState,
        onInputChange: inputChangeHandler,
        onIdChange: idResponseHandler,
        onAddressChange: addressChangeHandler,
        onCheckboxChange: checkboxChangeHandler,
        onSubmitForm: postForm
      }}
    >
      <Container style={{ paddingTop: "20px" }}>
        <PersonalInfoForm></PersonalInfoForm>
      </Container>
    </ReportContext.Provider>
  );
};

export default Report;
