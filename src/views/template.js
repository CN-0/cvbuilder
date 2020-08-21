import React from 'react';
import image from '../assets/template1.png'
import { Link } from 'react-router-dom';

const Template = () => {
    return(
    <div>
        <h1 style={{marginTop: "10px", textAlign: "center", fontSize: "23px"}} className="main-heading">Select a Template to build a Resume</h1>
        <div className="template">
            <Link to="/form"><img className="template-item" src={image} alt="template1" /></Link>
            <Link to="/form"><img className="template-item" src={image} alt="template1" /></Link>
            <Link to="/form"><img className="template-item" src={image} alt="template1" /></Link>
            <Link to="/form"><img className="template-item" src={image} alt="template1" /></Link>
        </div>
    </div>
    )
}

export default Template