// eslint-disable-next-line no-unused-vars
import { createContext, useCallback, useMemo, useReducer } from "react";
import SignUpInitialValues from "../components/Login/SignUp/SignUpForm/SignUpInitialValues/SignUpInitialValues";

const SignUpContext = createContext({
  activeStep: 0,
  formValues: SignUpInitialValues,
  // eslint-disable-next-line no-unused-vars
  handleChange: () => {},
  // eslint-disable-next-line no-unused-vars
  handleNext: () => {},
  // eslint-disable-next-line no-unused-vars
  handleBack: () => {},
});

export default SignUpContext;
