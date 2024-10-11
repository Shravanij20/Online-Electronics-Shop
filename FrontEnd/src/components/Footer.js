
import React from 'react'


export default function Footer() {
  return (
    <div>
  <footer className="bg-dark text-center text-white">
 
  <div className="container p-4">

  <section className="mb-4">
      <img src="img/logo_b.png"  alt="logo" style={{height:'100px',width:'250px'}}/>
  </section>
  
    <section className="mb-4">
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>


      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

    </section>
   

    <section className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" htmlFor="form5Example21">Email address</label>
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
    <section className="mb-4">
      <p>
      We're dedicated to providing top-quality electronic products and exceptional customer service. Whether you have questions about our products, need assistance with an order, or have any other inquiries, we're here to help.
      </p>
    </section>
    
    <section className="">
      
      <div className="row">
    
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Contact</h5>

          <ul className="list-unstyled mb-0">
            <li className="text-white">
              <p>Address: 92 Sanjivani Colony , Kopargaon </p>
            </li>
            <li>
            <p>Email: electronic@gmail.com</p> 
            </li>
            <li>
                <p>Phone No: 123-456-789</p>
            </li>
            <li>
                <p>Hours: 10.00- 11.00, Mon - Sat</p>
            </li>
            
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">About</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <h6 className="text-white">About Us</h6>
            </li>
            <li>
              <h6 className="text-white">Privacy Policy</h6>
            </li>
            <li>
              <h6 className="text-white">Terms & Conditions</h6>
            </li>
            <li>
              <h6 className="text-white">Contact Us</h6>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">My Account</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <h6 className="text-white">Sign In</h6>
            </li>
            <li>
              <h6 className="text-white">View Cart</h6>
            </li>
            <li>
              <h6 className="text-white">My Whislist</h6>
            </li>
            <li>
              <h6 className="text-white">Help</h6>
            </li>
          </ul>
        </div>
      
      </div>
    </section>
  </div>
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    <h5>Thank You</h5>
  </div>
</footer>
    </div>
  )
}

