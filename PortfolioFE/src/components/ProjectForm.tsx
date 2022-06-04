import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../state/features/ProjectSlice";

const ProjectForm = () => {
  const dispatch = useDispatch();

  const [ProjectInput, setProjectInput] = useState({
    id: "",
    name: "",
    description: "",
    img: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setProjectInput({
      ...ProjectInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProject = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (ProjectInput.name && ProjectInput.description && ProjectInput.img) {
      setProjectInput({
        ...ProjectInput,
        id: Math.floor(Math.random() * 100).toString(),
      });
      dispatch(addProject(ProjectInput));
    }

    setProjectInput({
      id: "",
      name: "",
      description: "",
      img: "",
    });
  };

  return (
    <form>
      <div style={{ padding: "10px" }}>
        <label style={{ padding: "10px" }} htmlFor="name">Project name</label>
        <input 
          type="text"
          value={ProjectInput.name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <br />
      <div style={{ padding: "10px" }}>
      <label style={{ padding: "10px" }} htmlFor="description">Description</label>
      <textarea
        value={ProjectInput.description}
        onChange={handleChange}
        name="description"
      />
      </div>
      <br />
      <div style={{ padding: "10px" }}>
      <label style={{ padding: "10px" }} htmlFor="img">Image url</label>
      <input
        type="text"
        value={ProjectInput.img}
        onChange={handleChange}
        name="img"
      />
      </div>
      <br />
      <button onClick={handleAddProject}>Add project</button>
    </form>
  );
};

export default ProjectForm;
