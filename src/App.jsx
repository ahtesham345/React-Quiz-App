import React from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import Root from './pages/Root';
import Questions from './components/Links/Questions';
import Categories from './pages/Categories';
import { GlobalProvider } from './context/GlobalContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalProvider><Root/></GlobalProvider>,
    children: [
      { path: "", element: <Home /> },
      { path: "/Questions", element: <Questions/> },
      { path: "/Categories", element: <Categories/> },
    ],
  }
]);

const App = () => {
  return (
    <div className='md:px-20 px-5 pb-10'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App