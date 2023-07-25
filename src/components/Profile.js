import React from "react"
import { Link } from "react-router-dom";

function Profile() {
    return (
        <>
          <h2>Darwin Verastegui</h2>
          <p>THIS IS JUTS A TEST ABOUT HOW TO INSERT A LINK ON A FILE WITH THE <Link to="./Profile">LINK COMPONENT</Link></p>
        </>
    ); 
}

export default Profile