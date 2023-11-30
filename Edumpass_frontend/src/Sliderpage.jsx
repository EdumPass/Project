import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './slider.css'

const Sliderpage = ({sliderimg}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

      };

  return (

    <div className="slide" data-aos='zoom-in-down' data-aos-delay="500"data-aos-duration='1000'>
     <Slider {...settings}>
      {sliderimg.map((image, index) => (
        <div key={index} className='divslide'>
          <div className='overlay'></div>
          <img className='cont' src={image} alt={`slide-${index}`} />
        </div>
      ))}
      
    </Slider>
    <div className="centered-content">
          <h2> Why Settle for Ordinary <br/>
          When You Can Achieve Extraordinary !!</h2>
          <button className="register-btn" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration='1000'>Register Now</button>
    </div>
 
   
     </div>
  )
}

export default Sliderpage