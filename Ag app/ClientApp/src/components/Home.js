import React from 'react';
import "./Home.css";

export function Home() {

    return (
      <div>
        <h1>Welome!</h1>
        <h3>We connect farmers and retailers</h3>

            <p>
                Our goal is to help farmers get the inputs they need for their farms. We do this by giving them the ability to make requests for products and services to all the retailers
                in our network. Retailers are then able to respond to those requests with product and service recommendations.
                Create an account today!
            </p>
            <br></br>
            <a className="register-link" href="/register-farmer">Register: Farmer</a>
            <br></br>
            <a className="register-link" href="/register-retailer">Register: Retailer</a>

      </div>
    );
  }

