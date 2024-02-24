import React from 'react'
import '../CSS/CSS.css'
import Cards from './Cards'
import GoFood from '../images/pxfuel.jpg'
import Trippy from '../images/trippy.png'
import Portfolio from '../images/favicon.png'
import foodapp from '../images/food-app.png'
import quicksolve from '../images/quicksolve.png'
import todo from '../images/todo.jpg'


export default function Projects() {
    const projectsData = [
        {
            name: "GoFood",
            details: 'HTML , CSS , JavaScript , ReactJS , NodeJS , ExpressJS , MongoDB',
            image: GoFood,
            link: "#",
            type: "Website"
        },
        {
            name: "Trippy Tour",
            details: 'HTML , CSS , JavaScript , ReactJS ',
            image: Trippy,
            link: "https://trippy-tour.netlify.app/",
            type: "Website"
        },
        {
            name: "Order Food",
            details: 'Java , XML',
            image: foodapp,
            link: "#",
            type: "Mobile App"
        },
        {
            name: "Quick Solve",
            details: 'Java , XML',
            image: quicksolve,
            link: "#",
            type: "Mobile App"
        },
        {
            name: "Portfolio",
            details: 'HTML , CSS , JavaScript , ReactJS ',
            image: Portfolio,
            link: "#",
            type: "Website"
        },
        {
            name: "To-Do-List",
            details: 'HTML , CSS , JavaScript ',
            image: todo,
            link: "#",
            type: "Website"
        },
    ]
    return (
        <div className='w-100 pt-2 pb-2'>
            <div>
                <p className='heading' style={{ color: '#6409E1' }}>Projects</p>
            </div>
            <div className="container w-100">
                <div className="row text-center w-100 justify-content-center d-flex " >
                    {projectsData.map((values) => {
                        return (
                            <div className=
                                'cards col-sm-6 col-md-4 col-lg-3 mb-2 d-flex'  >
                                <Cards name={values.name} details={values.details} img={values.image}
                                link={values.link}
                                type={values.type} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
