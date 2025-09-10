import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import EventManagementPage from './pages/EventManagementPage';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UpcomingEventsPage from './pages/UpcomingEventsPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage />,

 children :[{
    path: '/',
    element: <HomePage />
  }, {
    path: '/upcoming',
    element: <UpcomingEventsPage />
  }, {
    path: '/management',
    element: <EventManagementPage />
  }, {
    path: '/login',
    element: <LoginPage />
  },{
    path: '/register',
    element: <RegisterPage />
  }]
}]

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router = {router} />
  );
}

export default App
