import React, {useEffect, useState} from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Main from '../components/main/main';
import html2canvas from 'html2canvas';
import JsPdf from 'jspdf';
import { Link } from 'react-router-dom';
import { FaFileDownload } from "react-icons/fa";

const Cv = props =>{
    const [data, setData] = useState(props.location.data)
    const [template, setTemplate] = useState(props.location.template)
    console.log(template)
    useEffect(()=>{
        if(data){
            localStorage.setItem('mycv',JSON.stringify({data,template}));
        }else{
            const item = JSON.parse(localStorage.getItem('mycv'));
            setData(item.data);
            setTemplate(item.template)
        }
    },[data])
    const printPDF = () => {
        const page = document.getElementById('cv');
        html2canvas(page)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
      
            const imgWidth = 210;
            const pageHeight = 298;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
      
            const doc = new JsPdf('p', 'mm');
            let position = 0;
      
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
      
            while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              doc.addPage();
              doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
            }
            doc.save('Resume.pdf');
          });
    };
    return(
    <div>
    <div style={{display:"flex",justifyContent: "space-between" ,alignItems:"center", margin:"20px 0px 20px 0px"}}>
        <Link className="link-home" to="/">Create a new Cv</Link>
        <FaFileDownload  className="fadownload" onClick={printPDF} />
    </div>
    <div className="cv" id="cv">
        {data&&template===1?<><Main template={template} data={data} /><Sidebar data={data} /></>:null} 
        {data&&template===2?<><Sidebar template={template} data={data} /><Main data={data} /></>:null} 
    </div>
    </div>)
}

export default Cv