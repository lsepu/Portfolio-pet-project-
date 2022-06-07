import { configureStore } from "@reduxjs/toolkit";
import PostsReducer, { IPostState } from "./features/PostsSlice";
import ProjectReducer, { IProject } from "./features/ProjectSlice";
import UserReducer, { IUser } from './features/userSlice';


const store = configureStore({
    reducer: {
        projects: ProjectReducer,
        posts: PostsReducer,
        user: UserReducer
    }
})

interface IState {
    projects: IProject[],
    posts: IPostState,
    user: IUser
}

export default store;

export type { IState };