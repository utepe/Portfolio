import { Fragment, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { styled } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";

import experienceData from "../../constants/experience.json";
import UnorderedList from "../../components/UnorderedList/UnorderedList";

// import TepeResume from "../../assets/TepeResume.pdf";

interface Experience {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Resume = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    // const fetchExperiences = async () => {
    //     const experienceData = await getJsonData<Experience[]>("../../constants/experience.json");
    //     setExperience(experienceData);
    // };
    // fetchExperiences();
    setExperiences(experienceData);
  }, []);

  return (
    <Fragment>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        rowSpacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1, paddingBottom: "10px" }}
      >
        <Grid item xs={4}>
          <Typography variant="h3">Experiences</Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "end" }}>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<PictureAsPdfIcon />}
            /* TODO: resolve this pdf import error */
            // href={TepeResume}
            // target="_blank"
          >
            View Full Resume
          </Button>
        </Grid>
      </Grid>
      <Stack spacing={2}>
        {experiences.map((experience, index) => (
          <Item key={index} elevation={1}>
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
              <Grid item xs={6} sx={{ textAlign: "end" }}>
                <Typography variant="subtitle1">
                  {experience.location}
                </Typography>
              </Grid>
            </Grid>
            {/* TODO: ensure that links in description are clickable */}
            <UnorderedList
              elements={experience.description}
              renderElement={(element) => (
                <Typography variant="body1">{element}</Typography>
              )}
            />
          </Item>
        ))}
      </Stack>
      <div>
        <Typography variant="h3">Skills</Typography>
      </div>
    </Fragment>
  );
};

export default Resume;
