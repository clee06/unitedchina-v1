import React from 'react';
import './BusinessPartners.css';

function BusinessPartners() {
    return (
        <>
            <div className='partners__header'>
                <h2 className='partners__title'> Business Partners </h2>
            </div>           

            <div className='partners__container'>              
                <div className='partners__card'>
                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/AIA-logo2.png'></img> 
                        <p> AIA Hong Kong </p>           
                    </div>

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/AXA-logo.png'></img> 
                        <p> AXA Hong Kong </p>           
                    </div>

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/aig-logo.png'></img> 
                        <p> AIG Hong Kong </p>           
                    </div>  

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/bupa-logo2.png'></img> 
                        <p> BUPA </p>           
                    </div>
                    
                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/ing-logo.png'></img> 
                        <p> ING Insurance </p>           
                    </div >    

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/manulife-logo.png'></img> 
                        <p> Manulife </p>           
                    </div>     

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/msig-logo.png'></img> 
                        <p> MSIG Insurance </p>           
                    </div>     

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/metlife-icon.png'></img> 
                        <p> Metlife Insurance </p>           
                    </div>   

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/cigna-logo.png'></img> 
                        <p> CIGNA </p>          
                    </div>          

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/prudential-logo.png'></img> 
                        <p> Prudential </p>          
                    </div>  

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/mm-logo.png'></img> 
                        <p> Mass Mutual </p>          
                    </div>                         

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/zurich-logo.png'></img> 
                        <p> Zurich Insurance</p>           
                    </div>   
                </div>
            </div>
        </>
    )
}

export default BusinessPartners;