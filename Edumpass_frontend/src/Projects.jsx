import React from 'react'
import './project.css'
import { IoMdArrowDropright } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import wpd from './assets/wpd.png'
import { useState } from 'react';

const Projects = ({project_data,project_des}) => {
  const [sidebar,setsidebar]=useState('sp')
  const clicked = (id) =>
  {
      setsidebar(id)
  }

  return (
    <div className="project_con">
        <div className="sidebar"data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
          <h2 className='head_pro' data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">Projects</h2>
          <div className="project_catogery" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
            <ul>
              <li className={sidebar === 'sp' ? 'clicked' :'not_clicked'} onClick={() => clicked('sp')}  >Software projects <IoMdArrowDropright style={{width:'25px', height:'auto'}}/></li>
              <li className={sidebar === 'ml' ? 'clicked' :'not_clicked'} onClick={() => clicked('ml')} >Machine Learning <IoMdArrowDropright style={{width:'25px', height:'auto'}}/></li>
              <li className={sidebar === 'dp' ? 'clicked':null} onClick={() => clicked('dp')}>Deep Learning <IoMdArrowDropright style={{width:'25px', height:'auto'}}/></li>
              <li className={sidebar === 'wp' ? 'clicked':null} onClick={() => clicked('wp')} >Web Projects<IoMdArrowDropright style={{width:'25px', height:'auto'}}/></li>
            </ul>

          </div>
          <div className="project_catogery_mob"  data-aos="fade" data-aos-delay="1000" data-aos-duration="1000">
            <ul>
              <li className={sidebar === 'sp' ? 'clicked_mob' : null}  onClick={() => clicked('sp')}  data-aos="fade" data-aos-delay="1000" data-aos-duration="1000">Software projects </li>
              <li className={sidebar === 'ml' ? 'clicked_mob':null} onClick={() => clicked('ml')} data-aos="fade" data-aos-delay="1000" data-aos-duration="1000">Machine Learning </li>
              <li className={sidebar === 'dp' ? 'clicked_mob':null} onClick={() => clicked('dp')} data-aos="fade" data-aos-delay="1000" data-aos-duration="1000">Deep Learning </li>
              <li className={sidebar === 'wp' ? 'clicked_mob':null} onClick={() => clicked('wp')} data-aos="fade" data-aos-delay="1000" data-aos-duration="1000">Web Projects</li>
            </ul>
          </div>
        </div>
      
        <div className="project_cards">
             <div className="cardroll">
             {project_data.map((item) => (
              <div className="card"data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                <div className="crd_img_con">
                  <img src={item.get_image} alt="card_img" className='crd_img'/>
                </div>
                <div className="pro_des">
                  <h4>{item.title}</h4>
                  <p>{item.short_description}</p>
                </div>
              <div className="crd_btn_con">
              <div className="crd_btn" >                
                <Link to ="/projects/:projectId">
                   <button className='view_btn' style={{textDecoration:'none'}} onClick={()=>project_des(item.id)} key={item.id}>View more <MdKeyboardDoubleArrowRight style={{width:'15px',height:'auto',marginLeft:'5px'}}/></button>
                </Link>
                <Link to ="/projects/:projectId">
                  <button className='enroll_btn'>Enroll</button>
                </Link>

             
                  
                </div>

              </div>
              
              
              </div>
             ))} 

            </div>
            
        </div>
    
    </div>
 
  )
}

export default Projects