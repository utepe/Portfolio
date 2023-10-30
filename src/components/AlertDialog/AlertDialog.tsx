import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
}

const AlertDialogSlide = ({
  dialogOpen,
  handleClose,
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
        <div style={{ textAlign: "center" }}>
          <DialogTitle>Message Sent!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <CheckCircleIcon color="success" fontSize="large" />
              <br />
              I'll will get back you as soon as possible!
            </DialogContentText>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default AlertDialogSlide;
