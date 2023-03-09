import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const SignUpContext = createContext();

export function SignUpContextProvider({ children }) {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    lastName: "",
    firstName: "",
    CP: "",
    email: "",
    password: "",
    picture: "",
    job: "",
    experience: "",
    region: "",
    bio: "",
    about: "",
    gitHub: "",
    skills: [],
    agreement: false,
  });

  const contextValue = useMemo(
    () => ({
      activeStep,
      setActiveStep,
      formValues,
      setFormValues,
    }),
    [activeStep, formValues]
  );

  return (
    <SignUpContext.Provider value={contextValue}>
      {children}
    </SignUpContext.Provider>
  );
}

SignUpContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SignUpContext;
