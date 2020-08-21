import React, {useState} from 'react';

const Form = props =>{
    const [skill, setSkill] = useState("");
    const [expPosition, setExpPosition] = useState("");
    const [expDescription, setExpDescrription] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescrription] = useState("");
    const [skillsArray, setSkillsArray] = useState([]);
    const [expArray, setExpArray] = useState([]);
    const [projectArray, setProjectArray] = useState([]);
    const submitted = e =>{
        e.preventDefault();
        const data = {
           name: e.target.name.value,
           position: e.target.position.value,
           email: e.target.email.value,
           phone: e.target.phone.value,
           dob: e.target.dob.value,
           college: e.target.college.value,
           course: e.target.course.value,
           timeline: e.target.timeline.value,
           pointer: e.target.pointer.value,
           skills: skillsArray,
           objective: e.target.objective.value,
           experience: expArray,
           projects: projectArray
        }        
        props.history.push({
            pathname: '/cv',
            data
        });
    }
    const addSkill = () =>{
        setSkillsArray(skillsArray=>[...skillsArray, skill])
        setSkill("");
    }
    const addExperience = () =>{
        setExpArray(expArray => [...expArray, {position: expPosition, description: expDescription}] )
        setExpDescrription("");
        setExpPosition("");
    }
    const addProject = () =>{
        setProjectArray(projectArray => [...projectArray, {title: projectTitle, description: projectDescription}] )
        setProjectDescrription("");
        setProjectTitle("");
    }
    return(     
    <form onSubmit={submitted} className="form">
        <h1 className="main-heading" style={{marginBottom:"15px",textAlign:"center", fontSize:"23px"}}>Enter Your Details to make a Resume</h1>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div  style={{display: "flex",width:"400px",marginRight:"50px", flexShrink:"0",flexDirection:"column"}}>
                <input type="text" id="name" placeholder="Name" />
                <input type="text" id="position" placeholder="Position" />
                <input type="email" id="email" placeholder="Email" />
                <input type="text" id="phone" placeholder="Phone No"  />
                <input type="text" id="dob" placeholder="Date of birth" />
                <input type="text" id="college" placeholder="college" />
                <input type="text" id="course" placeholder="course" />
                <input type="text" id="timeline" placeholder="timeline" />
                <input type="text" id="pointer" placeholder="pointer" />
                <div className="skill-form">
                <input type="text" id="skill" value={skill} onChange={e=>setSkill(e.target.value)} placeholder="Enter the skill to be added" />
                <button type="button" className="skill-btn" onClick={addSkill}>Add</button>
                </div>
                <ul className="skills-entered">
                {skillsArray.map((eachSkill,i) => <li key={i}>{eachSkill}</li>)}
                </ul>
            </div>
            <div style={{display: "flex", flexGrow:"1",flexDirection:"column"}}>
                <div style={{marginTop:"10px"}}>
                <textarea id="objective" type="text" placeholder="career objective" />
                </div>        
                <div className="add-experiences">
                    <h1 style={{marginTop:"15px",marginBottom:"-2px"}}>Add Experience</h1>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <input type="text" id="exp-position" value={expPosition} onChange={e=>setExpPosition(e.target.value)} placeholder="position" />
                    <button type="button"  onClick={addExperience} > Add</button>
                    </div>
                    <textarea type="text" id="exp-description" value={expDescription} onChange={e=>setExpDescrription(e.target.value)} placeholder="description" />
                </div>
                <div className="experience-entered">
                    {expArray.map((item,i)=><div key={i} className="exp-item"><h3>{item.position}</h3><p>{item.description}</p></div>)}
                </div>
                <div className="add-projects">
                    <h1 style={{marginTop:"15px",marginBottom:"-2px"}}>Add Project</h1>
                    <div style={{display:"flex",alignItems:"center"}}>
                    <input type="text" id="project-title" value={projectTitle} onChange={e=>setProjectTitle(e.target.value)} placeholder="title" />
                    <button type="button"  onClick={addProject} > Add</button>
                    </div>
                    <textarea type="text" id="project-description" value={projectDescription} onChange={e=>setProjectDescrription(e.target.value)} placeholder="description" />
                </div>
                <div className="experience-entered">
                    {projectArray.map((item,i)=><div key={i} className="project-item"><h3>{item.title}</h3><p>{item.description}</p></div>)}
                </div>
            </div>
        </div>
        <button className="submit-button" type="submit" ><h3>Submit</h3></button>
    </form>
    )
}

export default Form