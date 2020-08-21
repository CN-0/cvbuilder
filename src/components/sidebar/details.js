import React from 'react';

const Details = props =>{
    return(
    <div className="details">
    <h1 className="sidebar-heading">Details</h1>
        {props.email?<p className="details-item">Email: {props.email}</p>:null}
        {props.phone?<p className="details-item">Phone No: {props.phone}</p>:null}
        {props.dob?<p className="details-item">Date of Birth: {props.dob}</p>:null}
    </div>)
}

export default Details;