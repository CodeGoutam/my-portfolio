import React from "react";
import '../CSS/CSS.css'
import { Link } from "react-router-dom";
export const Navbar = () => {
    return <>
        <div className="nav p-2 justify-content-end ">
            {/* <p className="logo h4 ">Portfolio</p> */}
            <Link to={'/contact'} className="btn" style={{ backgroundColor: '#207448', color: 'white', }}> Contact Me <i className= "icon fa-solid fa-user ms-1"></i></Link>
        </div>
    </>
}
