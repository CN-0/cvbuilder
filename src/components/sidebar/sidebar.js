import React from 'react';
import Name from './name';
import Details from './details';
import Education from './education';
import Skills from './skills';

const Sidebar = ({data, template}) =>{
    return(
        <div style={template===2?{marginRight:"20px"}:null} className="sidebar">
            <Name name={data.name} position={data.position} />
            {data.email || data.phone || data.dob ?<Details email= {data.email} phone={data.phone} dob={data.dob} />: null}
            {data.college || data.course || data.timeline || data.pointer?<Education college={data.college} course={data.course} timeline={data.timeline} pointer={data.pointer} />:null}
            {data.skills.length>0?<Skills skills={data.skills} />:null}
        </div>)
}

export default Sidebar