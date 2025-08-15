import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ArticleListPage from './pages/ArticlesListPage';
import ArticlePage, { loader as articleLoader } from './pages/ArticlePage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import EventManagementPage from './pages/EventManagementPage';

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children :[{
    path: '/',
    element: <HomePage />
  }, {
    path: '/management',
    element: <EventManagementPage />
  }, {
    path: '/articles',
    element: <ArticleListPage />
  }, {
    path: '/articles/:name', // -->/ /articles/learn-node
    element: <ArticlePage />,
    loader: articleLoader,
  }, {
    path: '/login',
    element: <LoginPage />
  },{
    path: '/create-account',
    element: <CreateAccountPage />
  }]
}]

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router = {router} />
  );
}

export default App
