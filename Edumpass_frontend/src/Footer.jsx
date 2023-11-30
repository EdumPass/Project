import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'
import {BsFacebook} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {FaHome} from 'react-icons/fa'
import {BsFillBox2HeartFill} from 'react-icons/bs'
import {BiSolidCategoryAlt} from 'react-icons/bi'
import {MdFeedback} from 'react-icons/md'
import {BiSupport} from 'react-icons/bi'
import {MdLocationPin} from 'react-icons/md'
import {AiFillInfoCircle} from 'react-icons/ai'
import {BiSolidPhoneCall} from 'react-icons/bi'
import qr from './assets/QR_Code_example.png'

const Footer = () => {
  return (
     <footer>
        <div className="fl" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  data-aos-delay="600" data-aos-duration="1000">
          <h2>Edumpass</h2>         
          <div className='footmenus'>
            <ul className="flex">
                <li className='menuopt'><FaHome style={{width:'18px',height:'18px'}} />{'\u00A0'} Home</li>
                <li className='menuopt'><BsFillBox2HeartFill/>{'\u00A0'} Projects</li>
                <li className='menuopt'><BiSolidCategoryAlt style={{width:'19px',height:'19px'}}  />{'\u00A0'} Courses</li>
                <li className='menuopt'><MdFeedback style={{width:'18px',height:'18px'}} />{'\u00A0'} Feedback</li>
            </ul>
            <ul className="flex">
                <li className='menuopt'><BiSupport style={{width:'18px',height:'18px'}} />{'\u00A0'} Support</li>
                <li className='menuopt'><MdLocationPin style={{width:'19px',height:'19px'}} />{'\u00A0'} Live class</li>
                <li className='menuopt'><AiFillInfoCircle style={{width:'18px',height:'18px'}} />{'\u00A0'} About</li>
                <li className='menuopt'><BiSolidPhoneCall style={{width:'20px',height:'20px'}} />{'\u00A0'} Contact Us</li>
            </ul>
          </div>
          <p className='cpyrig'>Copyright © 2023Edumpass.com</p>
        </div>

        <div className="fr" data-aos="fade" data-aos-delay="500" data-aos-duration="1000">
            <div className="qr">
            <div className="map">
                <img src={qr} alt="" className='map' />
            </div>

            </div>
            <h3>Scan and Register</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            
           <div className="social">
            <BiLogoGmail style={{width: '35px',height: '35px',backgroundcolor: '#ef233c',margin:'auto'}} />
            <AiFillInstagram style={{width: '38px',height: '38px',backgroundcolor: '#ef233c',margin:'auto'}} />
            <BsFacebook style={{width: '30px',height: '30px',backgroundcolor: '#ef233c',margin:'auto'}} />
            <AiFillMessage style={{width: '32px',height: '32px',backgroundcolor: '#ef233c',margin:'auto'}} />
          </div>
        </div>
      </footer> 
  )
}

export default Footer