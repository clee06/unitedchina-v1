import React from 'react';
import './Contact.css';
import MapContainer from '../Map.js';
import Footer from '../Footer.js';

function Contact() {
    return (
        <> 
            <div className="contact__container">
                <h1> For all enquires, please reach out to </h1>

                <div className="contact__info">
                    <div className="contact__details">
                        <p> 15/F, Tiffan Tower </p>
                        <p> 199 Wanchai Road, Wanchai, Hong Kong </p> 
                        <a className='mailTo' href="mailto:perry.lee@united-china.com.hk"> perry.lee@united-china.com.hk</a>
                    </div>

                    <div className="contact__details">
                        <p> Tel: +852-3103-9222 </p>
                        <p> Fax: +852-3585 3510 </p>  
                    </div>
                </div>
            </div>
            <MapContainer />
            <Footer />
        </>
    )
}

export default Contact