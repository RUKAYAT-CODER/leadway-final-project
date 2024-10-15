// import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import Login from "./components/Login";
import PasswordReset from "./components/PasswordReset";
import GeneralLayout from "./GeneralLayout";
import Dashboard from "./components/Dashboard";
import NewDashboard from "./components/NewDashboard";
import { PersonalDetailsProvider } from "./components/context/PersonalDetailsContext";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import NotFound from "./components/NotFound";
import ProfilePage from "./components/ProfilePage";
import Jobs from "./components/Jobs";
import Events from "./components/Events";
import LogOut from "./components/LogOut";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/password-reset",
      element: <PasswordReset />,
    },
    {
      element: <GeneralLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/newdashboard",
          element: <NewDashboard />,
        },
        {
          path: "personalDetails",
          element: <PersonalDetailsForm />,
        },
        {
          path: "/directory",
          element: <Directory />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/directory/profilePage/:userId",
          element: <ProfilePage />,
        },
         {
          path: "/logout",
          element: <LogOut />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/not-found",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <PersonalDetailsProvider>
      <RouterProvider router={router}>
        <PersonalDetailsForm />
      </RouterProvider>
    </PersonalDetailsProvider>
  );
}

export default App;
