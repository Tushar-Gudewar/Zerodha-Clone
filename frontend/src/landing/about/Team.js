import React from 'react';

function Team() {
    return ( 
        <div className='container' style={{marginTop:"100px", marginBottom:"100px",lineHeight:"1.6"}}>
            <h3>People</h3>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-3 text-center'>
                    <img src='media/images/nithinKamath.jpg' alt='Nithin Kamath' style={{width:'100%' ,borderRadius:"100%"}}/>
                    <h5 style={{marginTop:"10px"}}>Nithin Kamath</h5><br/>
                    <p className='text-muted'>Founder & CEO</p>
                </div>
                <div className='col ' style={{paddingLeft:"50px"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
                <div className='col-2'></div>

            </div>
        </div>
     );
}

export default Team;