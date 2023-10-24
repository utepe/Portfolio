import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AlertDialogProps {
  dialogOpen: boolean;
  handleClose: () => void;
  data: {
    firstName: string;
    lastName: string;
    emailAddress: string;
    subject: string;
    message: string;
  };
}

const AlertDialogSlide = ({
  dialogOpen,
  handleClose,
  data,
}: AlertDialogProps) => {
  return (
    <div>
      <Dialog
        open={dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Message Sent!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {/* TODO: change the dialong content or format it 
            TODO: add a little checkmark saying the sending was success */}
            {`${data.firstName}, ${data.lastName}, ${data.emailAddress}, ${data.subject}, ${data.message}`}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlertDialogSlide;
