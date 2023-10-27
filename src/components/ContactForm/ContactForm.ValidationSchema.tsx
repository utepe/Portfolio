import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  subject: Yup.string()
    .required("Subject is required"),
  emailAddress: Yup.string().required("Email is required").email("Email is invalid"),
  message: Yup.string().required("Message is required"),
});

export default validationSchema;