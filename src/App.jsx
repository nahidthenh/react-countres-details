import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import Main from './layout/Main';
import CountryDetails from './components/CountryDetails';

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://restcountries.com/v3.1/all');
          },
          element: <Home></Home>
        },
        {
          path: '/details/:id',
          loader: async ({ params }) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${params.id}`);
          },
          element: <CountryDetails></CountryDetails>
        }
      ]
    },
    {
      path: '*',
      element: <div>404 Page not found !</div>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
