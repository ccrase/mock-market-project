import React from 'react';
import './index.css';

const AccountSummary = (props) => {

    return(
        <div className="shadow-box-example z-depth-2" style={{"backgroundColor": "white", "margin-bottom": "20px", "padding": "20px 20px 20px 20px"}}>
            <img src={props.user.picture} style={{float: "right"}}></img>
            <p>Brokerage Account</p>
            <p>Account Balance <span style={{color: "green"}}>${props.account_value}</span></p>
            <p>Day Change -$$</p> 

            
        </div>
    )
};

export default AccountSummary;