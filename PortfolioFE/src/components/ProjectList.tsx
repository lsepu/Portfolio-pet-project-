import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../state/store";
import { IProject } from "../state/features/ProjectSlice";
import Project from "./Project";

const ProjectList = () => {
  const projects = useSelector((state: IState) => state.projects);

  return (
    <div>
      {projects.map((project: IProject) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
