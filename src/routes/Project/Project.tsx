import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import projectData from "../../constants/projects.json";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
import UnorderedList from "../../components/UnorderedList/UnorderedList";

export interface Project {
  id: number;
  titleId: string;
  title: string;
  overview: string;
  githubLink: string;
  image: string;
  youtubeEmbedId?: string;
  keyPoints?: string[];
}

const Project = () => {
  const params = useParams();

  const [project, setProject] = useState<Project>();

  useEffect(() => {
    // const fetchProjects = async () => {
    //     const projectData = await getJsonData<Project[]>("../../constants/projects.json");
    //     setProject(projectData);
    // };
    // fetchProjects();
    const data = projectData.find(
      (project) => project.titleId === params.titleId
    );
    setProject(data);
  }, []);

  return project ? (
    <div>
      <h1>{project.title}</h1>
      <p>{project.overview}</p>
      {project.keyPoints && (
        <UnorderedList elements={project.keyPoints} renderElement={element => element}/>
      )}
      {project.youtubeEmbedId && (
        <YoutubeEmbed embedId={project.youtubeEmbedId} />
      )}
    </div>
  ) : (
    <h1>404</h1>
  );
};

export default Project;
