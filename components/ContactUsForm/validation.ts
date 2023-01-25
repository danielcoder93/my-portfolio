import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Full Name is required"),
  companyname: Yup.string().required("Company Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  message: Yup.string().required("Message is required"),
  phonenumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
