import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return <div className="footer" >
        <Link to={"https://www.linkedin.com/in/hemant-goutam/"} className="icons p-2" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
            <p className="icon"> LinkedIn</p>
        </Link>
        <Link to={"https://github.com/CodeGoutam/"} className="icons p-2" target="_blank">
            <i className="fa-brands fa-github"></i>  <p className="icon"> GitHub</p>
        </Link>
        <Link to={"/contact"} className="icons p-2" >
            <i class="fa-solid fa-envelope"></i>
            <p className="icon"> Email</p>
        </Link>
    </div>
}
export default Footer