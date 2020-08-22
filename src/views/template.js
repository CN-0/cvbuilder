import React from 'react';
import image1 from '../assets/template1.png';
import image2 from '../assets/template2.png';
import { Link } from 'react-router-dom';

const Template = () => {
    return(
    <div>
        <h1 style={{marginTop: "10px", textAlign: "center", fontSize: "23px"}} className="main-heading">Select a Template to build a Resume</h1>
        <div className="template">
            <Link to={{pathname: '/form', template:1}}><img className="template-item" src={image1} alt="template1" /></Link>
            <Link to={{pathname: '/form', template:2}}><img className="template-item" src={image2} alt="template2" /></Link>
            <div className="template-item" style={{backgroundColor:"lightblue", fontSize:"40px", display:"flex", justifyContent:"center",alignItems:"center", color:"white"}}>Not Yet!</div>
            <div className="template-item" style={{backgroundColor:"lightblue", fontSize:"40px", display:"flex", justifyContent:"center",alignItems:"center", color:"white"}}>Not Yet!</div>
        </div>
    </div>
    )
}

export default Template