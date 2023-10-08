import { useEffect, useState } from "react";
import { getJsonData } from "../../utils/data.utils";

import projectData from "../../constants/projects.json";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "../../components/ActionAreaCard/ActionAreaCard";

export interface Project {
  id: number;
  title: string;
  overview: string;
  link: string;
  image: string;
  keyPoints?: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // const fetchProjects = async () => {
    //     const projectData = await getJsonData<Project[]>("../../constants/projects.json");
    //     setProjects(projectData);
    // };
    // fetchProjects();
    setProjects(projectData);
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 3, md: 4 }}
      columns={{ xs: 6, sm: 8, md: 12, lg: 12, xl: 12 }}
      sx={{ paddingTop: "10px" }}
    >
      {projects.map((project) => {
        return (
          <Grid item xs={6} sm={4} md={4} lg={4} xl={3} key={project.id}>
            <ActionAreaCard project={project} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Projects;
