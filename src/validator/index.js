import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const emailValidation = () => {
  return yup.string("Enter your email").email("Enter a valid email").required("Email is required");
};

const passwordValidation = () => {
  return yup
    .string("Enter your password")
    .min(7, "minimum 7 characters")
    .required("Password is required")
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "Must Contain One Special Case Character"
    )
};

const confirmPasswordValidation = (password) => {
  return yup
    .string()
    .oneOf([yup.ref(password), null], 'Passwords must match')
    .required();
};

const firstNameValidation = () => {
  return yup
    .string("Enter your First Name")
    .min(3, "minimum 3 characters")
    .required("First Name is required");
};

const lastNameValidation = () => {
  return yup
    .string("Enter your Last_Name")
    .min(3, "minimum 3 characters length")
    .required("Last Name is required");
};

const addressValidation = () => {
  return yup
    .string("Enter your Address")
    .required("Address is required");
};

const phoneNumberValidation = () => {
  return yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "invalid Number")
    .max(10, "invalid Number")
    .required("Phone Number is required");
};

export const signInvalidationSchema = () => {
  return yup.object().shape({
    email: emailValidation(),
    password: passwordValidation(),
  });
};

export const signUpvalidationSchema = () => {
  return yup.object().shape({
    firstName: firstNameValidation(),
    lastName: lastNameValidation(),
    address:addressValidation(),
    phone:phoneNumberValidation(),
    email: emailValidation(),
    password: passwordValidation(),
    confirmPassword: confirmPasswordValidation('password')
  });
};