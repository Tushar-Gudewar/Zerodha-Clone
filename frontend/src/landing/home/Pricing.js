import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable Pricing</h1>
                    <p>we piomeeredthe concept of discount broking the price transprancy in India. Flat fee and No hidden charges. </p>
                    <a href='#'style={{textDecoration:'none'}} > See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>     
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center '>
                        <div className='col p-4 border'>
                            <h1>Rs0</h1>
                            <p>Free equity delivery and <br></br> direct mutual funds</p>
                        </div>
                        <div className='col p-4 border'>
                            <h1>Rs20</h1>
                            <p>Intraday and F&O  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;