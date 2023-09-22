import {
    HomePage,
    Login, SingUp, LoadMusic, Detail
} from "../Views"




export const publicRoute = [
    { path: "/", component: <HomePage /> },
    { path: "/LoadMusic", component: <LoadMusic /> },
    { path: "/Detail", component: <Detail /> },



]


export const privateRoute = [
    { path: "/Login", component: <Login /> },
    { path: "/SingUp", component: <SingUp /> },


]