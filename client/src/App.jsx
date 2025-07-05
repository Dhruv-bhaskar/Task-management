import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import CreateTask from './components/CreateTask'
import AllTask from './components/AllTask'
import EditTask from './components/EditTask'
import ViewTask from './components/ViewTask'
import Navbar from './components/Navbar'
import Loggedout from './components/Loggedout'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/create',
    element: <CreateTask/>
  },
  {
    path: '/alltask',
    element: <AllTask/>
  },
  {
    path: '/edit/:id',
    element: <EditTask/>
  },
  {
    path: '/task/:id',
    element: <ViewTask/>
  },
  {
    path: '/nav',
    element: <Navbar/>
  },
  {
    path: '/loggedout',
    element: <Loggedout/>
  },

])


function App() {
  
  return (
    <div>
      <RouterProvider router={router}/>
      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  )
}

export default App
