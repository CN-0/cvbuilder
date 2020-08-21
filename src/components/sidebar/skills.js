import React from 'react';

const Skills = props =>{
    return(
    <div className="skills">
        <h1 className="sidebar-heading">Skills</h1>
        {props.skills?props.skills.map((skill,i)=><p key={i} className="skills-item">{skill}</p>):null}
    </div>)
}

export default Skills