import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/* column1 */}
          <div className='col'>
            <h4>Location</h4>
            <ul className='list-unstyled'>
              <li>Kenya, Nairobi</li>
              <li>county 47</li>
            </ul>
          </div>
          {/* column2 */}
          <div className='col'>
            <h4>CONTACTS</h4>
            <ul className='list-unstyled'>
              <li>#TEL.NO +254 792 438 103</li>
              <li>Email yassinyussuf414@gmail.com</li>
              <li>INSTAGRAM am.yassin</li>
            </ul>
          </div>
          {/* column3 */}
          <div className='col'>
            <h4>WORK HOURS </h4>
            <ul className='list-unstyled'>
              <li>24HRS</li>
              <li>MON TO SUN</li>
              <li>AVAILABLE AT ANY TIME</li>
            </ul>
          </div>
          <hr />
          <div className='row'>
            <p className='col-sm'>
              &copy;{new Date().getFullYear()} SKY EASE INC | All right reserved | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
