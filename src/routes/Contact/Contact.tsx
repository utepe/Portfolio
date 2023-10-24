import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step/Step";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import ContactForm from "../../components/ContactForm/ContactForm";

// const Contact = () => {
//   return (
//     <div>
//       <Typography variant="h3">Contact</Typography>
//       <Box
//         component="form"
//         sx={{
//           "& .MuiTextField-root": { m: 1, width: "25ch" },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div>
//           <TextField id="first-name" label="First Name" />
//           <TextField id="last-name" label="Last Name" />
//           <TextField required id="email" label="Email" />

//           <TextField
//             id="message"
//             label="Message"
//             multiline
//             rows={4}
//             helperText="Write your message here"
//           />
//         </div>
//       </Box>
//     </div>
//   );
// };

const Contact = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleSend = () => {
    return;
  };

  return (
    <Fragment>
      <Typography variant="h3">Contact Me</Typography>
      <Paper
        // variant="outlined"
        sx={{ my: { xs: 1, md: 2 }, p: { xs: 2, md: 3 } }}
      >
        <React.Fragment>
          <ContactForm />
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              onClick={handleSend}
              sx={{ mt: 3, ml: 1 }}
            >
              Submit
            </Button>
          </Box>
        </React.Fragment>
      </Paper>
    </Fragment>
  );
};

export default Contact;
