import React from 'react'
import '../CSS/CSS.css'
import { Link } from 'react-router-dom'

export default function Cards(props) {
    return (<>
        <Link to={props.link} target="_blank" className='h-auto w-100 rounded shadow text-decoration-none p-1 m-3'>
            <div className='w-75 h-auto m-auto  p-2'>
                <img className='h-75 w-75 rounded-circle p-2' src={props.img} />
            </div>
            <div className='h-25 w-100 '>
                <p className='' style={{color:"#03045E"}}><b>{props.name}</b> ({props.type})</p>
                <p style={{color:"grey"}}>{props.details}</p>
            </div>

        </Link>
    </>)
}
