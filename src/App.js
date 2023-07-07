import React from 'react'
import About from './components/About';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import SignUp from './components/SingUp'
import Article from './components/Articles';
import Categories from './components/Categories';
import Profile from './components/Profile';

/*const router = createBrowserRouter(createRoutesFromElements(
  //<Route path='/' element={ <Root/> }>
    <Route path='about' element={ <About/> } />
    <Route path='sing-up' element={ <SignUp/> } />
    <Route path='articles/about:title' element={ <Article/> } />
    <Route path='categories' element={ <Categories/> } />
    <Route path='profile/Darwin' element={ <Profile/> } />
  //</Route>
));*/ 

export default function App () {
  //<RouterProvider router={ router } />

  return (
   <div>
     <h1>THIS WED SITE IS ABOUT:</h1> 
     <ul>
      <li className='about'>{About}</li>
      <li className='sing-up'>{SignUp}</li>
      <li className='articles'>{Article}</li>
      <li className='categories'>{Categories}</li>
      <li className='profile'>{Profile}</li>
     </ul>
   </div>
  );
}
