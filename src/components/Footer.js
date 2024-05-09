import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='main.footer'>
         <div className='container'>
         <div className='row'>
            {/* colum1 */}
            <div className='row'>
                <h4>Location</h4>
                <ul className='list.unstyled'></ul>
                <li>longitude 40dgrs west</li>
                <li>Kenya, Nairobi</li>
                <li>county 47</li>
            </div>
             {/* colum2 */}
             <div className='col'>
                <ul className='list.unstyled'></ul>
                <h4>CONTACTS</h4>
                <li>#TEL.NO +254 792 438 103</li>
                <li>Email yassinyussuf414@gmail.com</li>
                <li>INSTAGRAM am.yassin</li>
            </div>
              {/* colum3 */}
              <div className='col'>
                <ul className='list.unstyled'></ul>
                <h4>WORK HOURS </h4>
                <li>24HRS</li>
                <li>MON TO SUN</li>
                <li>AVAILABLE AT ANY TIME</li>
            </div>
            <hr />
            <div className='row'>
                <p className='col-sm'>
                    $copy;{new Date().getFullYear()} THICC MIMES INC | All right reserved | Privacy

                </p>

            </div>
        </div>
        </div>
        </div>
  )
}

export default Footer