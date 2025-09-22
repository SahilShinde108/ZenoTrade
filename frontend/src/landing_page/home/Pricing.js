import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-5 p-3'>
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p className='mt-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration: "none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-7 mb-3'>
                    <div className='row text-center'>
                        <div className='col p-3'>
                            <img src='media/images/pricing0.svg' style={{width: "60%"}}/>
                            <p>Free account opening</p>
                        </div>
                        <div className='col p-3'>
                            <img src='media/images/pricing0.svg' style={{width: "60%"}}/>
                            <p>Free equity delivery and<br/>direct mutual funds</p>
                        </div>
                        <div className='col p-3'>
                            <img src='media/images/pricingMF.svg' style={{width: "60%"}}/>
                            <p>Intrady and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;