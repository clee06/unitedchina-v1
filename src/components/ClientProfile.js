import React from 'react';
import "./ClientProfile.css";

function ClientProfile() {
    return (
        <>
            <div className="profile__container">    

                <div className="profile__header">
                        <h2> Client Profile </h2>
                </div>      

                <div class='client__profiles'>
                    <div className='profile__wrapper'>

                        <div className='profile__items'>
                            {/* <a className='profile__title'><h2>Financial Instituions</h2></a> */}
                            <h2> Financial Instituions </h2>
                            <p>Principal Insurance Company HK Ltd. 信安 保 險</p>
                        </div>

                        <div className='profile__items'>
                            {/* <a className='profile__title'><h2>Professional & Consultancy Clients</h2></a> */}
                            <h2> Professional & Consultancy Clients </h2>
                            <p> Benoy Ltd. </p>
                            <p> Lead 8 Ltd. </p> 
                            <p> LWDesign Ltd.</p>
                        </div>

                        <div className='profile__items'>
                            {/* <a className='profile__title'><h2> Public Transportation & Logistics </h2></a> */}
                            <h2> Public Transportation & Logistics </h2>
                            <p> Cargo-Partner Logistics (China) Ltd. </p>
                            <p> Geodis Wilson HK Ltd. </p> 
                            <p> Hellmann Worldwide Logistics Ltd. </p>
                        </div>

                        <div className='profile__items'>
                            {/* <a className='profile__title'><h2> Airways </h2></a> */}
                            <h2> Airways </h2>
                    
                            <p> South African Airways 南 非 航 空 </p>
                        </div>

                        <div className='profile__items'>
                            {/* <a className='profile__title'><h2> Publishing & Advertising </h2></a> */}
                            <h2> Publishing & Advertising </h2>

                            <p> POAD Ltd. </p>
                            <p> Light House Technologies Ltd. </p> 
                            <p> LIM InfraSystems Co. Ltd. / Square Solutions </p>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default ClientProfile



{/* <div className="profile__section">
                    <h3> Financial Instituions </h3>
                    <ul>
                        <li>Principal Insurance Company HK Ltd. 信安 保 險 </li>
                    </ul>
                </div>

                <div className="profile__section">
                    <h3> Professional & Consultancy Clients </h3>
                    <ul>
                        <li> Benoy Ltd. </li>
                        <li> Lead 8 Ltd. </li>
                        <li> LWDesign Ltd. </li>
                    </ul>
                </div>

                <div className="profile__section">
                    <h3> Public Transportation & Logistic </h3>
                    <ul>
                        <li> Cargo-Partner Logistics (China) Ltd.</li>
                        <li> Geodis Wilson HK Ltd. </li>
                        <li> Hellmann Worldwide Logistics Ltd. </li>
                    </ul>
                </div>

                <div className="profile__section">
                    <h3> Airways </h3>
                    <ul>
                        <li> South African Airways 南 非 航 空 </li>
                    </ul>
                </div>

                <div className="profile__section">
                    <h3> Non Profit Organizations </h3>
                    <ul>
                        <li> Hong Kong Institution of Engineers 香港工程師學會 </li>
                    </ul>
                </div>

                <div className="profile__section">
                    <h3> Publishing & Advertising </h3>
                    <ul>
                        <li> POAD Ltd. </li>
                        <li> Light House Technologies Ltd. </li>
                        <li> LIM InfraSystems Co. Ltd. / Square Solutions Ltd. </li>
                    </ul>
                </div> */}