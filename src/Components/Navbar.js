import React from "react";
import '../CSS/CSS.css'
import { Link } from "react-router-dom";
export default function Navbar() {
    return <>
        <div className="nav p-2 justify-content-end ">
            {/* <p className="logo h4 ">Portfolio</p> */}
            <Link to={'/contact'} className="connectBtn" > Say Hello <i className="icon fa-solid fa-user ms-1"></i></Link>
        </div>
    </>
}

// style={{ backgroundColor: '#207448', color: 'white', }}