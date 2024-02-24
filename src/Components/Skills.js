import React, { useState, useEffect } from 'react'
export default function Skills() {
    const [clr, setClr] = useState();
    const skills = [
        { tag: 'Website Development', names: ["HTML", "CSS", "JavaScript", "NodeJS", "ReactJS", "MongoDB", "ExpressJS"] },
        { tag: 'Android Development', names: ["Java", "XML"] },
        { tag: 'Programming Languages', names: ["Java", "C++", "C"] }]
    function randomColors() {
        let r = Math.floor(Math.random() * 400);
        let g = Math.floor(Math.random() * 400);
        let b = Math.floor(Math.random() * 200);

        return `rgb(${r},${g},${b})`;
    }
    return (
        <div className='container' style={{ width: "100%" }}>
            <div className="card" style={{ background: 'transparent', }}>
                <div className="card-body">
                    {skills.map((items) => {
                        return (<>
                            <p style={{ color: '#6409E1' }}> {items.tag}</p>
                            <span>{items.names.map((values, index) => {
                                randomColors()
                                return (
                                    <button key={index} className='skill card  m-1' style={{ background: 'transparent', color: "#808086", fontFamily: "cursive", borderColor: randomColors() }}>{values}</button>
                                )
                            })}</span>
                            <hr />
                        </>)
                    })}
                </div>
            </div>
        </div>
    )
}
