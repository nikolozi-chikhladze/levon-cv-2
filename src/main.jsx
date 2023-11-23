import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeScreen from "./screens/Home/Home.screen.jsx";
import './reset.css';
import {CommonContextProvider} from "./state/Common.context.jsx";
import {ContactScreen} from "./screens/Contact/Contact.screen.jsx";
import {WorksScreen} from "./screens/Works/Works.screen.jsx";


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
        element: <WorksScreen />
    },
    {
        path: "/contact",
        element: <ContactScreen />
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

