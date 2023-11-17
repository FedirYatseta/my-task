import {
    createBrowserRouter,
} from "react-router-dom";
import React from "react";
import App from "../App";
import Post from "../components/post";
import Album from "../components/album";
import Photo from "../components/photo";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/post/:userId",
        element: <Post />,
    },
    {
        path: "/album/:userId",
        element: <Album />,

    },
    {
        path: "/album/:userId/photo/:albumId",
        element: <Photo />,
    },
]);

export default router