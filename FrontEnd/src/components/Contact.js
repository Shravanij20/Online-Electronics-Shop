
import React from 'react'

export default function Conatct() {
  return (
    <div>
      <div className="container1">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            We're dedicated to providing top-quality electronic products and exceptional customer service. Whether you have questions about our products, need assistance with an order, or have any other inquiries, we're here to help.
          </p>

          <div className="info">
            <div className="information">
              <img src="img/location.png" className="icon" alt="" />
              <p>92 Sanjivani Colony , Kopargaon</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icon" alt="" />
              <p>electronic@gmail.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="https://formspree.io/f/mzblqawj" method='post' autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container1">
              <input type="text" name="name" className="input" placeholder='Username' />
            </div>
            <div className="input-container1">
              <input type="email" name="email" className="input" placeholder='Email'/>
              
            </div>
            <div className="input-container1">
              <input type="tel" name="phone" className="input" placeholder='Phone' />
    
            </div>
            <div className="input-container1 textarea">
              <textarea name="message" className="input" placeholder='Message'></textarea>
            </div>
            <input type="submit" value="Send" className="btn1" />
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

  
    