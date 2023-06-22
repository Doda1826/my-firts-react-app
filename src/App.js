import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter( /* application routes are defined here */ );
 
export default function App () {
  return (
    <RouterProvider router={ router } />
  );
}
