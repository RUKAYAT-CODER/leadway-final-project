// import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import GeneralLayout from "./GeneralLayout";
// import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import { PersonalDetailsProvider } from "./components/context/PersonalDetailsContext";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import NotFound from "./components/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      // path: "/dashboard",
      element: <GeneralLayout />,
      children: [
        {
          path: "/dashboard", // This corresponds to /dashboard
          element: <Dashboard />,
        },
        {
          path: "profile", // This corresponds to /dashboard/profile
          element: <PersonalDetailsForm />,
        },
        {
          path: "*",
          element: <NotFound />, // Create a NotFound component
        },
        // You can add more nested routes here
      ],
    },
    // You can add more top-level routes here
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
