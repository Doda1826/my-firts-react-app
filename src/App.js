import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    <Route path='/about' element={ <About/> } />
    <Route path='/sing-up' element={ <SignUp/> } />
    <Route path='/articles/about:title' element={ <Articles/> } />
    <Route path='/categories' element={ <Categories/> } />
    <Route path='/profile/darwin' element={ <Profile/> } />
  </Route>
)); 

export default function App () {
  return (
    <RouterProvider router={ router } />
  );
}
