import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeScreen from "./screens/Home.screen.jsx";
import './reset.css';
import {CommonContextProvider} from "./state/Common.context.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />
    },
    {
        path: "/about",
        element: <div>About page</div>
    },
    {
        path: "/works",
        element: <div>Works page</div>
    },
    {
        path: "/contact",
        element: <div>Contact page</div>
    },
])

const App = () => {
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);

    return (
            <CommonContextProvider value={{
                isHeaderOpen,
                toggleHeader: () => setIsHeaderOpen(lastProp => !lastProp)
            }}>
                    <RouterProvider router={router}/>
            </CommonContextProvider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

