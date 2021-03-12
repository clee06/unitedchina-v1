import React from 'react';
import '../../App.css';
import ServicesIntro from '../ServicesIntro';
import Footer from '../Footer';

function Services() {
    return (
        <>
            <div className="service__container">
                <div className="service__header">
                    <ServicesIntro/>    
                    <Footer />         
                </div>
            </div>
        </>
    )
}

export default Services
