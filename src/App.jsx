
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
