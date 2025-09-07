import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children :[{
    path: '/',
    element: <HomePage />
  },
  
  
  
  
  {
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
