import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import './project_des.css'
const Project_Details = () => {
  return (
    <div className="pro_des_con">
        <div className="pro_nav_head">
            <ul>
                <li>Project Development <IoMdArrowDropright style={{width:'25px', height:'auto'}}/></li>
                <li>Webphising Detection</li>
            </ul>
        </div>    
        <h2 className='pro_des_h2'>Project Title</h2>
        <div className="vid_con">
        <iframe  src="https://www.youtube.com/embed/ylzkkFHMD1E?si=_6heUpGsrC06iJ1j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='youtube_con'></iframe>
        </div>
        <div className="pro_des_de">
            <h3>Project Description</h3>
            <p style={{ fontSize: '16px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, non ut atque illo aliquid, aliquam quae quisquam fugiat voluptates dolore facilis omnis perspiciatis eius nihil necessitatibus esse aspernatur doloremque voluptatem! Explicabo, quaerat alias quidem corrupti aliquam sit incidunt sapiente vero molestiae natus. Facilis reprehenderit consequatur suscipit nulla voluptas aliquid hic, voluptatibus facere cum vitae sint iste neque quam fuga eos placeat magni iusto ducimus voluptates blanditiis assumenda. Exercitationem eos enim ipsa ullam eligendi facere id cumque aliquid? Id minima sed nisi aut, ratione sapiente natus doloribus quaerat quam illo dignissimos aspernatur ipsam dicta eveniet at accusamus recusandae. Impedit, voluptas perspiciatis.</p>
            <h3>Probelm Statement</h3>
            <p  style={{ fontSize: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eaque non, repudiandae voluptatibus optio, fugiat soluta id ex ratione temporibus nesciunt delectus perferendis, commodi molestiae. Optio harum nesciunt fuga a aliquam rerum perferendis veritatis deserunt quibusdam nihil maiores aspernatur velit amet, eligendi, ex provident nam quis sed autem, eveniet esse!</p>
            <h3>Technology Used</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React.JS</li>
                <li>JavaScript</li>
            </ul>
            <h3>Key Features</h3>
            <ul>
                <li>Lorem.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit.</li>
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