// import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login'
import ResetPassword from './components/ResetPassword';
import GeneralLayout from './GeneralLayout';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/reset-password',
      element:<ResetPassword />
    },
    {
      path: "dashboard",
      element: <GeneralLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/dashboard/profile",
          element: <Profile />,
        },
        
        
      ],
    },
    
    
  ]);

  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App

