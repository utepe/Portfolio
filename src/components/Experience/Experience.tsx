import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";
import UnorderedList from "../UnorderedList/UnorderedList";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
}));

export interface Experience {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Item elevation={1}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ flexGrow: 1 }}
      >
        <Grid item xs={6}>
          <Typography variant="h5">{experience.jobTitle}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ textAlign: "end" }}>
            {experience.company}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            {experience.startDate} - {experience.endDate}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" sx={{ textAlign: "end" }}>
            {experience.location}
          </Typography>
        </Grid>
      </Grid>
      {/* 
        TODO: ensure that links in description are clickable 
        Maybe use html-react-parser
        */}
      <UnorderedList
        elements={experience.description}
        renderElement={(element) => (
          <Typography variant="body1">{element}</Typography>
        )}
      />
    </Item>
  );
};

export default ExperienceCard;
