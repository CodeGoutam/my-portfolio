import React from 'react'
import '../CSS/CSS.css'
import { Link } from 'react-router-dom'

export default function Cards(props) {

    return (<>
        {/*  flip card */}
        <Link to={props.link ? props.link : "/"} target='_blank' className="flip-card m-1" >
            <div className="flip-card-inner">
                <div className="flip-card-front p-2 ">
                    <img className='img' src={props.img} alt="Avatar" />
                    <p className='p-1' style={{color:"#14213d"}}>{props.name}</p>

                </div>
                <div className="flip-card-back  d-grid">

                    <h6>{props.details}</h6>

                </div>
            </div>
        </Link>
    </>)
}
