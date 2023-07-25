import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/artciles">Articles</NavLink>
            <NavLink to="categories">Categories</NavLink>
        </div>
    )
}

export default Header



