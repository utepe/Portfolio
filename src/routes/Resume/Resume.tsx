import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';

import experienceData from "../../constants/experience.json";
import { Typography } from "@mui/material";

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
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
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
    <div>
      <Paper elevation={0}>
        <Typography variant="h3">Experiences</Typography>
        <Stack spacing={2}>
          {experiences.map((experience) => (
            <Item elevation={1}>
              <Typography variant="h5">{experience.jobTitle}</Typography> 
              <Typography variant="subtitle1">{experience.startDate} - {experience.endDate}</Typography>
              <Typography variant="h6">{experience.company}</Typography>
              <Typography variant="subtitle1">{experience.location}</Typography>
              
            </Item>
          ))}
        </Stack>
      </Paper>
      <div>
        <Typography variant="h3">Skills</Typography>
      </div>
    </div>
  );
};

export default Resume;
