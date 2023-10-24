import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Fragment, useState } from "react";
import AlertDialogSlide from "../AlertDialog/AlertDialog";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    emailjs
      .send("service_xkg70no", "template_qgo485q", {
        subject: subject,
        firstName: firstName,
        lastName: lastName,
        message: message,
        emailAddress: emailAddress,
      }, "ASY5E4wmtGS_CaZjA")
      .then(
        (result) => {
          console.log(result.text);
          setDialogOpen(true);
          setDisableSubmit(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Fragment>
      <Fragment>
        <Typography variant="h6" gutterBottom>
          Send me an email
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
              variant="filled"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
              variant="filled"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email Address"
              fullWidth
              autoComplete="email"
              variant="filled"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="subject"
              name="subject"
              label="Subject"
              fullWidth
              variant="filled"
              onChange={(e) => setSubject(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="message"
              name="message"
              label="Message"
              fullWidth
              variant="filled"
              helperText="Please enter your message here and I'll get back to you as soon as possible!"
              multiline
              rows={6}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
        </Grid>
      </Fragment>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {/* TODO: disable button if data fields are empty? */}
        <Button variant="outlined" disabled={disableSubmit} onClick={handleSubmit} sx={{ mt: 3, ml: 1 }}>
          Submit
        </Button>
      </Box>
      <AlertDialogSlide
        dialogOpen={dialogOpen}
        handleClose={handleDialogClose}
        data={{
          firstName,
          lastName,
          emailAddress,
          subject,
          message,
        }}
      />
    </Fragment>
  );
};

export default ContactForm;
