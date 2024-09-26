import "./App.css"
import HomePage from "./pages/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: null
  },
  { path: "*", element: <HomePage /> }
])

export default function App() {
  return <RouterProvider router={router} />
}
