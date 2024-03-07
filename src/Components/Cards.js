import React from 'react'
import '../CSS/CSS.css'
import { Link } from 'react-router-dom'
import bg from "../images/bg6.jpg"


export default function Cards(props) {
    return (<>
        <Link to={props.link} target="_blank" className='h-auto w-100 rounded shadow text-decoration-none p-1 m-3' style={{
            backgroundImage: `url(${bg})`, backgroundSize: 'cover',
            backgroundBlendMode: 'color-dodge'
        }}>
            <div className='w-75 h-auto m-auto  p-2'>
                <img className='h-75 w-75 rounded-circle p-2' style={{ border: "solid 0px white" }} src={props.img} />
            </div>
            <div className='h-25 w-100 '>
                <p className='rounded' style={{ color: "#03045E" }}><b>{props.name}</b> ({props.type})</p>
                <p style={{
                    color: "#3d405b"
                }}>{props.details}</p>
            </div>

        </Link>
    </>)
}
