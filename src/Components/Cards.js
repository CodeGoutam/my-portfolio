import React from 'react'
import '../CSS/CSS.css'
import { Link } from 'react-router-dom'

export default function Cards(props) {
    return (<>
        {/*  flip card */}
        <Link to={props.link} target='_blank' className="flip-card m-1 text-decoration-none " >
            <div className="flip-card-inner">
                <div className="flip-card-front p-2 ">
                    <img className='img' src={props.img} alt="Avatar" />
                </div>
                <div className="flip-card-back d-sm-none">
                    <h6>{props.details}</h6>
                </div>
            </div>
            <Link className='text-decoration-none  ' to={props.link} style={{ color: "#03045e",  }}>{props.name}</Link>
        </Link>
    </>)
}
