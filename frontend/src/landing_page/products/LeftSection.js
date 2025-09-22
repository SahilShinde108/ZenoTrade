import React from 'react';

function LeftSection({imageURl, productName, productDescription, tryDemo, learnMore, googleplay, appstore}) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURl}/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{marginLeft: "50px", textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googleplay}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appstore} style={{marginLeft: "50px"}}><img src='media/images/appStoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;