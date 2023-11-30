import React from 'react';
import { useState } from 'react';
import './header_st.css';
import logo from './assets/react.svg'
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [menuclicked,setmenuclicked] = useState()
  const handle_mob_menu =(id)=>
  {
    setmenuclicked(id)
  }
 return (
  <header>
    <div className="App-header" data-aos="fade-down" data-aos-delay="500"data-aos-duration='1000'>
      <div className="title">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Edumpass</h1>

      </div>
      
      <nav>
        <ul className="nav-list">
          <li className='nav-item'>
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a href="/Projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/projects">Courses</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="signin">
          <a href="/login"><button className="button-31" role="button">Login</button></a>
      </div>
      <div className="menu_btn">
          <IoMenu style={{width:'38px',height:'auto',color:'white',display:'flex'}} className='menu_icon'  onClick={()=>handle_mob_menu()}/>
      </div>
    </div>
    {/* Moblie menu view */}
    <div className="mob_view">
      <div className="head_con_mobile">
      <nav>
        <ul className="nav-list-mob">
          <li className='nav-item-mob'>
            <Link to="*">Home</Link>
          </li>
          <li className="nav-item-mob">
            <a href="/Projects">Projects</a>
          </li>
          <li className="nav-item-mob">
            <a href="/projects">Courses</a>
          </li>
          <li className="nav-item-mob">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      </div>
    </div>
  </header>
          
      
    
 );
};

export default Header;