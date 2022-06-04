import { configureStore } from "@reduxjs/toolkit";
import PostsReducer, { IPostState } from "./features/PostsSlice";
import ProjectReducer, { IProject } from "./features/ProjectSlice";


const store = configureStore({
    reducer: {
        projects: ProjectReducer,
        posts: PostsReducer
    }
})

interface IState {
    projects: IProject[],
    posts: IPostState
}

export default store;

export type { IState };