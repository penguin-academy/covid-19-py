import React, { useState, useReducer, useEffect } from "react";
import { useReportContext } from "../layouts/Report";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const INPUT_BLUR = "INPUT_BLUR";
const INPUT_CHANGE = "INPUT_CHANGE";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      };
    default:
      return state;
  }
};

const PlacesInput = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    touched: false
  });


  const [gps, setGps] = useState(null);

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        setGps(latLng);
        dispatch({ type: INPUT_BLUR });
        dispatch({
          type: INPUT_CHANGE,
          value: address,
          isValid: inputState.isValid
        });
      })
      .catch(error => console.error("Error", error));
  };

  const { onAddressChange } = useReportContext();

  useEffect(() => {
    if (inputState.touched) {
      onAddressChange(props.id, inputState.value, gps);
    }
  }, [props.id, inputState, onAddressChange, gps]);

  const textChangeHandler = text => {
    const numberRegex = /^(0|[1-9]\d*)$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }

    if (!numberRegex.test(text.toLowerCase())) {
      isValid = false;
    }

    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }

    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  return (
    <PlacesAutoComplete
      value={inputState.value}
      onChange={textChangeHandler}
      searchOptions={props.options}
      onSelect={handleSelect}

    >
      {props => {
        const {
          getInputProps,
          suggestions,
          getSuggestionItemProps,
          loading,
          placeholder
        } = props;



        return (
          <div>
            <input
              className='form-control'
              style={{ width: "100%" }}
              placeholder={placeholder}

              onBlur={lostFocusHandler}
              {...getInputProps()}
            />
            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    </PlacesAutoComplete>
  );
};

export default PlacesInput;
