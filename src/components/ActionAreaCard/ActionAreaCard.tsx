import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Project } from "../../routes/Projects/Projects";

type ActionAreaCardProps = {
  project: Project;
};

export default function ActionAreaCard({ project }: ActionAreaCardProps) {
  const { title, description, image, link } = project;
  return (
    <Card sx={{ maxWidth: 600 }}>
      {/* TODO: make onClick of CardActionArea open a Dialog box with more info, embed WBA with youtube video */}
      {/* TODO: figure out to add images to the CardMedia */}
      <CardActionArea>
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
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <li>Click to learn more</li>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
