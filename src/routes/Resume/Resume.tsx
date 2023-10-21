import { Fragment, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Button, Typography } from "@mui/material";

import experienceData from "../../constants/experience.json";
import ExperienceCard, {
  Experience,
  Item,
} from "../../components/Experience/Experience";
import TwoItemGridCard from "../../components/TwoItemGridCard/TwoItemGridCard";

// import TepeResume from "../../assets/TepeResume.pdf";

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
      <TwoItemGridCard
        leftItem={<Typography variant="h3">Experiences</Typography>}
        rightItem={
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
        }
      />
      <Stack spacing={2}>
        {experiences.map((experience, index) => (
          <ExperienceCard index={index} experience={experience} />
        ))}
      </Stack>
      <div>
        <Typography variant="h3">Skills</Typography>
        <Item elevation={1}>
          <Typography variant="subtitle1">
            <b>Languages</b>: C#, Java, Python, Typescript/Javascript, C/C++,
            VDHL
          </Typography>
          <Typography variant="subtitle1">
            <b>Engineering Tools</b>: MATLAB/Simulink, Unity, RaspberryPi,
            Arduino, LabVIEW, LTSpice, FPGA, ModelSim
          </Typography>
          <Typography variant="subtitle1">
            <b>Developer Tools</b>: Git, Postman, Docker, AWS, Jenkins, Azure,
            VS Code, Visual Studio, IntelliJ
          </Typography>
          <Typography variant="subtitle1">
            <b>Libraries</b>: SciPy, pandas, NumPy, Matplotlib, Machine
            (MicroPython)
          </Typography>
        </Item>
      </div>
    </Fragment>
  );
};

export default Resume;
