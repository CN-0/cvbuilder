import React from 'react';

const Name = props =>{
    return(
    <div className="name-container">
        {props.name?<h1 className="name">{props.name}</h1>:null}
        {props.position?<h2 className="position">{props.position}</h2>:null}
    </div>)
}

export default Name