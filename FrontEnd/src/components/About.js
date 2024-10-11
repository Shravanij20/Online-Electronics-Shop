import React from 'react';

import './anant.css';

export default function About_us() {
  return (
    <div className="container">
      <h1>PRODUCT</h1>
      <p>
        "To make electronics shopping, a fulfilling experience" - a thought that was the foundation of our humble beginning, way back in 1980. We, at Electronics Mart India (EMI), sought to uncomplicate the life of our customers by bringing the latest electronic gadgets at the lowest prices. Today, with 12 Lakhs+ square feet of retail space, a strong workforce of 2271 employees, 139 stores, and over 4 decades of legacy - it wouldn’t be inappropriate to say that Electronics Mart India (EMI) is truly iconic. We are the 4th largest consumer durable and electronics retailer in India and as of Financial Year 2020, we are the largest player in the Southern region in revenue terms with dominance in the states of Telangana and Andhra Pradesh (Source: CRISIL Report) Currently, we are South India’s largest and most reliable electronics retailer. Bajaj Electronics – a brand owned by EMI, is a household name when it comes to purchasing electronics. Garnering great customer reviews, competitive prices, convenient finance options, and impeccable customer service defines us.
      </p>

      <ul>
        <li>Competitive price</li>
        <li>Top brands</li>
        <li>Wide range of products</li>
        <li>Finance options</li>
      </ul>

      <h1>VALUES</h1>

      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-5 py-5 py-md-0">
          <div className="card">
            <img src="img/wt_ab.jpg" alt="Hello" style={{width:'100%'}}/>
          </div>
        </div>
        <div className="col-md-7 py-3 py-md-0">
          <hr />
          <p>
            <b>Quality First:</b>
            Everyone has aspirations of having a home with luxury electronic brands and have a comfortable home. Our aim is to serve our customers with top-notch quality brands yet maintain the customer and pocket-friendly prices. Quality is a need in itself, and we have proven to cater to our customers’ satisfaction and continue to do so.
            <br /><br />
            <b>Updated About Electronics Trends:</b>
            A new day is a new introduction to a new trend. We, as a team, work towards learning about the electronic trends in and around the globe to provide our audience with worldly home appliances and gadgets in time. The need to stay updated applies to us because our main priority is our customers’ necessities.
            <br /><br />
            <b>Loyalty is a Priority:</b>
            We as a team, promise to put forward the top and the most reliable products and service to our customers. We wish to keep the consistency of bringing a smile on each of our customer's faces with our successful attempts at being trustworthy.
            <br /><br />
            <b>Best Service:</b>
            We aspire to build a bond with our customers. To be at our audience’s service any minute of the day and guide them with any help regarding technology and electrical appliances is our number one priority.
          </p>
          <div id="offer">
            <div className="row" style={{width:'100%'}}>
              <div className="col-md-3 py-4 py-md-0">
                <i className="fa-solid fa-cart-shopping"></i>
                <h3>Free Shipping</h3>
                <p>On order over $1000</p>
              </div>
              <div className="col-md-3 py-4 py-md-0">
                <i className="fa-solid fa-rotate-left"></i>
                <h3>Free Returns</h3>
                <p>Within 30 days</p>
              </div>
              <div className="col-md-3 py-3 py-md-0">
                <i className="fa-solid fa-truck"></i>
                <h3>Fast Delivery</h3>
                <p>World Wide</p>
              </div>
              <div className="col-md-3 py-3 py-md-0">
                <i className="fa-solid fa-thumbs-up"></i>
                <h3>Big choice</h3>
                <p>Of products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-warning" id="anant">
        Read More...
      </button>

      <a href="/" className="arrow">
        <i>
          <img src="./images/arrow.png" alt="" />
        </i>
      </a>
    </div>
  );
}
