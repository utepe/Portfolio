import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <Fragment>
      <Typography variant="h3">Contact Me</Typography>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 1, md: 2 }, p: { xs: 2, md: 3 } }}
      >
        <ContactForm />
      </Paper>
    </Fragment>
  );
};

export default Contact;
