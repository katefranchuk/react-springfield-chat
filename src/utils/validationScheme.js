import * as yup from "yup";
import { emailRegExp, nameRegExp, pawdRegExp } from "./regularExpressions";

export const logInSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(emailRegExp, "Please enter valid email"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      pawdRegExp,
      "Password must contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Case Character"
    ),
});

export const signUpSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(nameRegExp, "Please enter only alphabetical characters"),
  email: yup
    .string()
    .required("Email is required")
    .matches(emailRegExp, "Please enter valid email"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      pawdRegExp,
      "Password must contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Case Character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match"),
});
