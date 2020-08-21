import React from 'react';

const Education = props =>{
    return(
    <div className="education">        
        <h1 className="sidebar-heading">Education</h1>
        {props.college?<p className="education-item">{props.college}</p>:null}
        {props.course?<p className="education-item">{props.course}</p>:null}
        {props.timeline?<p className="education-item">{props.timeline}</p>:null}
        {props.pointer?<p className="education-item">{props.pointer}</p>:null}
    </div>)
}

export default Education