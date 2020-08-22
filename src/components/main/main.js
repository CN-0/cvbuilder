import React from 'react';

const Main = ({data, template}) =>{
    const defaultObjective = "To succeed in an environment of growth and excellence and earn a job which provides job satisfaction, self-development and help me achieve personal as well as organizational goals"
    return(
    <div className={template===1?"main marginleft":"main"}>
        <div className="objective">
            <h2 className="main-heading">Career Objective</h2>
            <p className="description">{data.objective || defaultObjective}</p>
        </div>
        {data.experience.length>0?
        <div className="experiance">
            <h2 className="main-heading">Experiance</h2>
            {data.experience.map((item,i)=>{
                return(<div key={i} className="experience-list">
                <h3 className="main-sunheading">
                    {item.position}
                </h3>
                <p className="description">
                {item.description}
                </p>
                </div>)
            })}
        </div>:null}
        {data.projects.length>0?<div className="projects">
            <h2 className="main-heading">Projects</h2>
                {data.projects.map((item,i)=>{
                    return(<div key={i} className="projects-list">
                    <h3 className="main-sunheading">
                        {item.title}
                    </h3>
                    <p className="description">
                    {item.description}
                    </p>
                    </div>)
                })}
        </div>:null}
    </div>)
}

export default Main