import React from 'react'
import { Link } from "react-router-dom";
import '../CSS/CSS.css'
import img from '../images/g.png'
const Profile = () => {
    return (<>
        <div className='cover w-100 h-auto p-3 rounded-1'>
            <div className='profile d-flex align-items-center '>
                <img className='image img-fluid rounded-circle' src={img} alt='Hemant Goutam' />
                <p className='name'>
                    <h2 className='text-white fw-bold'>Hemant Goutam</h2>
                    <div className='linksDiv d-flex justify-content-between '>
                        <Link className='links' to={'https://github.com/CodeGoutam'} target="_blank">
                            <i class="fa-brands fa-github me-2 "></i> <span className='labels'>GiHub</span>
                        </Link>
                        <Link className='links' to={'https://www.linkedin.com/in/hemant-goutam/'} target="_blank">
                            <i class="fa-brands fa-linkedin me-2 "></i> <span className='labels'>LinkedIn</span>
                        </Link>
                    </div>
                </p>
            </div>
        </div>
    </>)
}
export default Profile


// https://github.com/CodeGoutam
// https://www.linkedin.com/in/hemant-goutam/