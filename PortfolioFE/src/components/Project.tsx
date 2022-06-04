import { IProject } from "../state/features/ProjectSlice";

interface IProjectProps {
  project: IProject;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  return (
    <div>
    <img src={project.img} alt="" />
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
