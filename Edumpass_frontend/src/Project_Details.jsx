import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import './project_des.css'
const Project_Details = ({pro_id,project_data}) => {

  const selectedProject = project_data.find((item) => item.id === pro_id);
  console.log(selectedProject)
  if (!selectedProject) {
    return(
    <div className="err_page">
        <h2>Project not found</h2>
    </div>)
  }
  return (
    <div className="pro_des_con">
        <div className="pro_nav_head">
        <ul>
            <li>Project Development <IoMdArrowDropright style={{width:'25px', height:'auto'}}/></li>
            <li>{selectedProject.title}</li>
        </ul>
    </div> 
        <h2 className='pro_des_h2'>{selectedProject.title}</h2>
        <div className="vid_con">
        <iframe  src={selectedProject.video} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='youtube_con'></iframe>
        </div>
        <div className="pro_des_de">
            <h3>Project Description</h3>
            <p style={{ fontSize: '16px' }}>{selectedProject.project_des}</p>
            <h3>Probelm Statement</h3>
            <p  style={{ fontSize: '16px' }}>{selectedProject.probelm_stm}</p>
            <h3>Technology Used</h3>
            <ul>
               {selectedProject.technology_used.map((item)=>(
                 <li>{item}</li>
               ))}
            </ul>
            <h3>Key Features</h3>
            <ul>
            {selectedProject.key_features.map((item)=>(
                 <li>{item}</li>
               ))}
            </ul>
            <div className="pro_des_btn">
                <button className='dwn_des'>Download Description</button>
                <button className='enroll_des'>Enroll</button>
            </div>
        </div>
        
                
          
                
    </div>
  )
}

export default Project_Details