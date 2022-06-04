import { configureStore } from "@reduxjs/toolkit";
import ProjectReducer, { IProject } from "./features/ProjectSlice";


const store = configureStore({
    reducer: {
        projects: ProjectReducer
    }
})

interface IState {
    projects: IProject[]
}

export default store;

export type { IState };