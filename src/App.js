// import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import GeneralLayout from "./GeneralLayout";
import Dashboard from "./components/Dashboard";
import { PersonalDetailsProvider } from "./components/context/PersonalDetailsContext";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import NotFound from "./components/NotFound";
import ProfilePage from "./components/ProfilePage";
import Jobs from "./components/Jobs";
import Events from "./components/Events";


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
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      element: <GeneralLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
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
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/not-found",
          element: <NotFound />,
        },
      ],
    }
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
