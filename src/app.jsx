import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/Home/Home.screen.jsx";
import { CommonContextProvider } from "./state/Common.context.jsx";
import { ContactScreen } from "./screens/Contact/Contact.screen.jsx";
import { WorksScreen } from "./screens/Works/Works.screen.jsx";
import { AboutScreen } from "./screens/About/About.screen.jsx";
import { useState } from "react";
import { WorkScreen } from "./screens/Work/Work.screen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/about",
    element: <AboutScreen />,
  },
  {
    path: "/works",
    element: <WorksScreen />,
  },
  {
    path: "/works/:id",
    element: <WorkScreen />,
  },
  {
    path: "/contact",
    element: <ContactScreen />,
  },
]);

export const App = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  return (
    <CommonContextProvider
      value={{
        isHeaderOpen,
        toggleHeader: () => setIsHeaderOpen((lastProp) => !lastProp),
      }}
    >
      <RouterProvider router={router} />
    </CommonContextProvider>
  );
};
