import React from 'react'
import { Link } from "react-router-dom";
import '../CSS/CSS.css'
import img from '../images/h.png'
import bg from '../images/b.png'

const Profile = () => {
    return (
        <div className='profile rounded-5  d-flex align-items-center  justify-content-around '>
            <img className='img-fluid rounded-circle ' src={img} />
            <div className=''>
                <h2 className='fw-bold' style={{ fontSize: "4vw", color: 'white' }}>Hemant Goutam</h2>
                <div className='linksDiv d-flex justify-content-between '>
                    <Link className='links' to={'https://github.com/CodeGoutam'} target="_blank">
                        <i class="fa-brands fa-github me-2 "></i> <span className='labels'>Github</span>
                    </Link>
                    <Link className='links' to={'https://www.linkedin.com/in/hemant-goutam/'} target="_blank">
                        <i class="fa-brands fa-linkedin me-2 "></i> <span className='labels'>LinkedIn</span>
                    </Link>
                </div>
            </div>
        </div >
  
    )
}
export default Profile

