import React, { createContext, useState, useMemo } from "react";
import SignUpInitialValues from "../components/Login/SignUp/SignUpForm/SignUpInitialValues/SignUpInitialValues";

const SignUpContext = createContext();

export function SignUpContextProvider() {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(SignUpInitialValues);

  /* const handleSubmit = useCallback((newValues) => {
            setFormValues((prevValues) => ({ ...prevValues, ...newValues }));
        }, [setFormValues]); */

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  /* const contextValue = {
    activeStep,
    setActiveStep,
    formValues,
    setFormValues,
    handleNext,
    handleBack,
    // handleSubmit
  };

  return (
    <SignUpContext.Provider value={contextValue}>
      {children}
    </SignUpContext.Provider>
  );
} */

  /* function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case "decrease":
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    case "form-value":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            value: action.fieldValue,
          },
        },
      };
    case "form-error":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            error: action.error,
          },
        },
      };

    default:
      return state;
  }
}

function StepsProvider({ children }) {
  const [{ activeStep, formValues }, dispatch] = useReducer(reducer, {
    activeStep: 0,
    formValues: SignUpInitialValues,
  });

  // Proceed to next step
  const handleNext = useCallback(() => dispatch({ type: "increase" }), []);
  // Go back to prev step
  const handleBack = useCallback(() => dispatch({ type: "decrease" }), []);
*/
  const contextValue = useMemo(
    () => ({
      activeStep,
      setActiveStep,
      formValues,
      setFormValues,
      handleNext,
      handleBack,
      // handleSubmit
    }),
    [activeStep, formValues, handleNext, handleBack]
  );

  return (
    <SignUpContext.Provider value={contextValue}>
      {/* children */}
    </SignUpContext.Provider>
  );
}

export default SignUpContext /* { , StepsProvider } */;
