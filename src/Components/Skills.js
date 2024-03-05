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
        <div className='container' style={{ width: "100%", }}>
            <div className="card" style={{ background: 'transparent',border:'none' }}>
            <div>
                <h4 className='heading rounded ps-3' style={{ color: '#560bad',}}>Skills</h4>
            </div>
                <div className="card-body">
                    {skills.map((items) => {
                        return (<>
                            <p className='rounded' style={{ color: 'white',backgroundColor:"#83c5be",textAlign:'center'}}> {items.tag}</p>
                            <span>{items.names.map((values, index) => {
                                randomColors()
                                return (
                                    <button key={index} className='skill card  m-1' style={{ background: 'transparent', color: "#808086", borderColor: randomColors() }}>{values}</button>
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

