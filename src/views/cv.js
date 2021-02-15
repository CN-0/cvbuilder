import React, {useEffect, useState} from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Main from '../components/main/main';
import { Link } from 'react-router-dom';

const Cv = props =>{
    const [data, setData] = useState(props.location.data)
    const [template, setTemplate] = useState(props.location.template)

    useEffect(()=>{
        if(data){
            if(template){
                localStorage.setItem('mycv',JSON.stringify({data,template}));
            }else{
                const item = JSON.parse(localStorage.getItem('mycv'));
                setTemplate(item.template)
                localStorage.setItem('mycv',JSON.stringify({data,template}));
            }
        }else{
            const item = JSON.parse(localStorage.getItem('mycv'));
            setData(item.data);
            setTemplate(item.template)
        }
    },[data,template])

    const maindiv = data&&template===1?<><Main template={template} data={data} /><Sidebar data={data} /></>:null 
    const sidebardiv = data&&template===2?<><Sidebar template={template} data={data} /><Main data={data} /></>:null

    return(<>
    <div className="print">
        {maindiv}
        {sidebardiv} 
    </div>
    <div className="print-no">
    <div className="actions">
        <Link className="link-home" to="/">Create a new Cv</Link>
        <button className="btn draw-border"  onClick={()=>window.print()}>
            <svg className="down-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>Download PDF
        </button>
    </div>
    <div className="cv">
        {maindiv}
        {sidebardiv}
    </div>
    </div>
    </>)
}

export default Cv