import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Button, CardActionArea } from "@mui/material";
import { Project } from "../../routes/Project/Project";
import { Fragment, forwardRef, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import UnorderedList from "../UnorderedList/UnorderedList";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";

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
  const { title, overview, image, githubLink, keyPoints, youtubeEmbedId } =
    project;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (youtubeEmbedId) {
      const iframe = document.querySelector("iframe");
      if (iframe) {
        iframe.src = iframe.src;
      }
    }
  };

  return (
    <Fragment>
      <Card sx={{ maxWidth: 600 }}>
        {/* TODO: add WBA poster link to modal */}
        {/* FIXME: media to display full image */}
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
        fullWidth
        maxWidth="md"
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
            <UnorderedList
              elements={keyPoints}
              renderElement={(element) => (
                <DialogContentText id="dialog-slide-key-points">
                  {element}
                </DialogContentText>
              )}
            />
          )}
          <Button
            variant="outlined"
            sx={{ marginBottom: "10px" }} // TODO: if youtubeEmbedId below, add marginBottom
            href={githubLink}
            target="_blank"
          >
            View Github Repository
          </Button>
          {youtubeEmbedId && <YoutubeEmbed embedId={youtubeEmbedId} />}
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
