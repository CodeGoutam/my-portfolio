import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return <div className="footer" >
        <Link to={"https://www.linkedin.com/in/hemant-goutam/"} className="icons" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
        </Link>
        <Link to={"https://github.com/CodeGoutam/"} className="icons" target="_blank">
            <i className="fa-brands fa-github"></i>
        </Link>
        <Link to={"/contact"} className="icons" >
            <i class="fa-solid fa-envelope"></i>
        </Link>
    </div>
}
export default Footer