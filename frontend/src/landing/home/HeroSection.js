import React from 'react';

function HeroSection() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img className='mb-5' src='media/images/homeHero.png' alt='HeroImg' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>
                    Online platform to invest in stocks, crypto, ETFs, and more. 
                </p>
                <div className='d-grid gap-2 col-2 mx-auto'><button type="button" class="btn btn-primary">Sign Up</button></div>
                
            </div>
        </div>
     );
}
 
export default HeroSection;