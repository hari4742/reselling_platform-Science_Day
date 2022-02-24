
import React,{Fragment} from 'react';
import "../Styles/contact-us.css";
import img from '../Images/cuh_logo.png';

function ContactUs() {
  return (
    <Fragment>
    <div>
      <div className="port1">
        {/* <img id="logo" src={img} /> */}
        <p id="letter">Help Center</p>
      </div>
      <div className="port2">
        <a href="https://help.olx.in/hc/en-us/articles/360010663480">
          Never scan QR code or share your OTP with anyone
        </a>
      </div>
      <div className="port3">
        <a href="#">
          Please beware of using unsolicited modes for money transaction(s)
          other than known &amp; safe payment methods.- Click here to know more
        </a>
      </div>
      <div className="port4">
        <h1>HI. HOW CAN I HELP YOU?</h1>
      </div>
      <div className="port5"><br/><br/>
      <button id="click">User Testimonials</button><br/><br/>
      <button id="click">Buyer FAQs</button><br/><br/>
      <button id="click">Seller FAQs</button><br/><br/>
      <button id="click">General Queries</button><br/><br/>
      <button id="click">Trust & Safety</button><br/><br/>
      <button id="click">Legal & Privacy Policy</button><br/><br/>
      <button id="click">Coronavirus Advisory</button><br/><br/>
      
      </div>
    </div>
    </Fragment>
  );
}

export default ContactUs;