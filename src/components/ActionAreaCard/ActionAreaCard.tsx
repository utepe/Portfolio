import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { CardActionArea } from "@mui/material";
import { Project } from "../../routes/Projects/Projects";
import { Fragment, forwardRef, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

type ActionAreaCardProps = {
  project: Project;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ActionAreaCard({ project }: ActionAreaCardProps) {
  const { title, overview, image, link, keyPoints } = project;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Card sx={{ maxWidth: 600 }}>
        {/* TODO make WBA link to separate page */}
        {/* FIXME: media to display full image */}
        {/* TODO:  embed WBA with youtube video  */}
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component="img"
            height="300"
            image={require(`../../assets/projectImages/${image}`)}
            alt={`${title} image`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {overview}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <li>Click to learn more</li>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-slide-description">
            {overview}
          </DialogContentText>
          {keyPoints && (
            <DialogContentText id="dialog-slide-key-points">
              <ul>
                {keyPoints.map((point) => (
                  <li>{point}</li>
                ))}
              </ul>
            </DialogContentText>
          )}
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
