import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, CardActionArea } from "@mui/material";
import { Project } from "../../routes/Project/Project";
import { Fragment, useState } from "react";
import UnorderedList from "../UnorderedList/UnorderedList";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Transition } from "../AlertDialog/AlertDialog";
import TwoItemGridCard from "../TwoItemGridCard/TwoItemGridCard";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

type ActionAreaCardProps = {
  project: Project;
};

const ActionAreaCard = ({ project }: ActionAreaCardProps) => {
  const { title, overview, image, githubLink, keyPoints, youtubeEmbedId, poster } =
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
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component="img"
            height="300"
            image={require(`../../assets/projectImages/${image}`)}
            alt={`${title} image`}
            sx={{
              width: "100%",
              height: "auto"
            }}
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
            <Fragment>
              <DialogContentText
                id="dialog-slide-description"
                variant="subtitle1"
              >
                <br /><b>Key Points from the Project</b>
              </DialogContentText>
              <UnorderedList
                elements={keyPoints}
                renderElement={(element) => (
                  <DialogContentText id="dialog-slide-key-points">
                    {element}
                  </DialogContentText>
                )}
              />
            </Fragment>
          )}
          <TwoItemGridCard
            leftItem={
              <Button
                variant="outlined"
                href={githubLink}
                endIcon={<GitHubIcon />}
                target="_blank"
              >
                View Github Repository
              </Button>
            }
            rightItem={ poster ?
              <Button
                variant="outlined"
                color="primary"
                startIcon={<PictureAsPdfIcon />}
                href={require(`../../assets/pdfs/${poster}`)}
                target="_blank"
              >
                View Poster
              </Button> : null
            }
          />

          {youtubeEmbedId && <YoutubeEmbed embedId={youtubeEmbedId} />}
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default ActionAreaCard;
