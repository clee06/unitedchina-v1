import React from 'react';
import './Background.css';

function Background() {
    return (
        <>
            {/* Background Section */}
            <div className='background__container'>
                <div className='background__left'>
                    <img src='../images/img-office.jpg'></img>
                </div>
                <div className='background__rightInfo'>
                    <h3 className='background__header'> Background </h3>
                    <p className='background__info'> 
                    United China has been established in Hong Kong since 1995. <br/>
                    We have 14 full time servicing staff to handle our clients needs and enquiries. 
                    <br/>
                    <br/>
                    At United China we do not only sell the insurance services, instead we provide a comprehensive Risk Management Program to ensure your needs are met and that you will have an effective and efficient protection. 
                    </p>
                </div>
            </div>

            {/* What we do Section */}
            <div className='service__statement__container'>
                <div className='service__left'>
                    <h3> What we do </h3>
                </div>
                <div className='service__rightInfo'>
                    {/* <h3 className='service__header'> Our services </h3> */}
                    <ul className='service__infoList'> 
                        <li className='service__items'> Analyze potential risk exposure which amy affect the company's productivity and profitability.</li>
                        <li className='service__items'>  Provide solutions and alternatives to prevent loss or any inefficency </li>
                        <li className='service__items'> Evalute the costs and benefits for the <strong>Risks Management Program</strong></li>
                        <li className='service__items'> Negotiate the best available coverage for your needs with the renowned insurance companies</li>
                    </ul>
                </div>
            </div>
    
        </>
    )
}

export default Background
