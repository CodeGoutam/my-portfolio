import React from 'react'
import '../CSS/CSS.css'
import { Link } from 'react-router-dom'

export default function Cards(props) {
    return (<>
        <div className='h-auto w-100 rounded shadow '>
            <div className='w-75 h-auto m-auto  p-2'>
                <img className='h-100 w-100 rounded-circle p-2' src={props.img} />
            </div>
            <div className='h-25 w-100 '>
                <p className=''><b>{props.name}</b> ({props.type})</p>
                <p>{props.details}</p>
            </div>

        </div>
    </>)
}
