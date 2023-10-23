import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Typography variant="h3">Contact</Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="first-name" label="First Name" />
          <TextField id="last-name" label="Last Name" />
          <TextField required id="email" label="Email" />

          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            helperText="Write your message here"
          />
        </div>
      </Box>
    </div>
  );
};

export default Contact;
