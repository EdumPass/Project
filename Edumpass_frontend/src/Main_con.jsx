import React from 'react'
import './maincont.css'
import pd from './assets/pd1.jpg'
import sd from './assets/sd.jpg'
import fd from './assets/fd.jpg'
import {Link} from "react-router-dom";

const Main_con = () => {
  return (
    <main>
        <div className="cards_roll">
           <Link to ="/projects" style={{textDecoration:'none'}}> <h3 className="cards" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="500">Project Development</h3> </Link>
            <h3 className="cards" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="500">1 to 1 <br /> Mentorship</h3>
            <h3 className="cards" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="500">Online <br />Courses</h3>
            <h3 className="cards" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="500">Skill <br />Development</h3>
            <h3 className="cards" id='exp_card' data-aos="flip-down" data-aos-duration="1000" data-aos-delay="500">Explore <br className='br_mob'/>more</h3>
        </div>
        <div className="project_dev_con">
          <div className="pro_content">
          <h2 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="600" data-aos-duration="1000">Innovative Final Year Project Development</h2>
          <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="600" data-aos-duration="1000">Embark on a transformative journey with our "Innovative Final Year Project Development" section, where academic excellence meets real-world impact. We specialize in guiding students through the conception, execution, and presentation of groundbreaking final year projects. But we're not just about the project – we're about empowering you with the tools for success.</p>
           <div className="pro_dt" id='example-anchor' data-aos-anchor-placement="top-bottom" data-aos-delay="600" data-aos-duration="1000">
           <img src={pd} alt="project_dev" className='pd_img' data-aos="fade-right" data-aos-delay="500" data-aos-duration="800"/>
           <ul  data-aos="fade-top" data-aos-delay="500" data-aos-duration="1500">
                <dt>Holistic Support</dt>
                <dd>Experience end-to-end project development assistance, from ideation to implementation. We're committed to ensuring every aspect of your project aligns with the highest standards of innovation and quality </dd>
                <dt>Documentation and Presentations</dt>
                <dd>Gain a competitive edge with meticulously crafted project documentation. We provide comprehensive reports that not only meet academic requirements but also showcase the depth and sophistication of your work</dd>
                <dt>Paper Publication</dt>
                <dd>Leave a lasting impression with compelling project presentations. Our experts guide you in creating engaging PowerPoint presentations that effectively communicate the significance and impact of your work.</dd>
                    <div className="exp_btn_con">
                    <Link to="/projects">
                    <button className='explore_btn' data-aos="fade-up">Explore More</button>

                    </Link>
                    
                    </div>
            
           </ul>
           </div>
          </div> 
        </div>
      <section className="skills-section">
      <div className="skills-content">
        <h2 className='skills-section-h2' data-aos="fade-right"  data-aos-delay="600" data-aos-duration="1000">Skills Development Programs</h2>
        <p  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  data-aos-delay="600" data-aos-duration="1000">
          Unlock your potential and shape your future with our comprehensive Skills Development Programs. Our carefully curated courses are designed to equip you with the skills demanded by today's dynamic job market. Whether you're a student, recent graduate, or a professional looking to upskill, we have programs tailored for your success and development.
        </p>
      </div>
      <div className="skills-details">
      <div className="skills-image-mob">  
        <img src={sd} alt="Skills Development" className='sd_img' data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000"/>
      </div>
        <ul data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
          <li>
            <strong>Specialized Courses:</strong> <br />Choose from a variety of specialized courses in areas such as programming, data science, artificial intelligence, and more.
          </li>
          <li>
            <strong>Industry-Relevant Curriculum:</strong> <br />Stay ahead of the curve with a curriculum crafted in collaboration with industry experts, ensuring you learn the latest tools and technologies.
          </li>
          <li>
            <strong>Hands-On Learning:</strong> <br />Apply theoretical knowledge to real-world projects, gaining practical experience that sets you apart in the job market.
          </li>
          <div className="exp_btn_con_left">
                    <button className='explore_btn' data-aos="fade-up">Explore More</button>
          </div>
        </ul>
        <div className="skills-image">
        <img src={sd} alt="Skills Development" className='sd_img' data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000"/>
        </div>
      </div>
    </section>
    <section className="testmonial_con" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000" data-aos-anchor=".testimonial_heading">
      <div className="testimonial_heading">
        <h2>Testimonials</h2>
        <p className='test_main_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iusto facere repellat animi minus quam fugit esse aliquid fugiat? Pariatur, saepe. Velit quisquam cupiditate saepe inventore minus eveniet laudantium quis, ipsam, dolorem et culpa voluptatibus repellendus impedit nostrum fuga minima? Explicabo architecto culpa tempore enim velit quam? Aliquam, aut. Dolorum!</p>
      </div>
     <div className="testi_cards" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000" >
          <div className="test_card">
            <h4>Asikahamed</h4>
            <p className='testcard_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos quod saepe iusto. Similique quasi dolore praesentium deleniti consequatur error pariatur fuga rerum perspiciatis, eveniet quam aliquam dolorum officiis reiciendis.</p>
          </div>
          <div className="test_card">
            <h4>Abulhasan</h4>
            <p className='testcard_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos quod saepe iusto. Similique quasi dolore praesentium deleniti consequatur error pariatur fuga rerum perspiciatis, eveniet quam aliquam dolorum officiis reiciendis.</p>
          </div>
          {/* <div className="test_card">
            <h4>Zamir</h4>
            <p className='testcard_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos quod saepe iusto. Similique quasi dolore praesentium deleniti consequatur error pariatur fuga rerum perspiciatis, eveniet quam aliquam dolorum officiis reiciendis.</p>
          </div> */}
          

     </div>
      
    </section>
    <section className="why-choose-section" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
      <h2>Why Choose <br className='br_why_ss'/> Edumpass ?</h2>
        <div className="choose-item" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
          <h3>Expert Instructors</h3>
          <p>
            Learn from industry professionals and subject matter experts who bring real-world experience to the virtual classroom.
          </p>
        </div>

        <div className="choose-item" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
          <h3>Hands-On Projects</h3>
          <p>
            Apply theoretical knowledge through hands-on projects to reinforce your understanding and build a robust portfolio.
          </p>
        </div>

        <div className="choose-item" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
          <h3>Flexible Learning</h3>
          <p>
            Tailor your learning experience with flexible schedules and on-demand courses, allowing you to balance education with other commitments.
          </p>
        </div>

        <div className="choose-item" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
          <h3>Career Guidance</h3>
          <p>
            Access career counseling services, job placement assistance, and resources designed to accelerate your professional growth.
          </p>

      </div>
      
    </section>
    <section className="enquiry_form_con">
      <h2 className='enquiry_form_head' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="600" data-aos-duration="1000">Join Us in Shaping the Future</h2>
      <p data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  data-aos-delay="600" data-aos-duration="1000">Whether you're a student, professional, or lifelong learner, Edumpass is committed to providing a platform that empowers you to achieve excellence. Take the first step towards a brighter future—explore our offerings and start your educational journey today.</p>
       <div className="form_con" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  data-aos-delay="600" data-aos-duration="1000">
          <img src={fd} alt="" className='form_img'/>
        <div className="form_content" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  data-aos-delay="600" data-aos-duration="1000">
          <form action="" className='full_form'>
            <h2 className='form_heading'>Enquiry form</h2>
            <div className="name">
              <label htmlFor="">Name</label>
              <input type="text" placeholder='John Deo'/>
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input type="email" placeholder='johndeo@gmail.com'/>
            </div>
            <div className="moblieno">
              <label htmlFor="">Mobile</label>
              <input type="number" placeholder='9988776655'/>

            </div>
            <div className="interested_in">
              <label htmlFor="">Interested In:</label>
              <select name="" id="" placeholder='Select'>
                <option placeholder='Select'>Select</option>
                <option value="">Project development</option>
                <option value="">1:1 mentorship</option>
                <option value="">Online course</option>
                <option value="">Resume buliding</option>
              </select>
            </div>
            <div className="message_box">
              <label htmlFor="">Message</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Give some msg to as'></textarea>
            </div>
            <div className="smt_btn">
              <button className='submit_btn' data-aos="fade-up">Sumbit</button>
            </div>
            
          </form>
        </div>
      </div>   
    </section>

    </main>

  )
}

export default Main_con