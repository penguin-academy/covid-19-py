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
    document: "",
    nationality: "",
    dob: "",
    dobCheck: '',
    sex: "",
    address: "",
    coords: null,
    hasFever: false,
    hasCough: false,
    hasMucus: false,
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
  inputValidities: {
    phoneNumber: false,


  },
  formIsValid: false
};

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
const REPORT_ID_UPDATE = "REPORT_ID_UPDATE";
const REPORT_ID_UPDATE_ERROR = 'REPORT_ID_UPDATE_ERROR'
const ADDRESS_UPDATE = "ADDRESS_UPDATE";
const CHECKBOX_UPDATE = 'CHECKBOX_UPDATE';
const DOB_ID_SUCCESS = 'DOB_ID_SUCCESS';
const DOB_ID_ERROR = 'DOB_ID_ERROR';

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
        },

        formIsValid: true
      }
    case REPORT_ID_UPDATE_ERROR:

      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          document: "",
          firstName: "",
          lastName: "",
          dob: "",
          nationality: "",
          sex: ""
        },
        formIsValid: false
      };
    case DOB_ID_SUCCESS:
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          dobCheck: state.inputValues.dob
        },
        formIsValid: true
      }
    case DOB_ID_ERROR:
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          dobCheck: ""
        },
        formIsValid: false
      }
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

  const idResponseErrorHandler = useCallback(() => {
    dispatchFormState({
      type: REPORT_ID_UPDATE_ERROR
    })
  },
    [dispatchFormState]

  )

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

  const dobError = useCallback(
    () => {
      dispatchFormState({
        type: DOB_ID_ERROR
      })
    }, [dispatchFormState]
  )

  const dobIdSuccess = useCallback(
    () => {
      dispatchFormState({
        type: DOB_ID_SUCCESS
      })
    }, [dispatchFormState]
  )

  const postForm = async () => {
    try {
      await firebase.firestore().collection('self-reports').add(formState.inputValues)

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
        onIdChangeError: idResponseErrorHandler,
        onDobError: dobError,
        onDobSuccess: dobIdSuccess,
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
