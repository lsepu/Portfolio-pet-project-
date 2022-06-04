import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProject {
  id: string;
  name: string;
  description: string;
  img: string;
}

const initialState: IProject[] = [
  {
    id: "1",
    name: "first project",
    description: "project description",
    img: "project url img",
  },
  {
    id: "2",
    name: "second project",
    description: "project description",
    img: "project url img",
  },
];

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<IProject>) {
      state.push(action.payload);
    },
  },
});

export const { addProject } = projectSlice.actions;

export default projectSlice.reducer;

export type { IProject };
