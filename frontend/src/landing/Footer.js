import React from 'react';

function Footer() {
    return ( 
        <div className='container border-top mt-5 pt-5'>
            
            <div className='row'>
                <div className='col-3 p-3'>
                    <img src='media/images/logo.svg' style={{width:'50%'}}/>
                    <br/>
                    <p className='text-muted' style={{fontSize:'16px'}}>&copy; 2010-2025, Not Zerodha Broking Ltd. All rights reserved.</p>
                    <p></p>
                </div>
                <div className='col-3'>
                    <p>Company</p>
                    <a href=''>About</a><br/>
                    <a href=''>products</a><br/>
                    <a href=''>pricing</a><br/>
                    <a href=''>Referrals</a><br/>
                    <a href=''>Careers</a><br/>
                    <a href=''>Press & Media</a>
                </div>
                <div className='col-3 '>
                    <p>Support</p>
                    <a href=''>Contact</a><br/>
                    <a href=''>Support Portal</a><br/>
                    <a href=''>Z-Connect blog</a><br/>
                    <a href=''>List of charges</a><br/>
                    <a href=''>Download & resources</a><br/>
                </div>
                <div className='col-3 '>
                    <p>Accounts</p>
                    <a >Open an account</a><br/>
                    <a >Fund transfer</a><br/>
                    <a >60 days money challenge</a><br/>
                </div>
            </div>
            <div className='row text-muted mt-5' style={{fontSize:'10px'}}>
                <p>
                    Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p>
                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p>
                <p>
                    <a href=''>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
                </p>
                <p>
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                </p>
                <p>
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                </p>
                <ul className='list-unstyled d-flex gap-3 text-center links ' style={{fontSize:'12px',paddingLeft:'15%',opacity:'0.8'}}>
                    <li><a href='https://www.nseindia.com/'>NSC</a></li>
                    <li><a href='https://www.bseindia.com/'>BSC</a></li>
                    <li><a href='https://www.mcxindia.com/'>MCX</a></li>
                    <li><a href='https://zerodha.com/terms-and-conditions/ '>Terms & Conditions</a></li>
                    <li><a href='https://zerodha.com/disclosure/'>Disclosure</a></li>
                    <li><a href='https://zerodha.com/tos/investor-charter/'>Investor charter</a></li>
                </ul>
            </div>
        </div>
     );
}

export default Footer;