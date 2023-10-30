import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
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
  dialogTitle: string;
  dialogContent: React.ReactNode;
}

const AlertDialogSlide = ({
  dialogOpen,
  handleClose,
  dialogTitle,
  dialogContent,
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
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogContent>{dialogContent}</DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default AlertDialogSlide;
