import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <img src='media/images/largestBroker.svg' alt='Award'/>
                </div>
                <div className='col-lg-6 col-sm-12 p-5 mt-3'>
                    <h1>largest stock broker in India</h1>
                    <p className='mb-5'>2+ million ZenoTrade clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivates</p>
                                </li>
                                <li>
                                    <p>Currency derivates</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media\images\pressLogos.png' alt='Press logo' style={{width: "90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;