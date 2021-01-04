import * as yup from 'yup';

export default yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters long"),
    email: yup.string().email("Please enter a valid email").required("Valid email address required"),
    password: yup
      .string()
      .min(6, "Password must be 6 characters long")
      .required('Please enter a password'),
    passwordConfirm: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
});