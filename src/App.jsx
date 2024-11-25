import HomePage from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProjectsPage from './pages/Projects';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: null,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  { path: '*', element: <HomePage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
