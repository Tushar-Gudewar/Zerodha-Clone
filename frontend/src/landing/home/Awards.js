import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5 '>
                    <img src='media/images/largestBroker.svg' alt='AwardsImg' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h2>Largest Stock broker in India</h2>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volume in india daily by trading and investing in:</p>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <ul>
                                <li>Future & options</li>
                                <li>Commodity dreivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds & Govt. Securities</li>
                            </ul>
                        </div>
                        <img src='media/images/pressLogos.png' alt='Awards' className='mt-4' />
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Awards;