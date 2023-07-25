import react from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
/* COMPONENTS */
import Profile from './Profile.js'
import Categories from './components/Categories.js'
import Articles from './components/Articles.js'
import SingUp from './components/SingUp.js'
import About from './components/About.js'
import Header from "./components/header.js";
import Author from './components/Author.js'
import Edit from './components/Edit.js'
import Root from './components/Root.js'
/* COMPONENTS */

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
    <Route path="profile" element={ <Profile/> }>
      <Route path="edit" element={ <Edit/> }/>
    </Route>
    <Route path="categories" element={ <Categories/> }/>
    <Route path="articles" element={ <Articles/> }/>
    <Route path="articles/:title" element={ <Articles/> }/>
    <Route path="authors/:name" element={ <Author/> }/>
    <Route path="sing-up" element={ <SingUp/> }/>
    <Route path="about" element={ <About/> }/>
  </Route>
))

function App() {
  return (
      <main>
        <RouterProvider router={router}/>
        <div className={Header}>
        </div>
      </main>
  )
}

export default App