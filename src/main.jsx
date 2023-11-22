import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeScreen from "./screens/Home.screen.jsx";
import './reset.css';


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

export const Background = ({children}) => <div style={{backgroundColor: '#242424', minHeight: "100vh"}}>{children}</div>;